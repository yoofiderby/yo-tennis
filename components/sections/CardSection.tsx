import Image from 'next/image'
import type { CardSection as CardSectionType } from '@/interfaces/cardSection'
import SectionTitle from '@/components/sectionTitle'

const CardSection = ({ sectionHeader, cards }: CardSectionType) => {
  return (
    <div className="sm:py-32  mb-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl p4">
          <SectionTitle
            variant="primary"
            size="default"
            as="h2"
            className="mb-4"
          >
            {sectionHeader?.mainHeading}
          </SectionTitle>
          {sectionHeader?.description && (
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {sectionHeader?.description}
            </p>
          )}
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {cards?.map((card) => (
            <article
              key={card._id}
              className="flex flex-col items-start bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="flex flex-col flex-1 p-10">
                <div className="flex-1">
                  <SectionTitle
                    variant="primary"
                    size="small"
                    as="h3"
                  >
                    {card.title}
                  </SectionTitle>
                  <p className="mt-3 text-[20px] leading-6 text-gray-600">
                    {card.description}
                  </p>
                </div>
              </div>
              <div className="relative w-full max-h-[320px] aspect-square">
                <Image
                  src={card.image.url || ''}
                  alt={card.image.alt || card.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardSection