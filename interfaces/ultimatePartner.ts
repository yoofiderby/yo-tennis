import { CustomImage } from './components/customImage'
import { SectionHeader } from './components/sectionHeader'
interface Stats {
 type: string
 title: string
 description: string
 imageUrl: CustomImage
}
export interface UltimatePartnerSectionProps {
 sectionHeader?: SectionHeader
 stats: Stats[]
}
