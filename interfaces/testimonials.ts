import { ButtonProps } from './components/button'
import { CustomImage } from './components/customImage'
import { SectionHeader } from './components/sectionHeader'

export interface Testimonial {
 rating?: number
 feedback?: string
 clientName: string
 clientDesignation: string
 clientCompany: string
 imageUrl: CustomImage
}
export interface TestimonialSectionProps {
 sectionHeader?: SectionHeader
 testimonials: Testimonial[]
 button?: ButtonProps
}
