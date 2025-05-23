import Image from 'next/image'
import TextBlock from '@/components/blocks/TextBlock'
import { AboutSectionProps } from '@/interfaces/aboutSection'
import { CustomTextComponents } from '@/components/blocks'
import { urlFor } from '@/sanity/lib/image'
import SectionTitle from '@/components/sectionTitle'

export default function AboutSection({ heading, content, images }: AboutSectionProps) {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="hidden md:block">
        <SectionTitle 
          variant="primary"
          size="large"
          as="h2"
          className=""
        >
          {heading}
        </SectionTitle>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left Column - Main Image with Overlay Text */}
          <div className="relative aspect-[3/4]">
            {/* Image Container */}
            <div className="absolute inset-0 overflow-hidden">
              {images[0]?.image && (
                <Image
                  src={urlFor(images[0].image).url()}
                  alt={images[0].image.alt || ''}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              )}
            </div>
            {/* Overlay Text Container */}
            <div className="hidden  absolute inset-0 z-10 lg:flex items-center justify-start pl-12">
              <span className="text-[130px] font-bold text-gray-900/20 origin-center -rotate-90 whitespace-nowrap -translate-x-[570px]">
                {images[0].overlayText}
              </span>
            </div>
          </div>
          <div className="block md:hidden">
        <SectionTitle 
          variant="primary"
          size="large"
          as="h2"
          className=""
        >
          {heading}
        </SectionTitle>
        </div>
          {/* Right Column - Content and Second Image */}
          <div className="space-y-8">MEET THE TEAM
            {/* Text Content */}
            <div className="prose prose-lg text-black space-y-6">
              <TextBlock content={content} components={CustomTextComponents} />
            </div>

            {/* Family Photo */}
            <div className="relative aspect-[4/3] overflow-hidden mt-8">
              {images[1]?.image && (
                <Image
                  src={urlFor(images[1].image).url()}
                  alt={images[1].image.alt || ''}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}