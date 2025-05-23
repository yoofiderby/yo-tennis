import { customImageFragment } from './customImageFragment'

export const authorFragment = `{
 _id,
 authorImage ${customImageFragment},
      name,
      bio[]

}`
