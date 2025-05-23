import { iconFragment } from '.'
export const solutionFragment = `_type == "solution"=> {
  solutionTitle,
  solutionDescription,
  "solutionIcon" :${iconFragment}
}`
