import type { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { sectionRenderer } from '@/utils/sectionRenderer'
import { pageBuilderSections } from '@/queries/pageBuilderSections'
import { Sections } from '@/interfaces/sections'
import { DEFAULT_METADATA } from '@/constants/metadata'

export const metadata: Metadata = {
 ...DEFAULT_METADATA,
}
export const viewport = {
 width: 'device-width',
 initialScale: 1,
}

export default async function Home() {
 let pageBuilder = []

 const query = `*[_type == "page" && slug.current == "/"][0]{
     pageName,
     "slug": slug.current,
     pageBuilder[] {
         _type,
         ...,
         ${pageBuilderSections}
     }
 }`
 
 try {
   const data = await client.fetch(query, {}, { next: { revalidate: 60 } })
   if (data && data.pageBuilder) {
     pageBuilder = data.pageBuilder
   } else {
     console.warn('No page data found or pageBuilder is empty')
   }
 } catch (error) {
   console.error('Error fetching page data:', error)
 }

 return (
  <div>
   {pageBuilder &&
    !!pageBuilder.length &&
    pageBuilder.map((section: Sections) => sectionRenderer({ section }))}
  </div>
 )
}
