import Image from 'next/image'
import { Testimonial } from '@/interfaces/testimonials'
import { urlFor } from '@/sanity/lib/image'

const Author = ({
 clientCompany,
 clientDesignation,
 clientName,
 imageUrl,
}: Testimonial) => {
 const { url, alt = '' } = imageUrl
 return (
  <div className="flex items-center gap-3.5">
   {imageUrl && (
    <Image
     src={urlFor(url).url()}
     alt={alt}
     width={60}
     height={60}
     className="rounded-full h-[60px] w-[60px]"
    />
   )}

   <div>
    {clientName && (
     <h3 className="font-sans text-lg font-semibold leading-5 text-white mb-1">
      {clientName}
     </h3>
    )}
    {clientDesignation && clientCompany && (
     <h6 className="font-sans text-base font-normal leading-7.5 text-white">
      {clientDesignation} @{clientCompany}
     </h6>
    )}
   </div>
  </div>
 )
}
export default Author
