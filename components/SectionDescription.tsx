import { SectionHeader } from '@/interfaces/components/sectionHeader'

const SectionDescription = ({ description }: SectionHeader) => {
 return (
  <>
   {description && (
    <p className=" font-sans text-start sm:text-center block font-medium md:font-normal text-base lg:text-xl leading-22.5 md:leading-25  mx-auto mb-6 md:mb-8 lg:mb-12 xl:mb-16">
     {description}
    </p>
   )}
  </>
 )
}

export default SectionDescription
