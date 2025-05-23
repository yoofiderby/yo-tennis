export const solutionsBlockFragment = `
  _type == "solutionsSection" => {
    _type,
    _key,
    "sectionHeader": sectionHeader{
      "mainHeading": mainHeading,
      "description": description
    },
    "solutions": solutions[]{
      _key,
      solutionTitle,
      solutionDescription,
      "icon": {
        "url": icon->customImage.asset->url,
        "alt": icon->customImage.alt
      }
    }
  }
`