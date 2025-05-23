import React, { useState } from 'react'
import { Box, Button, Card, Flex, Grid, Stack, TextInput, Label, Checkbox, Text, Badge } from '@sanity/ui'
import { set, unset } from 'sanity'

const daysOfWeek = [
  { title: 'Monday', value: '1' },
  { title: 'Tuesday', value: '2' },
  { title: 'Wednesday', value: '3' },
  { title: 'Thursday', value: '4' },
  { title: 'Friday', value: '5' },
  { title: 'Saturday', value: '6' },
  { title: 'Sunday', value: '0' },
]

const BulkTimeSlotInput = ({ value = [], onChange }) => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [selectedDays, setSelectedDays] = useState([])
  const [startTime, setStartTime] = useState('09:00')
  const [endTime, setEndTime] = useState('10:00')
  const [maxCapacity, setMaxCapacity] = useState(10)
  const [availableSeats, setAvailableSeats] = useState(10)
  const [previewSlots, setPreviewSlots] = useState([])

  const validateInputs = () => {
    if (new Date(endDate) < new Date(startDate)) {
      return 'End date must be after start date'
    }
    if (new Date(`2000-01-01T${endTime}`) <= new Date(`2000-01-01T${startTime}`)) {
      return 'End time must be after start time'
    }
    if (maxCapacity < 1) {
      return 'Maximum capacity must be at least 1'
    }
    if (availableSeats < 0 || availableSeats > maxCapacity) {
      return 'Available seats must be between 0 and maximum capacity'
    }
    if (selectedDays.length === 0) {
      return 'Please select at least one day'
    }
    return null
  }

  const formatDate = (dateString) => {
    if (!dateString) return ''
    try {
      const date = new Date(dateString)
      if (isNaN(date.getTime())) return ''
      return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    } catch (error) {
      console.error('Error formatting date:', error)
      return ''
    }
  }

  const getNextOccurrence = (dayOfWeek, start, end) => {
    if (!dayOfWeek || !start || !end) return null
    
    try {
      const today = new Date()
      const startDate = new Date(start)
      const endDate = new Date(end)
      
      if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) return null
      
      if (today > endDate) return null
      
      const daysUntilNext = (parseInt(dayOfWeek) - today.getDay() + 7) % 7
      const nextDate = new Date(today)
      nextDate.setDate(today.getDate() + daysUntilNext)
      
      if (nextDate < startDate) {
        nextDate.setDate(startDate.getDate() + daysUntilNext)
      }
      
      return nextDate <= endDate ? nextDate : null
    } catch (error) {
      console.error('Error calculating next occurrence:', error)
      return null
    }
  }

  const calculateTotalSessions = (dayOfWeek, startDate, endDate) => {
    if (!dayOfWeek || !startDate || !endDate) return 0

    try {
      const start = new Date(startDate)
      const end = new Date(endDate)
      const day = parseInt(dayOfWeek)
      
      if (isNaN(start.getTime()) || isNaN(end.getTime())) return 0
      
      let count = 0
      const current = new Date(start)
      
      while (current <= end) {
        if (current.getDay() === day) {
          count++
        }
        current.setDate(current.getDate() + 1)
      }
      
      return count
    } catch (error) {
      console.error('Error calculating total sessions:', error)
      return 0
    }
  }

  const generateTimeSlotKey = (day, time) => {
    // Ensure day is a string and time is in the correct format
    const dayStr = String(day)
    const timeStr = time.replace(':', '')
    return `${dayStr}-${timeStr}`
  }

  const generatePreview = () => {
    const error = validateInputs()
    if (error) {
      alert(error)
      return
    }

    // Create a single slot for each selected day
    const slots = selectedDays.map(day => {
      const key = generateTimeSlotKey(day, startTime)
      const nextOccurrence = getNextOccurrence(day, startDate, endDate)
      
      return {
        _key: key,
        dayOfWeek: day,
        startTime,
        endTime,
        maxCapacity: Number(maxCapacity),
        availableSeats: Number(availableSeats),
        isActive: true,
        startDate,
        endDate,
        nextOccurrence
      }
    })

    setPreviewSlots(slots)
  }

  const handleAddSlots = () => {
    if (previewSlots.length === 0) {
      alert('Please generate a preview first')
      return
    }

    onChange(set([...value, ...previewSlots]))
    
    // Reset form
    setStartDate('')
    setEndDate('')
    setSelectedDays([])
    setStartTime('09:00')
    setEndTime('10:00')
    setMaxCapacity(10)
    setAvailableSeats(10)
    setPreviewSlots([])
  }

  const handleDayToggle = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    )
  }

  const handleDeleteSlot = (slotKey) => {
    const newValue = value.filter(slot => slot._key !== slotKey)
    onChange(set(newValue))
  }

  const formatPreviewDate = (slot) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const dayName = days[parseInt(slot.dayOfWeek)]
    const startDateFormatted = formatDate(slot.startDate)
    const endDateFormatted = formatDate(slot.endDate)
    const nextOccurrenceFormatted = slot.nextOccurrence ? formatDate(slot.nextOccurrence) : null
    const totalSessions = calculateTotalSessions(slot.dayOfWeek, slot.startDate, slot.endDate)

    console.log('Slot dates:', {
      startDate: slot.startDate,
      endDate: slot.endDate,
      startDateFormatted,
      endDateFormatted,
      nextOccurrenceFormatted,
      totalSessions,
      key: slot._key
    })

    return (
      <Stack space={2}>
        <Text size={1}>
          {dayName} - {slot.startTime} to {slot.endTime}
        </Text>
        <Text size={1} muted>
          Period: {startDateFormatted} to {endDateFormatted}
        </Text>
        {nextOccurrenceFormatted && (
          <Text size={1} muted>
            Next Class: {nextOccurrenceFormatted}
          </Text>
        )}
        <Text size={1} muted>
          Total Sessions: {totalSessions}
        </Text>
      </Stack>
    )
  }

  return (
    <Stack space={4}>
      <Card padding={4} radius={2} shadow={1}>
        <Stack space={4}>
          <Text size={2} weight="semibold">Add Multiple Time Slots</Text>
          
          <Grid columns={2} gap={3}>
            <Stack space={2}>
              <Label>Start Date</Label>
              <TextInput
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Stack>
            <Stack space={2}>
              <Label>End Date</Label>
              <TextInput
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Stack>
          </Grid>

          <Grid columns={2} gap={3}>
            <Stack space={2}>
              <Label>Start Time</Label>
              <TextInput
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                step={900}
              />
            </Stack>
            <Stack space={2}>
              <Label>End Time</Label>
              <TextInput
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                step={900}
              />
            </Stack>
          </Grid>

          <Grid columns={2} gap={3}>
            <Stack space={2}>
              <Label>Max Capacity</Label>
              <TextInput
                type="number"
                value={maxCapacity}
                onChange={(e) => setMaxCapacity(Number(e.target.value))}
                min={1}
              />
            </Stack>
            <Stack space={2}>
              <Label>Available Seats</Label>
              <TextInput
                type="number"
                value={availableSeats}
                onChange={(e) => setAvailableSeats(Number(e.target.value))}
                min={0}
              />
            </Stack>
          </Grid>

          <Stack space={2}>
            <Label>Days of the Week</Label>
            <Grid columns={[2, 4]} gap={2}>
              {daysOfWeek.map((day) => (
                <Flex key={day.value} align="center" gap={2}>
                  <Checkbox
                    checked={selectedDays.includes(day.value)}
                    onChange={() => handleDayToggle(day.value)}
                  />
                  <Text size={1}>{day.title}</Text>
                </Flex>
              ))}
            </Grid>
          </Stack>

          <Flex gap={2}>
            <Button
              mode="ghost"
              onClick={generatePreview}
              disabled={!startDate || !endDate}
            >
              Generate Preview
            </Button>
            <Button
              tone="primary"
              onClick={handleAddSlots}
              disabled={previewSlots.length === 0}
            >
              Add Time Slots
            </Button>
          </Flex>
        </Stack>
      </Card>

      {previewSlots.length > 0 && (
        <Card padding={4} radius={2} shadow={1} tone="positive">
          <Stack space={3}>
            <Text size={2} weight="semibold">Preview ({previewSlots.length} slots)</Text>
            <Stack space={2}>
              {previewSlots.slice(0, 5).map((slot) => (
                <Box key={slot._key} padding={2}>
                  {formatPreviewDate(slot)}
                </Box>
              ))}
              {previewSlots.length > 5 && (
                <Text size={1} muted>
                  ...and {previewSlots.length - 5} more slots
                </Text>
              )}
            </Stack>
          </Stack>
        </Card>
      )}

      {value && value.length > 0 && (
        <Card padding={4} radius={2} shadow={1}>
          <Stack space={3}>
            <Text size={2} weight="semibold">Existing Time Slots ({value.length})</Text>
            <Stack space={2}>
              {value.map((slot) => (
                <Box key={slot._key} padding={2}>
                  <Flex justify="space-between" align="center">
                    {formatPreviewDate(slot)}
                    <Flex gap={2} align="center">
                      <Badge tone={slot.isActive ? 'positive' : 'critical'}>
                        {slot.isActive ? 'Active' : 'Inactive'}
                      </Badge>
                      <Button
                        mode="ghost"
                        tone="critical"
                        onClick={() => handleDeleteSlot(slot._key)}
                        padding={2}
                        style={{ minWidth: 'auto' }}
                      >
                        <Text size={1}>×</Text>
                      </Button>
                    </Flex>
                  </Flex>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Card>
      )}
    </Stack>
  )
}

export default BulkTimeSlotInput 