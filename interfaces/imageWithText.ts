import { ButtonProps } from './components/button'
import { PortableTextBlock } from 'next-sanity'

export interface ImageWithText {
  mainHeading: string
  image: {
    _type: string
    alt: string
    url: string
  }
  content: PortableTextBlock[]
  button?: ButtonProps
} 
