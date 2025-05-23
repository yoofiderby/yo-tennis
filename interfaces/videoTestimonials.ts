import { CustomImage } from './components/customImage'

export interface VideoTestimonial {
  _id: string
  clientName: string
  feedback?: string
  thumbnailImage: CustomImage
  video: {
    asset: {
      url: string
      originalFilename: string
    }
  }
}

export interface VideoTestimonialSectionProps {
  variant: 'withHeading' | 'withHeadingAndBackground'
  heading: string
  subheading?: string
  backgroundImage?: CustomImage
  videoTestimonials: VideoTestimonial[]
} 