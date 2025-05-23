import SubPackageSelect from '../components/SubPackageSelect'
import TimeSlotSelect from '../components/TimeSlotSelect'

export default {
  name: 'booking',
  title: 'Bookings',
  type: 'document',
  fields: [
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'clientEmail',
      title: 'Client Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: 'clientPhone',
      title: 'Client Phone',
      type: 'string',
    },
    {
      name: 'class',
      title: 'Class',
      type: 'reference',
      to: [{ type: 'class' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subPackageKey',
      title: 'Sub Package',
      type: 'string',
      components: {
        input: SubPackageSelect
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'timeSlotKey',
      title: 'Time Slot',
      type: 'string',
      components: {
        input: TimeSlotSelect
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'status',
      title: 'Booking Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Confirmed', value: 'confirmed' },
          { title: 'Completed', value: 'completed' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
      },
      initialValue: 'pending',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'additionalNotes',
      title: 'Additional Notes',
      type: 'text',
    },
    {
      name: 'totalAmount',
      title: 'Total Amount',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'paymentStatus',
      title: 'Payment Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Partial', value: 'partial' },
          { title: 'Completed', value: 'completed' },
          { title: 'Refunded', value: 'refunded' },
        ],
      },
      initialValue: 'pending',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'clientName',
      subtitle: 'status',
      media: 'class.featuredImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: `Status: ${subtitle}`,
        media,
      }
    },
  },
} 