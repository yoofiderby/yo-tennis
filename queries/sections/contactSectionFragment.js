export const contactSectionFragment = `
  _type == "contactSectionRef" => @{
    _type,
    _key,
    contactSection-> {
      _id,
      heading,
      email
    }
  }
` 