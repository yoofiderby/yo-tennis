import { customImageFragment } from '../partials/customImageFragment'

export const aboutSectionFragment = `
  _type == "aboutSection" => {
    _type,
    _key,
    heading,
    content,
    "images": images[] {
      "image": {
        "url": image.asset->url,
        "alt": image.alt,
        "_type": image._type,
        "asset": {
          "_ref": image.asset._ref,
          "_type": image.asset._type
        }
      },
      overlayText
    }
  }
` 