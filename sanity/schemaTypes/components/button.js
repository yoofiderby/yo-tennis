import { defineField, defineType } from 'sanity'

const button = defineType({
 name: 'button',
 title: 'Button',
 type: 'object',
 fields: [
  defineField({
   name: 'buttonType',
   title: 'Button Type',
   type: 'string',
   options: {
    list: [
     { title: 'Primary', value: 'primary' },
     { title: 'Secondary', value: 'secondary' },
     { title: 'Ghost', value: 'ghost' },
     { title: 'Arrow', value: 'arrow' },
     { title: 'Whatsapp', value: 'whatsapp' },
    ],
    layout: 'dropdown',
   },
  }),
  defineField({
   name: 'textAndLink',
   type: 'textAndLink',
   title: 'Text & Link',
  }),
 ],
})

export default button
