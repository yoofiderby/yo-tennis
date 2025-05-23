import { defineField, defineType } from 'sanity'

const flyoutMenu = defineType({
  name: 'flyoutMenu',
  title: 'Flyout Menu',
  type: 'object',
  fields: [
    defineField({
      name: 'cards',
      title: 'Menu Cards',
      type: 'array',
      of: [{ type: 'flyoutCard' }],
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'ctaButtons',
      title: 'Call-to-Action Buttons',
      type: 'array',
      of: [{ type: 'flyoutCTA' }],
      validation: Rule => Rule.max(3),
    }),
  ],
  preview: {
    select: {
      cards: 'cards',
    },
    prepare({ cards }) {
      return {
        title: 'Flyout Menu',
        subtitle: `${cards?.length || 0} cards`,
      }
    },
  },
})

export default flyoutMenu 