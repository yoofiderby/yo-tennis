export default {
 name: 'metadata',
 title: 'Metadata',
 type: 'object',
 fields: [
  {
   name: 'title',
   title: 'Meta Title',
   type: 'string',
   validation: (Rule) =>
    Rule.max(60).warning('Keep the title under 60 characters'),
  },
  {
   name: 'description',
   title: 'Meta Description',
   type: 'text',
   validation: (Rule) =>
    Rule.max(160).warning('Keep the description under 160 characters'),
  },
  {
   name: 'keywords',
   title: 'Meta Keywords',
   type: 'array',
   of: [{ type: 'string' }],
   options: { layout: 'tags' },
  },
  {
   name: 'ogImage',
   title: 'Open Graph Image',
   type: 'image',
   options: { hotspot: true },
  },
 ],
}
