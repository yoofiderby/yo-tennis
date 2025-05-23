import { defineField, defineType } from 'sanity'
import ClassBookings from '../components/ClassBookings'
import BulkTimeSlotInput from '../components/BulkTimeSlotInput'

export default defineType({
  name: 'class',
  title: 'Classes',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'chartTitle',
      title: 'Chart Title',
      type: 'string',
    }),
    defineField({
      name: 'chartImage',
      title: 'Chart Image',
      type: 'customImage',
    }),
    defineField({
      name: 'chartImageMobile',
      title: 'Chart Image For Mobile devices',
      type: 'customImage',
    }),
    defineField({
      name: 'timePeriod',
      title: 'Time Period',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subPackages',
      title: 'Sub Packages',
      type: 'array',
      of: [{ type: 'subPackage' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'timeSlots',
      title: 'Time Slots',
      description: 'Add time slots for this class. You can add multiple slots at once using the bulk add feature.',
      type: 'array',
      of: [{ type: 'timeSlot' }],
      validation: (Rule) => Rule.required(),
      components: {
        input: BulkTimeSlotInput,
      },
    }),
    defineField({
      name: 'maxCapacity',
      title: 'Maximum Capacity',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'instructor',
      title: 'Instructor',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bookings',
      title: 'Bookings',
      type: 'object',
      fields: [
        {
          name: 'bookingsList',
          title: 'Bookings List',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'booking' }] }],
          readOnly: true,
        }
      ],
      components: {
        input: ClassBookings,
      },
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'featuredImage',
    },
  },
}) 