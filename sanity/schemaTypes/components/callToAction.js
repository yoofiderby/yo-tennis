export default {
    name: 'callToActionBlock',
    title: 'Call To Action Block',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
        description: 'A short description or supporting text.'
      },
      {
        name: 'button',
        title: 'Button',
        type: 'button',
      }
    ],
    preview: {
      select: {
        title: 'heading',
        subtitle: 'subtitle'
      }
    }
  }
  