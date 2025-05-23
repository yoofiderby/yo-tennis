const imagesBlock = {
    name: 'imagesBlock',
    title: 'Images Block',
    type: 'object',
    fields: [
      {
        name: 'variant',
        title: 'Variant',
        type: 'string',
        options: {
          list: [
            { title: 'Single', value: 'single' },
            { title: 'Double', value: 'double' }
          ]
        },
        description: 'Select whether this block has a single image or double images'
      },
      {
        name: 'singleImage',
        title: 'Single Image',
        type: 'image',
        hidden: ({ parent }) => parent.variant !== 'single',
        fields: [
          {
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
            description: 'Alternative text for the image (required for accessibility)',
            validation: Rule => Rule.required()
          }
        ]
      },
      {
        name: 'doubleImages',
        title: 'Double Images',
        type: 'array',
        of: [{type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Alternative text for the image (required for accessibility)',
              validation: Rule => Rule.required()
            }
          ]
        }],
        options: { layout: 'grid' },
        hidden: ({ parent }) => parent.variant !== 'double',
        validation: Rule => Rule.custom(images => {
          if (images && images.length !== 2) {
            return 'Double variant must have exactly two images';
          }
          return true;
        })
      }
    ],
    preview: {
      select: {
        variant: 'variant',
        countDouble: 'doubleImages'
      },
      prepare({ variant, countDouble }) {
        const subtitle =
          variant === 'double'
            ? `Double Images (${(countDouble && countDouble.length) || 0} images)`
            : 'Single Image';
        return {
          title: 'Images Block',
          subtitle
        }
      }
    }
  };
  
  export default imagesBlock;
  