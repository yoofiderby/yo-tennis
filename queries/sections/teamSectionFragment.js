import { customImageFragment } from '../partials/customImageFragment'

export const teamSectionFragment = `
  _type == "teamSectionRef" => {
    _type,
    _key,
    "teamSection": teamSection->{
      _id,
      heading,
      backgroundHeading,
      "teamMembers": teamMembers[]->{
        _id,
        name,
        designation,
        bio,
        "image": image${customImageFragment},
        socialLinks[]{
          platform,
          url
        }
      }
    }
  }
` 