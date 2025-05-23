import Image from 'next/image'
import SectionTitle from '@/components/sectionTitle'
import Button from '@/components/Button'
import { SubPackageCardProps } from '@/interfaces/components/SubPackageCard'

export default function SubPackageCard({ package: pkg }: SubPackageCardProps) {
  return (
    <div className="rounded-lg  shadow-md flex flex-col h-full bg-transparent overflow-hidden">
      {/* Image with badge */}
      <div className="relative w-full h-64 sm:h-56 md:h-56 lg:h-56">
        {pkg.featuredImage?.url && (
          <Image
            src={pkg.featuredImage.url}
            alt={pkg.title}
            fill
            className="w-full h-full object-cover"
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 33vw"
            loading="lazy"
          />
        )}
        <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md uppercase tracking-wide">
          {pkg.title}
        </span>
      </div>
      {/* White container */}
      <div className="bg-white flex flex-col items-left p-6 rounded-b-lg flex-1">
        <SectionTitle
          as="h3"
          size="default"
          variant="primary"
          className="mb-2 text-left"
        >
          {pkg.title}
        </SectionTitle>
        <div className="text-3xl font-extrabold text-green-600 mb-4 text-left">${pkg.price}</div>
        <div className="mt-auto w-full flex justify-start">
          <Button
            buttonType="primary"
            textAndLink={{
              text: "Book Now",
              linkType: "internal",
              url: `/booking/${pkg.slug?.current}`
            }}
            overrideUrl={`/booking/${pkg.slug?.current}`}
          />
        </div>
      </div>
    </div>
  )
} 