import { buttonFragment } from '../partials'

export const digitalProductDevelopmentFragment = `
  _type == "digitalProductDevelopmentSection" => {
    sectionHeading,
    developmentSteps[]{
      stepTitle,
      stepDescription
    },
   button ${buttonFragment}
  }
`
