const highlightedText = {
 name: 'highlightedText',
 title: 'Highlighted Text',
 type: 'object',
 fields: [
  {
   name: 'text',
   title: 'Text',
   type: 'string',
   validation: (Rule) => Rule.required(),
  },
  {
   name: 'color',
   title: 'Color',
   type: 'string',
   initialValue: 'Select Color',
   options: {
    list: [
     { title: 'white', value: '#FFFFFF' },
     { title: 'yellow', value: '#FBCB3A' },
     { title: 'blue', value: '#02D9FF' },
     { title: 'green', value: '#25F627' },
    ],
   },
   validation: (Rule) => Rule.required(),
  },
 ],
}
export default highlightedText
