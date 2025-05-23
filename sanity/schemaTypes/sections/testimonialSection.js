import { defineField } from 'sanity'

const testimonialSection = {
 name: 'testimonialSection',
 title: 'Testimonial Sections',
 type: 'document',
 fields: [
  defineField({
   name: 'sectionName',
   title: 'Section Name',
   type: 'string',
  }),
  defineField({
   name: 'sectionHeader',
   title: 'Section Header',
   type: 'sectionHeader',
  }),
  defineField({
   name: 'testimonials',
   title: 'Testimonials',
   type: 'array',
   of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
  }),
  defineField({
   name: 'button',
   title: 'Button Text',
   type: 'button',
  }),
 ],
 preview: {
  select: {
   heading: 'sectionHeader.mainHeading',
  },
  prepare(selection) {
   const { title, heading } = selection
   return {
    title: title ? `${title} Section` : 'Testimonial Section',
    subtitle: heading ? heading : 'No Heading',
   }
  },
 },
}

export default testimonialSection
