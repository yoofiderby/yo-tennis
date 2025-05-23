export const awardSectionFragment = `_type == "awardSection" =>{
    heading,
    description,
        awards[]{
       _type == "customImage" => {
        alt,
       "certificateUrl": asset->url,
    },
    
      }
  }
  `;
