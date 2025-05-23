import Image from 'next/image'
import SectionTitle from '@/components/sectionTitle'
import Button from '@/components/Button'
import { ClassCardProps } from '@/interfaces/components/classCard'

const ClassCard = ({ 
  title, 
  timePeriod, 
  featuredImage,
  slug,
  isFullWidth = false,
  isClassDetail = false
}: ClassCardProps) => {
  console.log(isClassDetail)
  return (
    <div className={`relative overflow-hidden mx-auto ${
      isFullWidth ? 'w-full lg:w-full' : 'w-full lg:w-[calc(50%-10px)]'
    } max-w-[382px] lg:max-w-none group`}>
      {/* Class Image */}
      <div className={`relative w-full ${isFullWidth ? 'h-[440px] lg:h-[600px]' : 'h-[440px] md:h-[600px]'}`}>
        <Image
          src={featuredImage?.url || '/placeholder-image.jpg'}
          alt={featuredImage?.alt || title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Class Info */}
      <div className="absolute bottom-6 left-6 right-6 lg:right-auto bg-white p-6 lg:max-w-[80%]">
        <p className="text-base text-gray-600 mb-2 font-medium">{timePeriod}</p>
        <SectionTitle
          variant="primary"
          size="small"
          as="h3"
          className="mb-2"
        >
          {title}
        </SectionTitle>
        <Button
          buttonType="primary"
          textAndLink={{
            text: isFullWidth ? "Book Now" : "Book Now",
            linkType: "internal",
            url: isClassDetail ? `/classes/${slug.current}` : `/buy-classes`
          }}
          overrideUrl={isClassDetail ? `/classes/${slug.current}` : `/buy-classes`}
        />
      </div>
    </div>
  )
}

export default ClassCard 