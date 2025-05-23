import { defineField } from 'sanity'

const faq = {
 name: 'faq',
 type: 'document',
 title: 'FAQ',

 fields: [
  defineField({
   name: 'question',
   title: 'Question',
   type: 'string',
  }),
  defineField({
   name: 'answer',
   title: 'Answer',
   type: 'text',
  }),
 ],
}

export default faq
