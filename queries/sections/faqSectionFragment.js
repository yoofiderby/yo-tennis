import { sectionHeaderFragment, customImageFragment } from '../partials'

export const faqSectionFragment = `
  _type == "faqSectionRef" => {
    "faqSection": @-> {
      sectionHeader ${sectionHeaderFragment},
      hasImage,
      image ${customImageFragment},
      faqs[]->{
        _id,
        question,
        answer
      }
    }
  }
`
