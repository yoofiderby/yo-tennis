import { CustomImage } from './components/customImage'

export interface Faq {
 question: string
 answer: string
}

export interface FaqSection {
 sectionHeader: {
  mainHeading: string
 }
 faqs: Array<{
  question: string
  answer: string
 }>
 hasImage: boolean
 image: CustomImage
}
