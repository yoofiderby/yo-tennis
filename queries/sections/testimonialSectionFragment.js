import {
  sectionHeaderFragment,
  customImageFragment,
  buttonFragment,
} from '../partials'

export const testimonialSectionFragment = `{
  _type,
  sectionHeader ${sectionHeaderFragment},
  testimonials[]-> {
    rating,
    feedback,
    clientName,
    clientDesignation,
    clientCompany,
    "imageUrl": clientImage ${customImageFragment},
    "alt": clientImage.alt
  },
  button ${buttonFragment}
}`
