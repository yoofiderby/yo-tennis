import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getFaqSectionQuery, getVideoTestimonialsQuery, getTestimonialsQuery, getClassQuery } from '@/queries/classDetailQueries.js'
import SubPackageCard from '@/components/SubPackageCard'
import { SubPackage } from '@/interfaces/components/SubPackageCard'
import SectionTitle from '@/components/sectionTitle'
import FaqSection from '@/components/sections/FaqSection'
import VideoTestimonial from '@/components/VideoTestimonial'
import TestimonialSection from '@/components/sections/Testimonials'

async function getClass(slug: string) {
  return client.fetch(getClassQuery, { slug })
}

async function getFaqSection() {
  return client.fetch(getFaqSectionQuery)
}

async function getVideoTestimonials() {
  return client.fetch(getVideoTestimonialsQuery)
}

async function getTestimonials() {
  return client.fetch(getTestimonialsQuery)
}

export default async function ClassPage({
  params,
}: {
  params: { slug: string }
}) {
  const [classData, faqData, videoTestimonialsData, testimonialsData] = await Promise.all([
    getClass(params.slug),
    getFaqSection(),
    getVideoTestimonials(),
    getTestimonials()
  ])

  if (!classData) {
    notFound()
  }

  return (
    <main className="min-h-screen mt-12">
      {/* Chart Image Full Width */}
      {classData.chartImage?.url && (
        <section className="w-full flex p-3 flex-col justify-start items-center ">
          <div className="container mx-auto">
            <SectionTitle variant="primary" size="small">
              {classData.chartTitle}
            </SectionTitle>
          </div>
          {/* Desktop Chart Image */}
          <Image
            src={classData.chartImage.url}
            alt="Chart"
            width={1200}
            height={700}
            className="w-full h-auto object-contain mt-12 max-w-[1280px] hidden md:block"
            loading="lazy"
            />
          {/* Mobile Chart Image */}
          <Image
            src={classData.chartImageMobile.url}
            alt="Chart"
            width={100}
            height={700}
            className="w-full h-auto  object-contain  md:hidden"
            loading="lazy"
          />
        </section>
      )}

      {/* Packages Grid */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classData.subPackages?.filter((pkg: SubPackage) => pkg.isActive).map((pkg: SubPackage) => (
              <SubPackageCard key={pkg._key} package={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      {videoTestimonialsData && (
        <VideoTestimonial {...videoTestimonialsData} />
      )}

      {/* Testimonials Section */}
      {testimonialsData && (
        <TestimonialSection {...testimonialsData} />
      )}

      {/* FAQ Section */}
      {faqData && (
        <FaqSection 
          sectionHeader={{ mainHeading: "Frequently Asked Questions" }}
          faqs={faqData.faqs}
          hasImage={faqData.hasImage}
          image={faqData.image}
        />
      )}
    </main>
  )
} 