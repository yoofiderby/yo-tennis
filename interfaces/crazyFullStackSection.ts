import { Icon } from './common'
import { CustomImage } from './components/customImage'
import { SectionHeader } from './components/sectionHeader'

interface ExpertiseTechnology {
 icon: Icon
 service: string
}
export interface CrazyFullStackSectionProps {
 sectionHeader: SectionHeader
 title: string
 expertise: ExpertiseTechnology[]
 profileImage: CustomImage
}
