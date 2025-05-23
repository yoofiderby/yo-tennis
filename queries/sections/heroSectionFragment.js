import { buttonFragment } from '../partials/buttonFragment'

export const heroSectionFragment = `
  _type == "heroSection" => {
    "backgroundVideo": backgroundVideo.asset-> {
      "url": url,
      "originalFilename": originalFilename
    },
    backgroundImage,
    mainHeading,
    highlightedHeading,
    testimonialImages,
    testimonialText,
    button ${buttonFragment}
  }
` 