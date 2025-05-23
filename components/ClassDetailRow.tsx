import Image from 'next/image'
import Button from '@/components/Button'
import { TextBlock, CustomTextComponents } from './blocks'

interface ClassDetailRowProps {
  class: {
    _id: string
    title: string
    description: any
    featuredImage: {
      url: string
      alt: string
    }
    timePeriod: string
    maxCapacity: number
    location: string
    instructor: string
    slug: { current: string }
  }
  isReversed: boolean
}

export default function ClassDetailRow({ class: classItem, isReversed }: ClassDetailRowProps) {
  return (
    <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 mb-16`}>
      {/* Image Section */}
      <div className="lg:w-1/2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
          <Image
            src={classItem.featuredImage?.url || '/placeholder-image.jpg'}
            alt={classItem.featuredImage?.alt || classItem.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="lg:w-1/2 flex flex-col justify-center">
        <h3 className="text-3xl font-bold mb-4 text-black">{classItem.title}</h3>
        
        <div className="prose prose-sm mb-6">
          <TextBlock 
            content={classItem.description}
            components={CustomTextComponents}
          />
        </div>

        <div className="space-y-3 mb-8 text-black">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Time Period:</span>
            <span>{classItem.timePeriod}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Location:</span>
            <span>{classItem.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Instructor:</span>
            <span>{classItem.instructor}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Maximum Capacity:</span>
            <span>{classItem.maxCapacity} students</span>
          </div>
        </div>

        <Button
          buttonType="primary"
          textAndLink={{
            text: "Book Now",
            linkType: "internal",
            url: `/classes/${classItem.slug.current}`
          }}
        />
      </div>
    </div>
  )
} 