import { client } from '@/sanity/lib/client'
import { getAllClassesQuery, getAllCategoriesQuery } from '@/queries/classesQueries'
import SectionTitle from '@/components/sectionTitle'
import ClassesWithCategories from '@/components/ClassesWithCategories'

interface AllClassesSectionProps {
  title: string
  subtitle?: string
}

async function getClasses() {
  return client.fetch(getAllClassesQuery)
}

async function getCategories() {
  return client.fetch(getAllCategoriesQuery)
}

export default async function AllClassesSection({ title, subtitle }: AllClassesSectionProps) {
  const [classes, categories] = await Promise.all([
    getClasses(),
    getCategories()
  ])

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle variant="primary" size="default">
          {title}
        </SectionTitle>
        {subtitle && (
          <p className="text-center text-lg mt-4 mb-8 text-gray-600">
            {subtitle}
          </p>
        )}

        <ClassesWithCategories 
          initialClasses={classes} 
          initialCategories={categories}
        />
      </div>
    </section>
  )
} 