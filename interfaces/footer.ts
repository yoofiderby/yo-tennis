import { Icon, SocialIcon } from './common'
import { ButtonProps } from './components/button'
import { TextAndLink } from './components/textAndLink'
import { SanityImageAsset } from './hero'

interface ContactItem {
 icon: Icon
 text: string
 url: string
}

export interface FooterProps {
 backgroundImage?: {
  asset: SanityImageAsset;
  alt?: string;
 };
 heading: string;
 leftNavigationItems: TextAndLink[];
 rightNavigationItems: TextAndLink[];
 socialIcons?: SocialIcon[];
 copyrightText: string;
 creditText?: string;
 button: ButtonProps
 hireMeButton: SanityImageAsset
}
