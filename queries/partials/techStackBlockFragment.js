import { technologyTagFragment } from './technologyTagFragment'

export const techStackBlockFragment = `
  _type == "technologySection" => {
    _type,
    _key,
    title,
    "technologyGroups": technologyGroups[]{
      _type,
      _key,
      technologyCategory,
      "technologyTags": technologyTags[]-> {
        _id,
        title,
        "icon": icon.asset->{
          "url": url,
          "alt": alt
        }
      }
    }
  }
`