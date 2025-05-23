const faqSection = {
 name: 'faqSection',
 title: 'FAQ Section',
 type: 'document',
 fields: [
  {
   name: 'sectionHeader',
   title: 'Section Header',
   type: 'sectionHeader',
  },
  {
   name: 'hasImage',
   title: 'Include Image',
   type: 'boolean',
   description: 'Toggle to show/hide the image section',
   initialValue: false
  },
  {
   name: 'image',
   title: 'Section Image',
   type: 'customImage',
   hidden: ({ document }) => !document?.hasImage,
  },
  {
   name: 'faqs',
   title: 'FAQs',
   type: 'array',
   of: [{ type: 'reference', to: [{ type: 'faq' }] }],
  },
 ],
 preview: {
    select: {
      title: 'sectionHeader.mainHeading',
      subtitle: 'sectionHeader.subHeading',
      faqCount: 'faqs.length',
      hasImage: 'hasImage'
    },
    prepare({ title, subtitle, faqCount, hasImage }) {
      return {
        title: title || 'FAQ Section',
        subtitle: `${faqCount || 0} FAQs${hasImage ? ' • With Image' : ''}${subtitle ? ` • ${subtitle}` : ''}`
      }
    }
   }
}

export default faqSection
