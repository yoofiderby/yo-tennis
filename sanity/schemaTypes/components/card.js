export default {
  name: 'card',
  title: 'Card',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'customImage',
      validation: Rule => Rule.required()
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
} 