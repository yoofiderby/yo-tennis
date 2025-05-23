import { customImageFragment } from '../partials'

export const aboutMeHeaderSectionFragment = `
_type == "aboutMeHeaderSection" => {
    mainHeading,
    backgroundImage,
    profileImage ${customImageFragment},
    highlightedText[] {
      text,
      color
    }, 
  }
  `
