export const clientSectionFragment = `
  _type == "clientSectionRef" => {
    clientSection->{
      heading,
      clients[]->{
        "logoUrl": logoUrl.asset->url,
        "alt": logoUrl.alt
      }
    }
  }
`
