import Image from 'next/image'
import { PreHeading } from '@/interfaces/common'
import { urlFor } from '@/sanity/lib/image'

const SectionPreHeading = ({
 icon,
 text,
 justifyStart,
}: PreHeading & { justifyStart?: boolean }) => {
 const { iconUrl, alt } = icon
 return (
  <div
   className={`flex items-center ${justifyStart ? 'justify-start' : 'sm:justify-center'} mb-4.5 gap-2.5`}
  >
   {iconUrl && (
    <Image
     src={urlFor(iconUrl).url()}
     alt={alt}
     height={23.71}
     width={16}
     loading="lazy"
    />
   )}
   {text && (
    <h6 className="text-start sm:text-center text-foundation-light-orange font-sans font-medium text-base leading-6 uppercase">
     {text}
    </h6>
   )}
  </div>
 )
}

export default SectionPreHeading
