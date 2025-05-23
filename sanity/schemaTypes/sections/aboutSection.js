import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutSection',
  title: 'About Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'customImage',
            },
            {
              name: 'overlayText',
              title: 'Overlay Text',
              type: 'string',
            }
          ]
        }
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: title || 'About Section',
      }
    },
  },
}) 