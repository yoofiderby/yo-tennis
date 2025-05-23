export interface Package {
  title: string
  description?: string
  price?: string
  features?: string[]
}

export interface PackagesSectionProps {
  _type: 'packagesSection'
  title?: string
  subtitle?: string
  packages?: Package[]
} 