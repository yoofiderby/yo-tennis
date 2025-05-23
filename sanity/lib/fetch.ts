import { draftMode } from 'next/headers'
import { client } from './client'

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags = [],
}: {
  query: string
  params?: { [key: string]: any }
  tags?: string[]
}): Promise<QueryResponse> {
  const isDraftMode = draftMode().isEnabled

  if (isDraftMode) {
    const token = process.env.SANITY_API_READ_TOKEN

    if (!token) {
      throw new Error('The `SANITY_API_READ_TOKEN` environment variable is required.')
    }

    const clientWithToken = client.withConfig({ token })
    return clientWithToken.fetch<QueryResponse>(query, params, { cache: 'no-store' })
  }

  return client.fetch<QueryResponse>(query, params, {
    cache: 'force-cache',
    next: { tags },
  })
} 