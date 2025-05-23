'use client'

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `/app/studio/[[...tool]]/page.jsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import { bookingsCalendarTool } from './sanity/tools/bookingsCalendar.jsx'
import ClassBookings from './sanity/components/ClassBookings'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import schemaTypes from './sanity/schema'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Register custom tools in the navbar
  tools: [
    bookingsCalendarTool,
  ],
  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
    types: schemaTypes,
    templates: (prev) => [...prev],
  },
  plugins: [
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({
      defaultApiVersion: apiVersion,
    }),
    vercelDeployTool(),
  ],
  components: {
    input: {
      ClassBookings,
    },
  },
})
