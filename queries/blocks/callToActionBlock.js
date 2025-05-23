import { buttonFragment } from '../partials'
export const callToActionBlockFragment = `
  _type == "callToActionBlock" => {
    _type,
    _key,
    title,
    subtitle,
    button ${buttonFragment}
  }
`
