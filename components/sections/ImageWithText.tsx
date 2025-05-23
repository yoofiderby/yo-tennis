import type { ImageWithText } from '@/interfaces/imageWithText'
import Image from 'next/image'
import Button from '@/components/Button'
import TextBlock from '@/components/blocks/TextBlock'
import { CustomTextComponents } from '@/components/blocks'
import SectionTitle from '@/components/sectionTitle'
import { urlFor } from '@/sanity/lib/image'

const ImageWithText = ({ mainHeading, image, content, button }: ImageWithText) => {
 return (
  <div className="relative w-full">
   <div className="relative z-10 px-6 py-12 sm:py-16 lg:py-24 w-full text-black lg:px-8">
    <div className="w-full max-w-7xl mx-auto">
     <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
       {/* Text Content */}
       <div className="w-full lg:w-2/3">
         <SectionTitle 
          variant="primary"
          size="default"
          as="h2"
          className="mb-8"
         >
          {mainHeading}
         </SectionTitle>
   
         <div className="prose prose-lg max-w-none mb-12 lg:mb-16">
           <TextBlock content={content} components={CustomTextComponents} />
         </div>
         {button && (
           <Button 
             textAndLink={button.textAndLink} 
             buttonType={button.buttonType} 
             overrideUrl={'/buy-classes'}
           />
         )}
       </div>

       {/* Image */}
       <div className="w-full lg:w-1/2">
         <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
           <Image 
             src={urlFor(image).url()}
             alt={image.alt || ''}
             fill
             className="object-cover"
             loading="lazy"
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
           />
         </div>
       </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default ImageWithText 