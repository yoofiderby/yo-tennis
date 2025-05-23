import SectionPreHeading from './SectionPreHeading'
import type { SectionHeader } from '@/interfaces/components/sectionHeader'

const SectionHeader = ({ sectionHeader }: { sectionHeader: SectionHeader }) => {
 const { preHeading, mainHeading } = sectionHeader || {}

 return (
  <div className="container mx-auto">
   {preHeading && (
    <SectionPreHeading
     icon={preHeading.icon}
     text={preHeading.text}
     justifyStart={true}
    />
   )}
   {mainHeading && (
    <h2 className="text-foundation-sky-blue font-bold text-4xl lg:text-3xl xl:text-4xl 1440:text-5xl leading-45 lg:leading-7  1440:leading-60 font-sans mt-2.5 lg:uppercase">
     {mainHeading}
    </h2>
   )}
   {sectionHeader?.description && (
    <p className="text-lg text-gray-300 mb-8">{sectionHeader.description}</p>
   )}
  </div>
 )
}

export default SectionHeader
