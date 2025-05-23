const numberCard = {
    name: 'numberCard',
    type: 'object',
    title: 'Number Card',
    fields: [
      {
        name: 'statValue',
        type: 'string',
        title: 'Stat Value',
        description: 'e.g. 120M, 25%, +40%',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'A short explanation of the number/statistic.',
      },
    ],
    preview: {
      select: {
        title: 'statValue',
        subtitle: 'description',
      },
      prepare(selection) {
        const { title, subtitle } = selection
        return {
          title: title || 'No Stat Value',
          subtitle: subtitle || 'No Description',
        }
      },
    },
  }
  
  export default numberCard
  