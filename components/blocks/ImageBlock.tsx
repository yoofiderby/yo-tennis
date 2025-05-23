import React from 'react';
import { Image } from 'next-sanity/image';
import { urlFor } from '@/sanity/lib/image';
import { ImageBlockProps,  } from '@/interfaces/components/imageBlock';


const ImageBlock: React.FC<ImageBlockProps> = ({ block, variant }) => {
  if (variant === 'double') {
    const images = block.images;
    if (!images || images.length < 2) return null;
    return (
      <div className="flex gap-4">
        {images.slice(0, 2).map((img, index) => (
          <div key={index} className="w-1/2">
            <Image
              src={urlFor(img.url).url()}
              alt={img.alt || 'Image'}
              width={img.dimensions?.width || 600}
              height={img.dimensions?.height || 400}
              className="rounded-lg object-contain w-full h-auto"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    );
  } else {
    const img = block.image;
    if (!img) return null;
    return (
      <div className="relative w-full h-auto">
        <Image
          src={urlFor(img.url).url()}
          alt={img.alt || ''}
          width={block.dimensions?.width || 1088}
          height={block.dimensions?.height || 600}
          className="rounded-lg w-full h-auto object-contain"
          priority
          loading="lazy"
        />
      </div>
    );
  }
};

export default ImageBlock;
