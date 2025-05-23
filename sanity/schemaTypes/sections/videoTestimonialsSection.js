export default {
  name: 'videoTestimonialsSection',
  title: 'Video Testimonials Section',
  type: 'document',
  fields: [
    {
      name: 'variant',
      title: 'Section Variant',
      type: 'string',
      options: {
        list: [
          { title: 'With Heading Only', value: 'withHeading' },
          { title: 'With Heading and Background', value: 'withHeadingAndBackground' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'customImage',
      hidden: ({ document }) => document?.variant === 'withHeading'
    },
    {
      name: 'videoTestimonials',
      title: 'Video Testimonials',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'videoTestimonial' }]
        }
      ],
      validation: Rule => Rule.required().min(1)
    }
  ],
  preview: {
    select: {
      title: 'heading',
      variant: 'variant'
    },
    prepare({ title, variant }) {
      return {
        title: title || `Video Testimonials Section (${variant})`
      }
    }
  }
} 