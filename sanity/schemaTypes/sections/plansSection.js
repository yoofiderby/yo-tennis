import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'plansSection',
  title: 'Plans Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'customImage',
    }),
    defineField({
      name: 'classes',
      title: 'Classes',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'class' }] }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'backgroundImage',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Plans Section',
        media,
      }
    },
  },
}) 