import { defineField, defineType } from 'sanity'

const textAndLink = defineType({
 name: 'textAndLink',
 title: 'Text & Link',
 type: 'object',
 fields: [
  defineField({
   name: 'text',
   title: 'Text',
   type: 'string',
  }),
  defineField({
   name: 'linkType',
   title: 'Link Type',
   type: 'string',
   options: {
    list: [
     { title: 'Internal', value: 'internal' },
     { title: 'External', value: 'external' },
     { title: 'InLine', value: 'inline' },
     { title: 'Global Link', value: 'global' },
    ],
    layout: 'dropdown',
   },
  }),
  defineField({
   name: 'url',
   title: 'URL',
   type: 'url',
   hidden: ({ parent }) => parent?.linkType !== 'external',
  }),
  defineField({
   name: 'jumpTo',
   title: 'jumpTo ID',
   type: 'string',
   hidden: ({ parent }) => parent?.linkType !== 'inline',
  }),
  defineField({
   name: 'page',
   title: 'Page',
   type: 'reference',
   to: [
    { type: 'page' },
   ],
   hidden: ({ parent }) => parent?.linkType !== 'internal',
  }),
  defineField({
   name: 'globalLink',
   title: 'Select Global Link',
   type: 'reference',
   to: [{ type: 'globalLinks' }],
   hidden: ({ parent }) => parent?.linkType !== 'global', // Changed condition to check linkType
  }),
 ],
})

export default textAndLink
