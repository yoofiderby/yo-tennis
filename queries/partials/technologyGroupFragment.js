import { technologyTagFragment } from '.'
export const technologyGroupFragment = `{
  title,
  technologyGroups[] {
    ...,
    technologyTags[]-> ${technologyTagFragment}
  }
}`
