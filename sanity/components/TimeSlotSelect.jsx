'use client'

import { useCallback, useEffect, useState, forwardRef } from 'react'
import { Box, Select, Stack, Text } from '@sanity/ui'
import { useFormValue, useClient, PatchEvent, set } from 'sanity'

const TimeSlotSelect = forwardRef(function TimeSlotSelect(props, ref) {
  const [timeSlots, setTimeSlots] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const client = useClient({ apiVersion: '2023-05-03' })

  // Get the class reference using useFormValue
  const classRef = useFormValue(['class', '_ref'])
 
  useEffect(() => {
    async function fetchTimeSlots() {
      if (!classRef) {
        setTimeSlots([])
        return
      }

      setLoading(true)
      try {
        const query = `*[_type == "class" && _id == $classId][0].timeSlots[]{
          _key,
          date,
          startTime,
          endTime,
          availableSeats,
          isActive
        }`

        const result = await client.fetch(query, {
          classId: classRef,
        })

        console.log('Fetched time slots:', result)
        // Filter out inactive time slots and sort by date
        const activeTimeSlots = result
          .filter(slot => slot.isActive)
          .sort((a, b) => new Date(a.date) - new Date(b.date))
        
        setTimeSlots(activeTimeSlots)
      } catch (err) {
        console.error('Error fetching time slots:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTimeSlots()
  }, [classRef, client])

  const handleChange = useCallback((event) => {
    const selectedValue = event.target.value
    console.log('Selected time slot:', selectedValue)
    
    // Create a patch event using PatchEvent.from and set helper
    props.onChange(
      PatchEvent.from(set(selectedValue))
    )
  }, [props.onChange])

  if (loading) {
    return <Text>Loading time slots...</Text>
  }

  if (error) {
    return <Text>Error loading time slots: {error}</Text>
  }

  if (!classRef) {
    return <Text>Please select a class first</Text>
  }

  return (
    <Stack space={3}>
      <Select
        ref={ref}
        value={props.value || ''}
        onChange={handleChange}
        disabled={loading || timeSlots.length === 0}
      >
        <option value="">Select a time slot</option>
        {timeSlots.map((slot) => (
          <option key={slot._key} value={slot._key}>
            {new Date(slot.date).toLocaleDateString()} - {slot.startTime} to {slot.endTime} ({slot.availableSeats} seats available)
          </option>
        ))}
      </Select>
      {timeSlots.length === 0 && !loading && (
        <Text size={1} style={{ color: '#666' }}>
          No available time slots found for this class
        </Text>
      )}
    </Stack>
  )
})

export default TimeSlotSelect 