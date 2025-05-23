import { TestimonialSectionProps } from './testimonials'
import { PackagesSectionProps } from './packageSection'
import { FaqSection } from './faqSection'
import { CallToActionSectionProps } from './callToAction'

export interface Sections {
  _type: string
  TestimonialSectionProps: TestimonialSectionProps
  PackagesSectionProps: PackagesSectionProps
  FaqSectionProps: FaqSection
  CallToActionSectionProps: CallToActionSectionProps
  blocks?: any 
  homeSectionServices?: boolean 
  testimonialSection?: TestimonialSectionProps 
}
