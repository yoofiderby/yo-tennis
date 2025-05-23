import { client } from '@/sanity/lib/client'
import { sectionRenderer } from '@/utils/sectionRenderer'
import { pageBuilderSections } from '@/queries/pageBuilderSections'
import { Sections } from '@/interfaces/sections'
import { getMetadata } from '@/utils/getMetadata'

type Props = {
 params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
 return await getMetadata('page', params.slug)
}

export default async function Page({ params: { slug } }: Props) {
 let pageBuilder = []

 const query = `*[_type == "page" && slug.current == "${slug}"][0]{
    pageName,
    "slug": slug.current,
    pageBuilder[] {
        ...,
        ${pageBuilderSections}
    }
}`

 const data = await client.fetch(query, {}, { next: { revalidate: 60 } })

 pageBuilder = data && data.pageBuilder

 return (
  <div>
   <div className=" min-h-[500px] w-full mt-[92px]">
    {pageBuilder &&
     !!pageBuilder.length &&
     pageBuilder.map((section: Sections) => sectionRenderer({ section }))}
   </div>
  </div>
 )
}
