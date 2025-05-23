import { SectionHeader } from './components/sectionHeader'
import { CustomImage } from './components/customImage'

export interface Card {
  _id: string
  title: string
  description: string
  image: CustomImage
}

export interface CardSection {
  _type: 'cardsSection'
  sectionHeader: SectionHeader
  cards: Card[]
} 