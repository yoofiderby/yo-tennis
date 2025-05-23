import { CustomImage } from './components/customImage'
import { PortableTextBlock } from 'next-sanity'

interface AboutImage {
  image: CustomImage
  overlayText: string
}

export interface AboutSectionProps {
  heading: string
  content: {
    blocks?: PortableTextBlock[]
  } | PortableTextBlock[]
  images: AboutImage[]
} 