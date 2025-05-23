import { authorFragment } from './authorFragment'
import { categoryFragment } from './categoryFragment'
import { customImageFragment } from './customImageFragment'


export const blogFragment = `{
  _id,
  featuredImage ${customImageFragment},
  title,
  excerpt,
  "slug": slug.current,
  _updatedAt,
  author-> ${authorFragment},
  categories[]-> ${categoryFragment},
  contentBlocks[] {
    _type,
    _key,
    _type == "textBlock" => {
      content
    },
    _type == "imageBlock" => {
      "image": image ${customImageFragment}
    },
    _type == "quoteBlock" => {
      quote,
      author
    },
    _type == "codeBlock" => {
      code
    }
  }
}`

// Get all blogs ordered by update time
export const allBlogsQuery = `*[_type == "blog"] | order(_updatedAt desc) ${blogFragment}`

// For featured blog - most recently updated
export const featuredBlogQuery = `*[_type == "blog"] | order(_updatedAt desc)[0] ${blogFragment}`

// For latest blogs - next 4 most recent, excluding featured
export const latestBlogsQuery = `*[_type == "blog"] | order(_updatedAt desc)[1...5] ${blogFragment}`