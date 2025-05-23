import { blogFragment } from '../partials'

export const blogSectionFragment = `_type == "blogSection" => {
  heading,
  buttonText,
  showAll,
  "blogs": select(
    showAll => *[_type == "blog"] | order(_updatedAt desc) ${blogFragment},
    selectedBlogs[]-> ${blogFragment}
  )
}`;
