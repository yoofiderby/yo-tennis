import { client } from '@/sanity/lib/client'
import { getAllClassesQuery, getAllCategoriesQuery } from '@/queries/classesQueries'
import SectionTitle from '@/components/sectionTitle'
import ClassesWithCategories from '@/components/ClassesWithCategories'

async function getClasses() {
  return client.fetch(getAllClassesQuery)
}

async function getCategories() {
  return client.fetch(getAllCategoriesQuery)
}

export default async function ClassesPage() {
  const [classes, categories] = await Promise.all([
    getClasses(),
    getCategories()
  ])

  return (
    <main className="min-h-screen mt-32">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle variant="primary" size="default">
            Tennis Training Programs & Classes
          </SectionTitle>

          <ClassesWithCategories 
            initialClasses={classes} 
            initialCategories={categories}
          />
        </div>
      </section>
    </main>
  )
} 