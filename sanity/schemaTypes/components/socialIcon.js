import { defineField, defineType } from 'sanity'

const socialIcon = defineType({
 name: 'socialIcon',
 title: 'Social Icon',
 type: 'object',
 fields: [
  defineField({
   title: 'Social Icon',
   name: 'icon',
   type: 'reference',
   to: [{ type: 'icon' }],
  }),
  defineField({
   name: 'url',
   type: 'url',
   title: 'URL',
  }),
 ],
 preview: {
  select: {
   title: 'url',
   media: 'icon.customImage',
   alt: 'icon.customImage.alt',
  },
  prepare(selection) {
   const { title, media, alt } = selection
   return {
    title: title || 'No URL',
    subtitle: alt || 'No alt text',
    media: media,
   }
  },
 },
})

export default socialIcon
