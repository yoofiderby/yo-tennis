import { Metadata } from 'next'
import { client } from '@/sanity/lib/client' // Import your Sanity client
import { DEFAULT_METADATA } from '@/constants/metadata' // Import default metadata
import { OGImage } from '@/interfaces/common'
import { urlFor } from '@/sanity/lib/image'

export async function getMetadata(
 _type: string,
 slug: string
): Promise<Metadata> {
 const query = `
    *[_type == $_type && slug.current == $slug][0] {
      "slug": slug.current,
      metadata
    }
  `

 const cmsDynamicPage = await client.fetch(query, { _type, slug })

 if (!cmsDynamicPage || !cmsDynamicPage.metadata) {
  console.warn(
   `⚠️ No metadata found for ${_type} with slug: ${slug}. Using default metadata.`
  )
  return DEFAULT_METADATA
 }

 const { metadata } = cmsDynamicPage

 // Handle OG image URL
 let ogImageUrl = ''
 if (metadata.ogImage) {
  const imageBuilder = urlFor(metadata.ogImage)
  if (imageBuilder) {
   ogImageUrl = imageBuilder.url() || ''
  }
 }

 const defaultOgImage =
  (DEFAULT_METADATA.openGraph?.images as OGImage[])[0]?.url || ''
 const defaultOgAlt =
  (DEFAULT_METADATA?.openGraph?.images as OGImage[])[0]?.alt || ''

 return {
  ...DEFAULT_METADATA, // Spread the default metadata first
  title: metadata.title || DEFAULT_METADATA.title,
  description: metadata.description || DEFAULT_METADATA.description,
  openGraph: {
   ...DEFAULT_METADATA.openGraph,
   title: metadata.title || DEFAULT_METADATA.openGraph?.title,
   description: metadata.description || DEFAULT_METADATA.openGraph?.description,
   url: `https://sabir.dev/${slug}`,
   images: [
    {
     url: ogImageUrl || defaultOgImage,
     width: 1200,
     height: 630,
     alt: metadata.title || defaultOgAlt,
    },
   ],
  },
  twitter: {
   ...DEFAULT_METADATA.twitter,
   title: metadata.title || DEFAULT_METADATA?.twitter?.title,
   description: metadata.description || DEFAULT_METADATA?.twitter?.description,
   images: [ogImageUrl || defaultOgImage || ''],
  },
 }
}
