'use client'
import { useClient, useFormValue } from 'sanity'
import { useEffect, useState } from 'react'
import {
  Box,
  Card,
  Stack,
  Text,
  Badge,
  Flex,
  Spinner,
} from '@sanity/ui'

export default function ClassBookings(props) {
  const client = useClient({ apiVersion: '2023-05-03' })
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Get the document ID using useFormValue
  const documentId = useFormValue(['_id'])
  
  useEffect(() => {
    async function fetchBookings() {
      try {
        if (!documentId) {
          console.log('No document ID found')
          setLoading(false)
          return
        }

        setLoading(true)
       
        const query = `*[_type == "booking" && references($classId)]{
          _id,
          clientName,
          clientEmail,
          clientPhone,
          bookingDate,
          status,
          paymentStatus,
          totalAmount,
          subPackageKey,
          timeSlotKey,
          "subPackage": *[_type == "class" && _id == $classId][0].subPackages[_key == ^.subPackageKey][0]{
            title,
            price
          },
          "timeSlot": *[_type == "class" && _id == $classId][0].timeSlots[_key == ^.timeSlotKey][0]{
            dayOfWeek,
            startTime,
            endTime,
            availableSeats,
            startDate,
            endDate
          }
        } | order(bookingDate desc)`

        const result = await client.fetch(query, { classId: documentId })
         setBookings(result)
      } catch (err) {
        console.error('Error fetching bookings:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchBookings()
  }, [documentId, client])

  const getNextOccurrence = (dayOfWeek, startDate, endDate) => {
    if (!dayOfWeek) return null
    
    const today = new Date()
    const start = startDate ? new Date(startDate) : today
    const end = endDate ? new Date(endDate) : new Date(today.getFullYear(), today.getMonth() + 3, today.getDate())
    
    if (today > end) return null
    
    const daysUntilNext = (parseInt(dayOfWeek) - today.getDay() + 7) % 7
    const nextDate = new Date(today)
    nextDate.setDate(today.getDate() + daysUntilNext)
    
    if (nextDate < start) {
      nextDate.setDate(start.getDate() + daysUntilNext)
    }
    
    return nextDate <= end ? nextDate : null
  }

  const formatDate = (date) => {
    if (!date) return 'N/A'
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatTimeSlot = (timeSlot) => {
    if (!timeSlot) return 'N/A'
    return `${timeSlot.startTime} to ${timeSlot.endTime}`
  }

  const getPeriodDates = (dayOfWeek) => {
    if (!dayOfWeek) return { start: 'N/A', end: 'N/A' }
    
    const today = new Date()
    const start = new Date(today)
    const end = new Date(today.getFullYear(), today.getMonth() + 3, today.getDate())
    
    return {
      start: formatDate(start),
      end: formatDate(end)
    }
  }

  // Show help message if the class has no ID yet (new unsaved document)
  if (!documentId) {
    console.log('No document ID found, showing save message')
    return (
      <Box padding={4}>
        <Text>Please save the class first to view bookings.</Text>
      </Box>
    )
  }

  if (loading) {
    return (
      <Box padding={4}>
        <Flex justify="center" align="center">
          <Spinner />
        </Flex>
      </Box>
    )
  }

  if (error) {
    return (
      <Box padding={4}>
        <Text>Error loading bookings: {error}</Text>
      </Box>
    )
  }

  return (
    <Box padding={4}>
      <Stack space={4}>
        <Text size={2} weight="semibold">
          Class Bookings ({bookings.length})
        </Text>
        {bookings.length === 0 ? (
          <Text>No bookings found for this class.</Text>
        ) : (
          bookings.map((booking) => {
            const nextOccurrence = getNextOccurrence(
              booking.timeSlot?.dayOfWeek,
              booking.timeSlot?.startDate,
              booking.timeSlot?.endDate
            )
            
            const periodDates = getPeriodDates(booking.timeSlot?.dayOfWeek)
            
            return (
              <Card key={booking._id} padding={3} radius={2} shadow={1}>
                <Stack space={3}>
                  <Flex justify="space-between" align="center">
                    <Text weight="semibold">{booking.clientName}</Text>
                    <Badge
                      tone={
                        booking.status === 'confirmed'
                          ? 'positive'
                          : booking.status === 'pending'
                          ? 'caution'
                          : 'critical'
                      }
                    >
                      {booking.status}
                    </Badge>
                  </Flex>
                  <Stack space={2}>
                    <Text size={1}>
                      <strong>Email:</strong> {booking.clientEmail}
                    </Text>
                    <Text size={1}>
                      <strong>Phone:</strong> {booking.clientPhone}
                    </Text>
                    <Text size={1}>
                      <strong>Recurring Schedule:</strong>
                    </Text>
                    {booking.timeSlot && (
                      <>
                        <Text size={1} style={{ marginLeft: '1rem' }}>
                          • Every {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][parseInt(booking.timeSlot.dayOfWeek)]}
                        </Text>
                        <Text size={1} style={{ marginLeft: '1rem' }}>
                          • Time: {formatTimeSlot(booking.timeSlot)}
                        </Text>
                        <Text size={1} style={{ marginLeft: '1rem' }}>
                          • Period: {periodDates.start} to {periodDates.end}
                        </Text>
                        {nextOccurrence && (
                          <Text size={1} style={{ marginLeft: '1rem' }}>
                            • Next Class: {formatDate(nextOccurrence)}
                          </Text>
                        )}
                        <Text size={1} style={{ marginLeft: '1rem' }}>
                          • Available Seats: {booking.timeSlot.availableSeats}
                        </Text>
                      </>
                    )}
                    <Text size={1}>
                      <strong>Package:</strong> {booking.subPackage?.title || 'N/A'}
                    </Text>
                    <Text size={1}>
                      <strong>Amount:</strong> ${booking.totalAmount}
                    </Text>
                    <Text size={1}>
                      <strong>Payment:</strong>{' '}
                      <Badge
                        tone={
                          booking.paymentStatus === 'completed'
                            ? 'positive'
                            : booking.paymentStatus === 'pending'
                            ? 'caution'
                            : 'critical'
                        }
                      >
                        {booking.paymentStatus}
                      </Badge>
                    </Text>
                  </Stack>
                </Stack>
              </Card>
            )
          })
        )}
      </Stack>
    </Box>
  )
} 