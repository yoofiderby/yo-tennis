import { sectionHeaderFragment } from '../partials'

export const expertiseAcrossIndustriesSectionFragment = `_type == "expertiseAcrossIndustriesSection" => {
   sectionHeader ${sectionHeaderFragment},
expertise[] {
    icon->{
        _id,
        "iconUrl": customImage.asset->url,
         "alt": customImage.alt
      },
    industryTitle,
    industryDescription
  },
     
   }
   `
