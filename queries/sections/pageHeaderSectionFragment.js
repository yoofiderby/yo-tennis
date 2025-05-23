import {
 callToActionFragment,
 highlightedTextFragment,
 buttonFragment,
} from '../partials'

export const pageHeaderSectionFragment = `
  _type == "pageHeaderSection" => {
    mainHeading,
    description,
    callToAction ${callToActionFragment},
    highlightedText[] ${highlightedTextFragment},
    button ${buttonFragment}
  }
`
