'use client'

import SectionTitle from '@/components/sectionTitle'
import TextBlock from '@/components/blocks/TextBlock'
import CustomTextComponents from '@/components/blocks/CustomTextComponents'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { BookingData } from '@/interfaces/components/booking'
import BookingForm from './BookingForm'

export default function BookingPage({ initialData }: { initialData: BookingData }) {
  const { title: classTitle, subPackage, timeSlots = [], _id: classId } = initialData

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Booking Form */}
          <div className="space-y-8">
            <div className="rounded-lg shadow-lg p-8">
              <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <SectionTitle 
                  variant="white" 
                  className="!text-[24px] !leading-normal"
                  as="h3"
                >
                  {subPackage.title}
                </SectionTitle>
              </div>
              <div className="text-left mb-12">
                <SectionTitle variant="primary" size="small" as="h3">
                  {classTitle}
                </SectionTitle>
              </div>
              <TextBlock
                content={subPackage.description}
                components={CustomTextComponents}
              />
              <div className="text-left mb-12">
                <SectionTitle variant="gradient" size="default" as="h3">
                  ${subPackage.price}
                </SectionTitle>
              </div>
              
              <BookingForm
                classId={classId}
                subPackageId={subPackage._key}
                subPackagePrice={subPackage.price}
                timeSlots={timeSlots}
              />
            </div>
          </div>

          {/* Right Column - Package Details */}
          <div className="space-y-8">
            {/* Featured Image */}
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={urlFor(subPackage.featuredImage).url()}
                alt={subPackage.title}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 