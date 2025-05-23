interface Page {
  _type: string
  _id: string
  title: string
  slug: string
}

export interface GlobalLink {
  name: string
  url: string
}

export interface TextAndLink {
  text: string
  linkType: 'internal' | 'external' | 'inline' | 'global'
  url?: string
  jumpTo?: string
  page?: Page
  globalLink?: GlobalLink
}
