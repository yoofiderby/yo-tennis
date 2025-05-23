import { globalLinksFragment } from './globalLinksFragment'
export const textAndLinkFragment = `
{
  text,
  linkType,
  url,
  jumpTo,
  "page": page->{
    _type,
    _id,
    title,
    "slug": slug.current
  },
  "globalLink": globalLink->${globalLinksFragment}
}`
