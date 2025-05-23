import { defineField } from 'sanity'
const testimonial = {
 name: 'testimonial',
 title: 'Testimonial',
 type: 'document',
 fields: [
  defineField({
   name: 'rating',
   title: 'Rating',
   type: 'number',
   validation: (Rule) => Rule.min(1).max(5).precision(1),
   initialValue: 5,
  }),
  defineField({
   name: 'feedback',
   title: 'Feedback',
   type: 'text',
  }),
  defineField({
   name: 'clientName',
   title: 'Client Name',
   type: 'string',
  }),
  defineField({
   name: 'clientDesignation',
   title: 'Client Designation',
   type: 'string',
  }),
  defineField({
   name: 'clientCompany',
   title: 'Client Company',
   type: 'string',
  }),
  defineField({
   name: 'clientImage',
   title: 'Client Image',
   type: 'customImage',
  }),
 ],
 preview: {
  select: {
   client: 'clientName',
   title: 'feedback',
   media: 'clientImage',
  },
  prepare(selection) {
   const { client, title, media } = selection
   return {
    title: title,
    subtitle: client ? `by ${client}` : 'No Name',
    media: media,
   }
  },
 },
}
export default testimonial
