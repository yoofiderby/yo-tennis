import Image from 'next/image'
import { PlansSectionProps } from '@/interfaces/planSection'
import SectionTitle from '@/components/sectionTitle'
import ClassCard from '@/components/ClassCard'

const PlansSection = ({ plansSection }: PlansSectionProps) => {
  if (!plansSection) {
    console.log("No plans section data found")
    return null
  }

  if (!plansSection.classes || plansSection.classes.length === 0) {
    console.log("No classes found in plans section")
    return null
  }

  return (
    <section className="relative py-12 lg:py-20 bg-black">
      {/* Background Image */}
      {plansSection.backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={plansSection.backgroundImage.url || ''}
            alt={plansSection.backgroundImage.alt || ''}
            fill
            className="object-cover opacity-50"
            loading="eager"
            priority
          />
        </div>
      )}

      {/* Circles Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/circles_bg.png"
          alt="Background Pattern"
          fill
          className="object-cover opacity-10"
          loading="eager"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center lg:text-left mb-8 lg:mb-16">
          <SectionTitle
            variant="secondary"
            size="large"
            as="h2"
          >
            {plansSection.title}
          </SectionTitle>
        </div>

        {/* Classes Grid */}
        <div className="flex flex-col gap-8 lg:gap-5">
          {/* First Class */}
          {plansSection.classes[0] && (
            <ClassCard {...plansSection.classes[0]} isFullWidth={true} isClassDetail={false} />
          )}

          {/* Remaining Classes */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-5">
            {plansSection.classes.slice(1, 3).map((classItem) => (
              <ClassCard key={classItem._id} {...classItem} isClassDetail={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlansSection 