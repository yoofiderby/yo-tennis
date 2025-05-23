import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'teamSectionRef',
  title: 'Team Section Reference',
  type: 'object',
  fields: [
    defineField({
      name: 'teamSection',
      title: 'Team Section',
      type: 'reference',
      to: [{ type: 'teamSection' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'teamSection.heading',
    },
    prepare({ title }) {
      return {
        title: title || 'Team Section',
      }
    },
  },
}) 