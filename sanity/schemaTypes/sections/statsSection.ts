import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'statsSection',
  title: 'Stats Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'button',
    }),
    defineField({
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Stat Value',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().length(4),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Video Thumbnail',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'video',
      title: 'Video File',
      type: 'file',
      options: {
        accept: 'video/*',
        storeOriginalFilename: true
      },
      validation: (Rule) => Rule.required().custom((value) => {
        if (value && !value.asset) {
          return 'Video file is required'
        }
        return true
      }),
      description: 'Upload a video file (MP4 recommended)'
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: title || 'Stats Section',
      }
    },
  },
})