export default {
  name: 'videoTestimonial',
  title: 'Video Testimonial',
  type: 'document',
  fields: [
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'feedback',
      title: 'Testimonial Text',
      type: 'text'
    },
    {
      name: 'thumbnailImage',
      title: 'Thumbnail Image',
      type: 'customImage',
      validation: Rule => Rule.required()
    },
    {
      name: 'video',
      title: 'Video File',
      type: 'file',
      options: {
        accept: 'video/*',
        storeOriginalFilename: true
      },
      validation: Rule => Rule.required().custom((value) => {
        if (value && !value.asset) {
          return 'Video file is required'
        }
        return true
      }),
      description: 'Upload a video file (MP4 recommended)'
    }
  ],
  preview: {
    select: {
      title: 'clientName',
      media: 'thumbnailImage'
    }
  }
} 