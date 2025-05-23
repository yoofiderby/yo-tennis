export default {
  name: 'customImage',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: 'Alternative Text',
      name: 'alt',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
}
