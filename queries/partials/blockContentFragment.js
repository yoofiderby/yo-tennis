export const blockContentFragment = `
  _type == "blockContent" => {
    _type,
    _key,
    "blocks": blocks[]{
      ...,
      _type == "image" => {
        "url": asset->url,
        "alt": alt
      }
    }
  }
`