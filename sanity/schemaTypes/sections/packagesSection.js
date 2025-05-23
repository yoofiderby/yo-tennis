// sanity/schemaTypes/sections/packagesSection.js
const packagesSection = {
 name: 'packagesSection',
 title: 'Packages Section',
 type: 'object',
 fields: [
  {
   name: 'heading',
   title: 'Heading',
   type: 'string',
   description: 'Main heading for the packages section',
   validation: (Rule) => Rule.required(),
  },
  {
   name: 'subheading',
   title: 'Subheading',
   type: 'string',
   description: 'Descriptive text below the heading',
  },
  {
   name: 'packages',
   title: 'Packages',
   type: 'array',
   of: [
    {
     type: 'reference',
     to: [{ type: 'pricePackage' }],
    },
   ],
   validation: (Rule) => Rule.min(1).required(),
  },
 ],
 preview: {
  select: {
   title: 'heading',
  },
  prepare({ title }) {
   return {
    title: title || 'Packages Section',
    subtitle: 'Pricing packages display',
   }
  },
 },
}

export default packagesSection
