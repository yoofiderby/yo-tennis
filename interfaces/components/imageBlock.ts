export interface ImageBlockDimensions {
    width?: number;
    height?: number;
  }
  
  export interface SingleImage {
    url: string;
    alt?: string;
    dimensions?: ImageBlockDimensions;
  }
  
  export interface ImageBlockData {
    _type: string;
    image?: SingleImage;
    dimensions?: ImageBlockDimensions;
    images?: SingleImage[];
  }
  
  export interface ImageBlockProps {
    block: ImageBlockData;
    variant: 'single' | 'double';
  }