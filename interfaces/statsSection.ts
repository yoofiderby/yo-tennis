import { ButtonProps } from '@/interfaces/components/button'
import { CustomImage } from '@/interfaces/components/customImage'

export interface StatItem {
  value: string
  description: string
}

export interface StatsSectionProps {
  heading: string
  button?: ButtonProps
  stats: StatItem[]
  thumbnail: CustomImage
  video: {
    asset: {
      url: string
      originalFilename: string
    }
  }
} 