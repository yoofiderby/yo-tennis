import { flyoutCardFragment } from './flyoutCardFragment'
import { flyoutCTAFragment } from './flyoutCTAFragment'

export const flyoutMenuFragment = `{
  cards[] ${flyoutCardFragment},
  ctaButtons[] ${flyoutCTAFragment}
}` 