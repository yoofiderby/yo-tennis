import { ButtonProps } from './components/button'

export interface HeroClientProps {
 heading: string
}
export interface ParagraphPart {
 word: string
 color: string
}

export interface HeroDataProps {
 backgroundVideo?: {
  url: string
  originalFilename: string
 }
 backgroundImage: SanityImageAsset
 mainHeading: string
 highlightedHeading: string
 testimonialImages: SanityImageAsset[]
 testimonialText: string
 button: ButtonProps
}

export interface SanityImageAsset {
 _id: string
 _type: 'image'
 asset: {
  _ref: string
  _type: 'reference'
 }
 alt?: string
}
