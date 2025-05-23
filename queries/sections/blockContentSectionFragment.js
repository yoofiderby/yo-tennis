// import { contentFragment } from '../partials'

export const blockContentSectionFragment = `_type == "contentBlocks" =>{
  contentBlocks {
    blocks[] {
      _type == "textBlock" => {
        _type,
        body
      },
      _type == "challengeBlock" => {
        _type,
        title,
        description
      }
    }
  }
  }
  `
