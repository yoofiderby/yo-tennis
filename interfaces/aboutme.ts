import { CustomImage } from './components/customImage'
import { SectionHeader } from './components/sectionHeader'
import { SanityImageAsset } from './hero'
import { HighlightedText } from './highlightedText'
interface Paragraph {
 highlightedText: HighlightedText[]
}
export interface AboutMeSectionProps {
 sectionHeader: SectionHeader
 paragraphs: Paragraph[]
 profileImage: CustomImage
 arrowImage: SanityImageAsset
}
