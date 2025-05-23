import { defineField } from 'sanity'

const solutionSchema = {
 name: 'solution',
 title: 'Solution',
 type: 'document',
 fields: [
  defineField({
   name: 'solutionTitle',
   title: 'Solution Title',
   type: 'string',
  }),
  defineField({
   name: 'solutionDescription',
   title: 'Solution Description',
   type: 'text',
  }),
  defineField({
   name: 'icon',
   title: 'solution Icon',
   type: 'reference',
   to: [{ type: 'icon' }],
  }),
 ],
 preview: {
  select: {
   title: 'solutionTitle',
   media: 'solutionIcon',
  },
 },
}

export default solutionSchema
