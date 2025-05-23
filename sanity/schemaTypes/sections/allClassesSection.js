export default {
  name: 'allClassesSection',
  title: 'All Classes Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Section Subtitle',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: title || 'All Classes Section'
      }
    }
  }
} 