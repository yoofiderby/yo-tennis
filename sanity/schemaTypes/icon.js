export default {
 name: 'icon',
 title: 'Icons',
 type: 'document',
 fields: [
  {
   title: 'Icon',
   name: 'customImage',
   type: 'customImage',
  },
 ],
 preview: {
  select: {
   title: 'customImage.alt',
   media: 'customImage',
  },
  prepare(selection) {
   const { title, media } = selection
   return {
    title: title || 'No title available', // This will handle cases where alt text might be missing
    media: media,
   }
  },
 },
}
