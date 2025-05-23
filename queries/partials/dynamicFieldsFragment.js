export const dynamicFieldsFragment = `
  "dynamicFields": dynamicFields[]{
    _type,
    _key,
    _type == "clientInfo" => {
      "clientInfo": clientInfo[]{
        "key": key,
        "value": value
      }
    },
    _type == "projectServices" => {
      "services": services[]
    }
  }
`