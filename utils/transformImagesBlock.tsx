export default function transformImagesBlock(block: any) {
    // If it's a single variant, rename `singleImage` -> `image`
    if (block.variant === 'single' && block.singleImage) {
      return {
        ...block,
        image: {
          url: block.singleImage.url,
          alt: block.singleImage.alt,
          // Add dimensions if you have them in your data
          dimensions: block.singleImage.dimensions || { width: 1088, height: 600 },
        },
      };
    }
  
    // If it's a double variant, rename `doubleImages` -> `images`
    if (block.variant === 'double' && block.doubleImages) {
      return {
        ...block,
        images: block.doubleImages.map((img: any) => ({
          url: img.url,
          alt: img.alt,
          // Add dimensions if you have them
          dimensions: img.dimensions || { width: 600, height: 400 },
        })),
      };
    }
  
    // Fallback if neither single nor double is valid
    return block;
  }