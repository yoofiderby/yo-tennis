const imageWithText = {
 name: 'imageWithText',
 title: 'Image With Text',
 type: 'object',
 fields: [
  {
   name: 'mainHeading',
   title: 'Main Heading',
   type: 'string',
  },
  {
   name: 'image',
   title: 'Image',
   type: 'customImage',
  },
  {
   name: 'content',
   title: 'Content',
   type: 'blockContent',
  },
  {
   name: 'button',
   title: 'Button',
   type: 'button',
  },
 ],
}

export default imageWithText