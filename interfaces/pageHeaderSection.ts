import { HighlightedText } from '@/interfaces/highlightedText'
import { ButtonProps } from '@/interfaces/components/button'
import { GlobalLink } from '@/interfaces/components/textAndLink'
export interface PageHeaderSectionProps {
 mainHeading: string
 description: string
 callToAction: {
  text: string
  email: string
  meetingText: string
  meetingLink: GlobalLink
 }
 button: ButtonProps
 highlightedText: HighlightedText[]
}
