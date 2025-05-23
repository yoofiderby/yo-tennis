import {
 highlightedTextFragment,
 sectionHeaderFragment,
 customImageFragment,
} from '../partials'

export const aboutMeSectionFragment = `_type == "aboutMeSection" => {
  sectionHeader ${sectionHeaderFragment},
   paragraphs[] {
    highlightedText[] ${highlightedTextFragment}
  },
  profileImage ${customImageFragment}
}
`
