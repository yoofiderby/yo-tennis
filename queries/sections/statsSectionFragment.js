import { buttonFragment, customImageFragment } from '../partials'

export const statsSectionFragment = `
  _type == "statsSection" => {
    _type,
    heading,
    button ${buttonFragment},
    stats[] {
      value,
      description
    },
    thumbnail ${customImageFragment},
    video {
      asset-> {
        url,
        originalFilename
      }
    }
  }
` 