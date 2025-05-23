import { PortableTextReactComponents } from 'next-sanity'
import { Image } from 'next-sanity/image'
import { urlFor } from '@/sanity/lib/image'

// Type for image value
interface ImageValue {
 asset: { _ref: string }
 alt?: string
}

// Define the custom components with proper typing
const CustomTextComponents: Partial<PortableTextReactComponents> = {
 types: {
  image: ({ value }: { value: ImageValue }) => {
   if (!value?.asset?._ref) return null

   const imageUrl = urlFor(value).width(800).url()

   return (
    <Image
     src={imageUrl}
     alt={value.alt ?? 'Image'}
     width={800}
     height={400}
     className="my-4 w-full max-w-3xl mx-auto rounded-lg shadow-lg object-cover"
     loading="lazy"
    />
   )
  },
 },
 block: {
  h1: ({ children }) => (
   <h1 className="text-xl md:text-4xl lg:text-6xl font-semibold text-black mt-10 mb-6">{children}</h1>
  ),
  h2: ({ children }) => (
   <h2 className="text-lg md:text-3xl lg:text-5xl font-semibold text-black mt-10 mb-6">{children}</h2>
  ),
  h3: ({ children }) => (
   <h3 className="text-base md:text-2xl lg:text-4xl font-semibold text-black mt-10 mb-6">{children}</h3>
  ),
  h4: ({ children }) => (
   <h4 className="text-sm md:text-xl lg:text-3xl font-semibold text-black mt-10 mb-6">{children}</h4>
  ),
  normal: ({ children }) => (
   <p className="text-[20px] font-normal text-black mb-4">{children}</p>
  ),
  blockquote: ({ children }) => (
   <blockquote className="border-l-4 border-l-[#FFFFFF42] pl-6 my-8 text-[18px] md:text-xl lg:text-[24px] italic text-black">
    {children}
   </blockquote>
  ),
 },
 marks: {
  strong: ({ children }) => (
   <strong className="font-bold text-black">{children}</strong>
  ),
  em: ({ children }) => <em className="italic text-black">{children}</em>,
  link: ({ value, children }) => (
   <a
    href={value.href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 underline hover:text-blue-300"
   >
    {children}
   </a>
  ),
 },
 list: {
  bullet: ({ children }) => (
   <ul className="list-disc pl-8 mb-6 space-y-3 text-[18px] md:text-xl lg:text-[28px] text-black">
    {children}
   </ul>
  ),
  number: ({ children }) => (
   <ol className="list-decimal pl-8 mb-6 space-y-3 text-[18px] md:text-xl lg:text-[28px] text-black">
    {children}
   </ol>
  ),
 },
 listItem: {
  bullet: ({ children }) => <li className="mb-2">{children}</li>,
  number: ({ children }) => <li className="mb-2">{children}</li>,
 },
}

export default CustomTextComponents
