import { ButtonProps } from './components/button'

export interface PerkType {
 text: string
 highlighted: boolean
}

export interface PackageType {
 _id: string
 title: string
 price: string
 subtitle: string
 perks: PerkType[]
 featured?: boolean
 button: ButtonProps
}

export interface PackagesSectionProps {
 heading: string
 subheading?: string
 packages: PackageType[]
 alternateText?: string
 referralText?: string
}

export interface PackageCardProps {
 title: string
 price: string
 subtitle: string
 perks: Array<{
  text: string
  highlighted?: boolean
 }>
 featured?: boolean
 button: ButtonProps
}
