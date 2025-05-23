import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, token } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: token,
  // Add token validation
  ...(token ? {} : {
    onError: (err) => {
      console.error('Sanity Client Error:', err)
      if (err.message.includes('permission')) {
        console.error('Token missing or insufficient permissions')
      }
    }
  })
})