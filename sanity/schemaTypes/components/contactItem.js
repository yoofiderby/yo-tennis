import { defineField, defineType } from 'sanity'

const contactItem = defineType({
 name: 'contactItem',
 title: 'Contact Item',
 type: 'object',
 fields: [
  defineField({
   name: 'icon',
   title: 'Icon',
   type: 'reference',
   to: [{ type: 'icon' }],
  }),
  defineField({
   name: 'text',
   type: 'string',
   title: 'Text',
  }),
  defineField({
   name: 'link',
   type: 'string',
   title: 'Link',
  }),
 ],
})
export default contactItem
