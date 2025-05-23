import { defineField } from 'sanity'

export const heroType = {
 name: 'heroSection',
 title: 'Hero',
 type: 'object',
 fields: [
  defineField({
   name: 'backgroundVideo',
   title: 'Background Video',
   type: 'file',
   options: {
    accept: 'video/*',
    storeOriginalFilename: true
   },
   validation: (Rule) => Rule.custom((value) => {
    if (value && !value.asset) {
     return 'Video file is required'
    }
    return true
   }),
   description: 'Upload a video file (MP4 recommended)'
  }),
  defineField({
   name: 'backgroundImage',
   title: 'Background Image (Fallback)',
   type: 'image',
   options: {
    hotspot: true,
   },
   description: 'This will be shown if video fails to load or on mobile devices'
  }),
  defineField({
   name: 'mainHeading',
   title: 'Main Heading',
   type: 'string',
  }),
  defineField({
   name: 'highlightedHeading',
   title: 'Highlighted Heading',
   type: 'string',
  }),
  defineField({
   name: 'testimonialImages',
   title: 'Testimonial Images',
   type: 'array',
   of: [{ type: 'image' }],
  }),
  defineField({
   name: 'testimonialText',
   title: 'Testimonial Text',
   type: 'text',
  }),
  defineField({
   name: 'button',
   title: 'Button',
   type: 'button',
  }),
 ],
 preview: {
  select: {
   heading: 'mainHeading',
  },
  prepare(selection) {
   const { heading } = selection
   return {
    title: 'Hero Section',
    subtitle: heading || 'No Heading',
   }
  },
 },
}
