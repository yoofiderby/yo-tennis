import { sectionHeaderFragment } from '../partials/sectionHeaderFragment'
import { customImageFragment } from '../partials/customImageFragment'
export const cardsSectionFragment = `
  sectionHeader ${sectionHeaderFragment},
  cards[]-> {
    _id,
    _type,
    title,
    description,
    image ${customImageFragment},
    url
  }
` 