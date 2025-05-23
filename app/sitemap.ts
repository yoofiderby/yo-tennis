import { client } from '@/sanity/lib/client'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
 const baseUrl = 'https://localhost:3000'

 const staticPages = [
  { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
  //   { url: `${baseUrl}/about`, lastModified: new Date().toISOString() },
 ]

 //    CMS Dynamic Pages
 const query = `*[_type == "page"]{
    "slug": slug.current
    }`
 const cmsDynamicPagesData = await client.fetch(query)
 const cmsDynamicPages = cmsDynamicPagesData.map(
  ({ slug }: { slug: string }) => ({
   url: `${baseUrl}/${slug}`,
   lastModified: new Date().toISOString(),
  })
 )

 return [...staticPages, ...cmsDynamicPages]
}