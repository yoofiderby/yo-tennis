import { textAndLinkFragment } from './textAndLinkFragment'
import { iconFragment } from './iconFragment'
export const flyoutCardFragment = `{
  "icon": ${iconFragment},
  heading,
  description,
  link ${textAndLinkFragment}
}` 