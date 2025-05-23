import { defineField, defineType } from 'sanity'

const flyoutCard = defineType({
  name: 'flyoutCard',
  title: 'Flyout Card',
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
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
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
      title: 'heading',
      subtitle: 'description',
      media: 'icon',
    },
  },
})

export default flyoutCard 