import {customImageFragment}  from '.';

export const imagesBlockFragment = `
  _type == "imagesBlock" => {
    ...,
    variant,
    "singleImage": singleImage ${customImageFragment},
    "doubleImages": doubleImages[] ${customImageFragment}
  }
`;