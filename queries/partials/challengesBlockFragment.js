export const challengesBlockFragment = `
  _type == "challengesSection" => {
    _type,
    _key,
    "sectionHeader": sectionHeader{
      "mainHeading": mainHeading,
      "description": description
    },
    "challenges": challenges[]{
      _key,
      title,
      description
    }
  }
`