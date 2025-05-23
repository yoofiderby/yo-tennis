export default {
  name: 'cardsSection',
  title: 'Cards Section',
  type: 'document',
  fields: [
    {
      name: 'sectionHeader',
      title: 'Section Header',
      type: 'sectionHeader'
    },
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'card' }]
        }
      ],
      validation: Rule => Rule.required().min(1)
    }
  ],
  preview: {
    select: {
      title: 'sectionHeader.mainHeading'
    },
    prepare({ title }) {
      return {
        title: title || 'Cards Section'
      }
    }
  }
} 