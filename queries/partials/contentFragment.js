export const contentFragment = `{
  _type == "block" => {
    ...,
    children[] {
      text,
      marks,
      _type,
      ...
    }
  },
  _type == "challenge" => {
    title,
    description
  }
}`
