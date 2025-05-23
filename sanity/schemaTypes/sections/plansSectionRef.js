import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'plansSectionRef',
  title: 'Plans Section Reference',
  type: 'object',
  fields: [
    defineField({
      name: 'plansSection',
      title: 'Plans Section',
      type: 'reference',
      to: [{ type: 'plansSection' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'plansSection.title',
      media: 'plansSection.backgroundImage',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Plans Section',
        media,
      }
    },
  },
}) 