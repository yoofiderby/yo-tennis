import { sectionHeaderFragment } from '../partials/sectionHeaderFragment'

export const cardSectionFragment = `
  _type,
  _key,
  sectionHeader {
    ${sectionHeaderFragment}
  },
  cards[] {
    _id,
    title,
    description,
    image {
      url,
      alt
    }
  }
`

export const cardsSectionRefFragment = `
  _type == 'cardsSectionRef' => {
    _type,
    _key,
    _ref,
    cardsSection-> {
      ${cardSectionFragment}
    }
  }
` 
