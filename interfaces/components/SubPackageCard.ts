import { CustomImage } from './customImage'

export interface SubPackage {
  _key: string
  title: string
  slug: {
    current: string
  }
  description: string
  featuredImage: CustomImage
  price: number
  stripePriceId: string
  stripeProductId: string
  isActive: boolean
}

export interface SubPackageCardProps {
  package: SubPackage
} 