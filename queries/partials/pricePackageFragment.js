import { buttonFragment } from './buttonFragment'

export const pricePackageFragment = `
{
  _id,
  title,
  price,
  subtitle,
  featured,
  perks[] {
    text,
    highlighted
  },
  button ${buttonFragment}
}
`
