import {
 buttonFragment,
 contactItemFragment,
 iconFragment,
 sectionHeaderFragment,
} from '../partials'

export const contactHeaderSectionFragment = `
_type == "contactHeaderSection" => {
   availability {
       "icon":${iconFragment},
       availabilityTitle
     },
   sectionHeader ${sectionHeaderFragment},
    backgroundImage,
    contactItems[] ${contactItemFragment},
     button ${buttonFragment}

   
  }
  `
