import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactSectionRef',
  title: 'Contact Section Reference',
  type: 'object',
  fields: [
    defineField({
      name: 'contactSection',
      type: 'reference',
      to: [{ type: 'contactSection' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'contactSection.heading',
    },
    prepare({ title }) {
      return {
        title: title || 'Contact Section Reference',
      }
    },
  },
})