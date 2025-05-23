import { cardsSectionFragment } from './cardsSectionFragment'

export const cardsSectionRefFragment = `
  _type == "cardsSectionRef" => {
    "cardsSection": @-> {
      ${cardsSectionFragment}
    }
  }
` 