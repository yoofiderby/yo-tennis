import { customImageFragment } from '../partials';

export const fetchBlogDataQuery = `
  *[_type == "blog" && slug.current == $slug]{
    title,
    excerpt,
    _updatedAt,
    "slug": slug.current,
    "featuredImage": featuredImage ${customImageFragment},
    contentBlocks[]{
      ...,
      _type == "imageBlock" => {
        "image": image ${customImageFragment},
        "dimensions": image.asset->metadata.dimensions
      },
      _type == "quoteBlock" => {
        quote,
        author
      },
      _type == "codeBlock" => {
        code
      },
      _type == "stringBlock" => {
        content
      }
    }
  }
`;