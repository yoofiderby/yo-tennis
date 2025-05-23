export interface ClassCardProps {
  title: string
  timePeriod: string
  featuredImage?: {
    url?: string
    alt?: string
  }
  slug: {
    current: string
  }
  description?: any[] 
  isFullWidth?: boolean
  isClassDetail?: boolean
} 