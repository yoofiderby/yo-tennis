import { textAndLinkFragment } from './textAndLinkFragment'
import { flyoutMenuFragment } from './flyoutMenuFragment'

export const flyoutLinkFragment = `{
  link ${textAndLinkFragment},
  hasFlyoutMenu,
  flyoutMenu ${flyoutMenuFragment}
}` 