import { Icon, SocialIcon } from './common'
import { CustomImage } from './components/customImage'
import { ButtonProps } from './components/button'
import { FlyoutLinkProps } from './components/flyoutMenu'

export interface HeaderProps {
  headerName?: string
  logo?: CustomImage
  homePageLogo?: CustomImage
  hamburgerMenuIcon?: {
    url?: string
    alt?: string
  }
  navigationItems?: Array<FlyoutLinkProps>
  socialIcons?: Array<SocialIcon>
  button?: ButtonProps
}
