import {
 buttonFragment,
 iconFragment,
 textAndLinkFragment,
 contactItemFragment,
} from '../partials'

export const footerFragment = `
   *[_type == "footer"][0]{
      backgroundImage {
        asset->,
        alt
      },
      heading,
      leftNavigationItems[] ${textAndLinkFragment},
      rightNavigationItems[] ${textAndLinkFragment},
      socialIcons[]{"icon":${iconFragment},
      url},
      contactItems[] ${contactItemFragment},
      button ${buttonFragment},
      copyrightText,
      creditText,
     }
   `
