import { SectionHeader } from '@/interfaces/components/sectionHeader'

const SectionHeading = ({ mainHeading }: SectionHeader) => {
 return (
  <>
   {mainHeading && (
    <h1 className="lg:uppercase mx-auto font-semibold lg:font-bold font-sans text-4xl  lg:text-6xl leading-45 lg:leading-75 tracking-1 text-black text-start sm:text-center mb-2.5 lg:mb-4 mt-2.5 md:mt-1">
     {mainHeading}
    </h1>
   )}
  </>
 )
}

export default SectionHeading
