import { customImageFragment } from './partials/customImageFragment'

export const getFaqSectionQuery = `*[_type == "faqSection"][0] {
  hasImage,
  image ${customImageFragment},
  faqs[]-> {
    _id,
    question,
    answer
  }
}`

export const getVideoTestimonialsQuery = `*[_type == "videoTestimonialsSection"][0] {
  _type,
  variant,
  backgroundImage { asset-> { url, alt } },
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
}`

export const getTestimonialsQuery = `*[_type == "testimonialSection"][0] {
  _type,
  testimonials[]-> {
    rating,
    feedback,
    clientName,
    clientDesignation,
    clientCompany,
    "imageUrl": clientImage ${customImageFragment},
    "alt": clientImage.alt
  }
}` 


export const getClassQuery = `*[_type == "class" && slug.current == $slug][0]{
  title,
  chartTitle,
  chartImage ${customImageFragment},
  chartImageMobile ${customImageFragment},
  subPackages[]{
    _key,
    title,
    slug,
    description,
    featuredImage ${customImageFragment},
    price,
    stripePriceId,
    stripeProductId,
    isActive
  }
}` 