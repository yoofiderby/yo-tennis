import { defineField, defineType } from 'sanity'

const flyoutCTA = defineType({
  name: 'flyoutCTA',
  title: 'Flyout Call-to-Action',
  type: 'object',
  fields: [
    defineField({
        name: 'icon',
        title: 'Icon',
        type: 'reference',
        to: [{ type: 'icon' }],
        description: 'Icon for the card',
      }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'textAndLink',
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'text',
      media: 'icon',
    },
  },
})

export default flyoutCTA 