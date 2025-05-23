import { sectionHeaderFragment, customImageFragment } from '../partials'

export const crazyFullStackSectionFragment = `_type == "crazyFullStackSection" => {
     sectionHeader ${sectionHeaderFragment},
      title,
expertise[] {
    icon->{
        _id,
        "iconUrl": customImage.asset->url,
         "alt": customImage.alt
      },
    service
  },
     profileImage ${customImageFragment}
   }
   `
