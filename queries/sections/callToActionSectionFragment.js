import { callToActionBlockFragment } from '../blocks/callToActionBlock'

export const callToActionSectionFragment = `
  _type == "callToActionSection" => {
    _type,
    _key,
    subtitle,
    CTA[] {
      ${callToActionBlockFragment}
    },
  }
`
