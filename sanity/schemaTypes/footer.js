import { defineField, defineType } from 'sanity'

const footer = defineType({
 name: 'footer',
 title: 'Footer',
 type: 'document',
 fields: [
  defineField({
   name: 'backgroundImage',
   type: 'image',
   title: 'Background Image',
   options: {
    hotspot: true,
   },
   fields: [
    {
     name: 'alt',
     type: 'string',
     title: 'Alternative text',
    },
   ],
  }),
  defineField({
   name: 'heading',
   type: 'string',
   title: 'Heading',
  }),
  defineField({
   name: 'leftNavigationItems',
   type: 'array',
   title: 'Left Navigation Items',
   description: 'Navigation items that appear on the left side',
   of: [{ type: 'textAndLink' }],
  }),
  defineField({
   name: 'rightNavigationItems',
   type: 'array',
   title: 'Right Navigation Items',
   description: 'Navigation items that appear on the right side',
   of: [{ type: 'textAndLink' }],
  }),
  defineField({
   name: 'socialIcons',
   type: 'array',
   title: 'Social Icons',
   of: [{ type: 'socialIcon' }],
  }),
  defineField({
   name: 'copyrightText',
   type: 'string',
   title: 'Copyright Text',
  }),
  defineField({
   name: 'creditText',
   type: 'string',
   title: 'Credit Text',
  }),
 ],
})

export default footer
