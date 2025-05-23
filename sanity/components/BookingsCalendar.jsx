'use client'

import { useEffect, useState } from 'react'
import { Box, Card, Stack, Text, Spinner, Flex } from '@sanity/ui'
import { useClient } from 'sanity'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default function BookingsCalendar() {
  const client = useClient({ apiVersion: '2023-05-03' })
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchBookings() {
      try {
        setLoading(true)
        const query = `*[_type == "booking"]{
          _id,
          clientName,
          status,
          paymentStatus,
          "class": class->{
            title,
            location,
            startDate,
            endDate
          },
          "timeSlot": *[_type == "class" && _id == ^.class._ref][0].timeSlots[_key == ^.timeSlotKey][0]{
            dayOfWeek,
            startTime,
            endTime,
            startDate,
            endDate
          }
        }`

        const result = await client.fetch(query)
        
        // Transform bookings into calendar events
        const calendarEvents = result.flatMap(booking => {
          
          if (!booking.timeSlot || !booking.class) {
            console.log('Skipping booking due to missing data:', booking)
            return []
          }

          const events = []
          // Use time slot dates if available, otherwise use class dates
          const start = booking.timeSlot.startDate ? new Date(booking.timeSlot.startDate) : 
                       booking.class.startDate ? new Date(booking.class.startDate) : 
                       new Date()
          const end = booking.timeSlot.endDate ? new Date(booking.timeSlot.endDate) : 
                     booking.class.endDate ? new Date(booking.class.endDate) : 
                     new Date(new Date().setMonth(new Date().getMonth() + 1))
           
          const dayOfWeek = parseInt(booking.timeSlot.dayOfWeek)
          
          // Parse and normalize time to 24-hour
          const cleanTime = (str) => str.replace(/[^0-9:]/g, '')
          const [rawStartH, rawStartM] = cleanTime(booking.timeSlot.startTime).split(':').map(n => parseInt(n) || 0)
          const [rawEndH, rawEndM] = cleanTime(booking.timeSlot.endTime).split(':').map(n => parseInt(n) || 0)
          
          // Convert to 24h: if end <= start, assume PM
          let startHours = rawStartH
          let endHours = rawEndH
          if (endHours <= startHours) {
            if (startHours < 12) startHours += 12
            if (endHours < 12) endHours += 12
          }
          
        
          // Generate events for each occurrence
          let currentDate = new Date(start)
          while (currentDate <= end) {
            if (currentDate.getDay() === dayOfWeek) {
              const eventDate = new Date(currentDate)
              eventDate.setHours(startHours, rawStartM, 0, 0)
              
              const endDate = new Date(eventDate)
              endDate.setHours(endHours, rawEndM, 0, 0)

              console.log('Creating event for date:', eventDate)

              events.push({
                id: `${booking._id}-${eventDate.toISOString()}`,
                title: `${booking.clientName} - ${booking.class.title}`,
                start: eventDate,
                end: endDate,
                extendedProps: {
                  status: booking.status,
                  paymentStatus: booking.paymentStatus,
                  location: booking.class.location,
                  bookingId: booking._id
                },
                backgroundColor: getStatusColor(booking.status),
                borderColor: getStatusColor(booking.status),
                textColor: '#fff',
                allDay: false
              })
            }
            currentDate.setDate(currentDate.getDate() + 1)
          }

          console.log('Generated events for booking:', events)
          return events
        })

         setEvents(calendarEvents)
      } catch (err) {
        console.error('Error fetching bookings:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchBookings()
  }, [client])

  function getStatusColor(status) {
    switch (status) {
      case 'confirmed':
        return '#22c55e' // green
      case 'pending':
        return '#eab308' // yellow
      case 'cancelled':
        return '#ef4444' // red
      default:
        return '#6b7280' // gray
    }
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
          Bookings Calendar
        </Text>
        <Card padding={4} radius={2} shadow={1}>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            events={events}
            eventContent={(eventInfo) => {
              const { event, view, timeText } = eventInfo
              // Month view: small dot with tooltip
              if (view.type === 'dayGridMonth') {
                const color = event.backgroundColor
                const tooltip = `${event.title}\n${event.extendedProps.location}\nStatus: ${event.extendedProps.status}`
                return (
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: color, margin: '0 auto' }} title={tooltip}></div>
                )
              }
              // Day/Week view: show default timeText and title
              return (
                <div style={{ padding: '2px' }}>
                  <div style={{ fontSize: '0.8em', fontWeight: 'bold' }}>{timeText}</div>
                  <div style={{ fontSize: '0.9em' }}>{event.title}</div>
                </div>
              )
            }}
            height="auto"
            slotMinTime="00:00:00"
            scrollTime="03:00:00"
            slotMaxTime="22:00:00"
            allDaySlot={false}
            slotDuration="00:30:00"
            nowIndicator={true}
            eventTimeFormat={{
              hour: '2-digit',
              minute: '2-digit',
              meridiem: false,
              hour12: false
            }}
          />
        </Card>
      </Stack>
    </Box>
  )
} 