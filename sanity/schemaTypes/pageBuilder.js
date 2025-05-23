import { defineArrayMember } from 'sanity'

export const pageBuilder = {
  name: 'pageBuilder',
  title: 'Page builder',
  type: 'array',
  of: [   
    defineArrayMember({
      name: 'heroSection',
      type: 'heroSection',
    }),
    
    defineArrayMember({
      name: 'statsSection',
      type: 'statsSection',
    }),
    
    defineArrayMember({
      name: 'testimonialSectionRef',
      type: 'testimonialSectionRef',
    }),
    
    defineArrayMember({
      name: 'faqSectionRef',
      title: 'FAQ Section',
      type: 'reference',
      to: [{ type: 'faqSection' }],
    }),
    defineArrayMember({
      name: 'blockContent',
      type: 'blockContent',
    }),
    defineArrayMember({
      name: 'imagesBlock',
      type: 'imagesBlock',
    }),
    defineArrayMember({
      name: 'imageWithText',
      type: 'imageWithText',
    }),
    defineArrayMember({
      name: 'cardsSectionRef',
      title: 'Cards Section',
      type: 'reference',
      to: [{ type: 'cardsSection' }],
    }),
    defineArrayMember({
      name: 'videoTestimonialsSectionRef',
      title: 'Video Testimonials Section',
      type: 'reference',
      to: [{ type: 'videoTestimonialsSection' }],
    }),
    defineArrayMember({
      name: 'plansSectionRef',
      type: 'plansSectionRef',
    }),
    defineArrayMember({
      name: 'teamSectionRef',
      title: 'Team Section',
      type : "teamSectionRef"
    }),
    defineArrayMember({
      name: 'contactSectionRef',
      type: 'contactSectionRef',
    }),
    defineArrayMember({
      name: 'aboutSection',
      type: 'aboutSection',
    }),
    defineArrayMember({
      name: 'allClassesSection',
      title: 'All Classes Section',
      type: 'allClassesSection' 
    }),
  ],
} 