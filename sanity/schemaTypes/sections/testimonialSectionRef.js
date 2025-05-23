const testimonialSectionRef = {
  name: 'testimonialSectionRef',
  title: 'Testimonial Section Reference',
  type: 'object',
  fields: [
    {
      name: 'testimonialSection',
      title: 'Testimonial Section',
      type: 'reference',
      to: [{ type: 'testimonialSection' }]
    }
  ],
  preview: {
    select: {
      title: 'testimonialSection.sectionName'
    },
    prepare(selection) {
      return {
        title: selection.title || 'Testimonial Section'
      }
    }
  }
}

export default testimonialSectionRef 