export default {
    name: 'category',
    title: 'Categories',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: Rule => Rule.required()
      },
    ],
    preview: {
      select: {
        title: 'title',
      }
    }
  }