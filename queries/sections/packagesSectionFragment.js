import { pricePackageFragment } from '../partials/pricePackageFragment'

export const packagesSectionFragment = `
  _type == "packagesSection" => {
    _type,
    _key,
    heading,
    subheading,
    packages[]-> ${pricePackageFragment},
  }
`
