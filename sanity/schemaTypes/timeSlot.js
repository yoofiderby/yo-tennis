import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'timeSlot',
  title: 'Time Slots',
  type: 'object',
  fields: [
    defineField({
      name: 'dayOfWeek',
      title: 'Day of Week',
      type: 'string',
      options: {
        list: [
          { title: 'Sunday', value: '0' },
          { title: 'Monday', value: '1' },
          { title: 'Tuesday', value: '2' },
          { title: 'Wednesday', value: '3' },
          { title: 'Thursday', value: '4' },
          { title: 'Friday', value: '5' },
          { title: 'Saturday', value: '6' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startTime',
      title: 'Start Time',
      type: 'string',
      options: {
        timeFormat: 'HH:mm',
        timeStep: 15,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endTime',
      title: 'End Time',
      type: 'string',
      options: {
        timeFormat: 'HH:mm',
        timeStep: 15,
      },
      validation: (Rule) => Rule.required().custom((endTime, context) => {
        const startTime = context.parent.startTime
        if (startTime && endTime && endTime <= startTime) {
          return 'End time must be after start time'
        }
        return true
      }),
    }),
    defineField({
      name: 'maxCapacity',
      title: 'Maximum Capacity',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'availableSeats',
      title: 'Available Seats',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      dayOfWeek: 'dayOfWeek',
      startTime: 'startTime',
      endTime: 'endTime',
      availableSeats: 'availableSeats',
    },
    prepare({ dayOfWeek, startTime, endTime, availableSeats }) {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      return {
        title: `${days[parseInt(dayOfWeek)]} - ${startTime} to ${endTime}`,
        subtitle: `Available Seats: ${availableSeats}`,
      }
    },
  },
}) 