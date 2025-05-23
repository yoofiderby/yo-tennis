import {
  buttonFragment,
  iconFragment,
  customImageFragment,
} from '../partials'
import { flyoutLinkFragment } from '../partials/flyoutLinkFragment'

export const headerFragment = `
*[_type == "header"][0]{
    headerName,
    hamburgerMenuIcon {
      _type == "image" => {
        alt,
        "url": asset->url
      }
    },
    "logo": customImage ${customImageFragment},
    homePageLogo ${customImageFragment},
    navigationItems[] ${flyoutLinkFragment},
    socialIcons[] {
      "icon": ${iconFragment},
      url
    },
    button ${buttonFragment}
  }
`
