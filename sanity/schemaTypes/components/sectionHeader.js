import { defineField } from 'sanity'
const sectionHeader = {
 name: 'sectionHeader',
 title: 'Section Header',
 type: 'object',
 fields: [

  defineField({
   name: 'mainHeading',
   title: 'Main Heading',
   type: 'string',
  }),
  {
   name: 'description',
   title: 'Description',
   type: 'text',
  },
 ],
}
export default sectionHeader
