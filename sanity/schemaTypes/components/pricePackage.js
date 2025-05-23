// sanity/schemaTypes/components/pricePackage.js
const pricePackage = {
 name: 'pricePackage',
 title: 'Price Package',
 type: 'document',
 fields: [
  {
   name: 'title',
   title: 'Title',
   type: 'string',
   description: 'Package name (e.g. Basic, Pro)',
   validation: (Rule) => Rule.required(),
  },
  {
   name: 'slug',
   title: 'Slug',
   type: 'slug',
   options: {
    source: 'title',
    maxLength: 96,
   },
  },
  {
   name: 'subtitle',
   title: 'Subtitle',
   type: 'string',
   description: 'Short description below the title',
  },
  {
   name: 'price',
   title: 'Price',
   type: 'string',
   description: 'Monthly price in dollars',
   validation: (Rule) => Rule.required(),
  },
  {
   name: 'featured',
   title: 'Featured Package',
   type: 'boolean',
   description: 'If enabled, this package will be highlighted',
   initialValue: false,
  },
  {
   name: 'perks',
   title: 'Perks',
   type: 'array',
   of: [
    {
     type: 'object',
     fields: [
      {
       name: 'text',
       title: 'Perk Text',
       type: 'string',
       validation: (Rule) => Rule.required(),
      },
      {
       name: 'highlighted',
       title: 'Highlighted',
       type: 'boolean',
       description: 'If enabled, this perk will be emphasized',
       initialValue: false,
      },
     ],
    },
   ],
   validation: (Rule) => Rule.required(),
  },
  {
   name: 'button',
   title: 'Button',
   type: 'button',
  },
 ],
 preview: {
  select: {
   title: 'title',
   subtitle: 'price',
  },
  prepare({ title, subtitle }) {
   return {
    title: title,
    subtitle: `$${subtitle}/month`,
   }
  },
 },
}

export default pricePackage
