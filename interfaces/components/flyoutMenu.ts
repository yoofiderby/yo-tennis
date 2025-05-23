import { TextAndLink } from './textAndLink'
import { Icon } from '../common'
export interface FlyoutCardProps {
  icon: Icon
  heading: string
  description: string
  link: TextAndLink
}

export interface FlyoutCTAProps {
  icon: Icon
  text: string
  link: TextAndLink
}

export interface FlyoutMenuProps {
  cards: Array<FlyoutCardProps>
  ctaButtons: Array<FlyoutCTAProps>
}

export interface FlyoutLinkProps {
  link: TextAndLink
  hasFlyoutMenu?: boolean
  flyoutMenu?: FlyoutMenuProps
} 