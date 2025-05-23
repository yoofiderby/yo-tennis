import { defineField, defineArrayMember } from 'sanity'

export default {
 name: 'globalLinks',
 title: 'Global Links',
 type: 'document',
 fields: [
  defineField({
   name: 'name',
   title: 'Link name',
   type: 'string',
  }),
  defineField({
   name: 'url',
   title: 'Link URL',
   type: 'string',
  }),
 ],
}
