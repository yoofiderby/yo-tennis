import type { FaqSection } from '@/interfaces/faqSection'
import {
 Disclosure,
 DisclosureButton,
 DisclosurePanel,
} from '@headlessui/react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import SectionTitle from '@/components/sectionTitle'


const FaqSection = ({ sectionHeader, faqs, hasImage, image }: FaqSection) => {
 return (
  <div className="relative w-full mb-12">
   <div className="relative z-2 px-6  w-full p-6 text-black ">
    <div className="w-full max-w-7xl mx-auto">
     {/* Image Section - Shows first on mobile */}
     {hasImage && image && (
       <div className="w-full mb-12 lg:hidden">
         <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
           <Image 
             src={image.url || ''}
             alt={image.alt || 'FAQ section image'} 
             fill 
             className="object-cover" 
              
             priority 
           />
         </div>
       </div>
     )}

     <SectionTitle
      variant="primary"
      size="large"
      as="h2"
      className="mb-8 lg:mb-16"
     >
      {sectionHeader.mainHeading}
     </SectionTitle>

     <div className="flex flex-col lg:flex-row gap-12">
       {/* Desktop Image Section */}
       {hasImage && image && (
         <div className="hidden lg:block lg:w-1/3">
           <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
             <Image 
               src={image.url || ''}
               alt={image.alt || 'FAQ section image'} 
               fill 
               className="object-cover" 
                
               priority 
             />
           </div>
         </div>
       )}
       
       {/* FAQs Section */}
       <div className={`w-full ${hasImage ? 'lg:w-2/3' : ''}`}>
         <dl className="space-y-">
           {faqs.map((faq) => (
             <Disclosure
               key={faq.question}
               as="div"
               className="space-y-2 mb-2  rounded-lg "
             >
               <dt>
                 <DisclosureButton className="group flex w-full items-start justify-between text-left text-black p-3 bg-white rounded-lg shadow-sm border border-[#DDDEDF]">
                   <span className="text-base/7 font-semibold">{faq.question}</span>
                   <span className="ml-6 flex items-center bg-primary p-1 rounded-full">
                     <ChevronDownIcon
                       aria-hidden="true"
                       className="size-6 text-white group-data-[open]:hidden"
                     />
                     <ChevronUpIcon
                       aria-hidden="true"
                       className="size-6 text-white group-[&:not([data-open])]:hidden"
                     />
                   </span>
                 </DisclosureButton>
               </dt>
               <DisclosurePanel
                 as="dd"
                 className="p-3 bg-white rounded-lg shadow-sm border border-[#DDDEDF] mt-2"
               >
                 <p className="text-base/7 text-black">{faq.answer}</p>
               </DisclosurePanel>
             </Disclosure>
           ))}
         </dl>
       </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default FaqSection
