import { defineField, defineType } from 'sanity'

const flyoutLink = defineType({
  name: 'flyoutLink',
  title: 'Flyout Link',
  type: 'object',
  fields: [
    defineField({
      name: 'link',
      title: 'Link',
      type: 'textAndLink',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'hasFlyoutMenu',
      title: 'Has Flyout Menu',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'flyoutMenu',
      title: 'Flyout Menu',
      type: 'flyoutMenu',
      hidden: ({ parent }) => !parent?.hasFlyoutMenu,
    }),
  ],
  preview: {
    select: {
      title: 'link.text',
    },
  },
})

export default flyoutLink 