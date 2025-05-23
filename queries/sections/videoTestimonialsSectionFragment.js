import { customImageFragment } from '../partials/customImageFragment'

export const videoTestimonialsSectionFragment = `
  _type == "videoTestimonialsSection" => {
    variant,
    heading,
    subheading,
    backgroundImage ${customImageFragment},
    videoTestimonials[]-> {
      _id,
      clientName,
      feedback,
      thumbnailImage ${customImageFragment},
      video {
        asset-> {
          url,
          originalFilename
        }
      }
    }
  }
`

export const videoTestimonialsSectionRefFragment = `
  _type == "videoTestimonialsSectionRef" => {
    "videoTestimonialsSection": @-> {
      ${videoTestimonialsSectionFragment}
    }
  }
` 