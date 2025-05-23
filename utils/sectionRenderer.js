import Hero from '@/components/sections/Hero'
import PageHeaderSection from '@/components/sections/PageHeaderSection'
import TestimonialSection from '@/components/sections/Testimonials'
import FaqSection from '@/components/sections/FaqSection'
import CardSection from '@/components/sections/CardSection'
import VideoTestimonial from '@/components/VideoTestimonial'
import PlansSection from '@/components/sections/PlansSection'
import ImageBlock from '@/components/blocks/ImageBlock'
import transformImagesBlock from '@/utils/transformImagesBlock'
import ImageWithText from '@/components/sections/ImageWithText'
import TeamSection from '@/components/sections/TeamSection'
import ContactSection from '@/components/sections/ContactSection'
import AboutSection from '@/components/sections/AboutSection'
import StatsSection from '@/components/sections/StatsSection'
import TextBlockSection from '@/components/sections/TextBlockSection'
import CustomTextComponents from '@/components/blocks/CustomTextComponents'
import AllClassesSection from '@/components/sections/AllClassesSection'

export function sectionRenderer({ section }) {
  const { _type } = section

  if (_type === 'heroSection') {
    return <Hero {...section} />
  }
  if (_type === 'pageHeaderSection') {
    return <PageHeaderSection {...section} />
  }
  if (_type === 'testimonialSectionRef') {
    const { testimonialSection } = section
    return <TestimonialSection {...testimonialSection} />
  }
  if (_type === 'packagesSection') {
    return <PackagesSection {...section} />
  }
  if (_type === 'callToActionSection') {
    return <CallToActionSection {...section} />
  }
  if (_type === 'faqSection') {
    return <FaqSection {...section} />
  }
  if (_type === 'faqSectionRef') {
    const { faqSection } = section
    return <FaqSection {...faqSection} />
  }
  if (_type === 'cardsSection') {
    return <CardSection {...section} />
  }
  if (_type === 'cardsSectionRef') {
    const { cardsSection } = section
    return cardsSection ? <CardSection {...cardsSection} /> : null
  }
  if (_type === 'videoTestimonialsSectionRef') {
    const { videoTestimonialsSection } = section
    return videoTestimonialsSection ? <VideoTestimonial {...videoTestimonialsSection} /> : null
  }
  if (_type === 'plansSection') {
    return <PlansSection plansSection={section} />
  }
  if (_type === 'plansSectionRef') {
    const { plansSection } = section
    return plansSection ? <PlansSection plansSection={plansSection} /> : null
  }
  if (_type === 'teamSectionRef') {
    const { teamSection } = section
    return teamSection ? <TeamSection {...teamSection} /> : null
  }
  if (_type === 'contactSectionRef') {
    const { contactSection } = section
    return contactSection ? <ContactSection {...contactSection} /> : null
  }
  if (_type === 'aboutSection') {
    return <AboutSection {...section} />
  }
  if (_type === 'statsSection') {
    return <StatsSection {...section} />
  }

  if (_type === 'blockContent') {
    return (
      <TextBlockSection
      content={section.blocks}
      components={CustomTextComponents}
      />
    )
  }
  if (_type === 'imagesBlock') {
    const transformed = transformImagesBlock(section)
    return (
      <ImageBlock
        block={transformed}
        variant={transformed.variant}
      />
    )
  }
  if (_type === 'imageWithText') {
    return <ImageWithText {...section} />
  }
  if (_type === 'allClassesSection') {
    return <AllClassesSection {...section} />
  }
  
  return null
}
