import { testimonialSectionFragment } from './testimonialSectionFragment'

export const testimonialSectionRefFragment = `
  _type == "testimonialSectionRef" => {
    ...,
    testimonialSection-> ${testimonialSectionFragment}
  }
`