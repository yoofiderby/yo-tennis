export const imageWithTextFragment = `
  _type == "imageWithText" => {
    mainHeading,
    "image": {
      "_type": image._type,
      "alt": image.alt,
      "url": image.asset->url
    },
    content,
    button {
      buttonType,
      textAndLink {
        text,
        linkType,
        "page": page-> {
          _type,
          _id,
          title,
          "slug": slug.current
        }
      }
    }
  }
`