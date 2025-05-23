import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'subPackage',
  title: 'Sub Packages',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc, { parent }) => {
          // Get the parent class title and current subPackage title
          const classTitle = parent?.title
          const subPackageTitle = doc.title
          
          // If we have both titles, generate the slug
          if (classTitle && subPackageTitle) {
            return `${classTitle}-${subPackageTitle}`
          }
          
          // Otherwise, just use the subPackage title
          return subPackageTitle
        },
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'stripePriceId',
      title: 'Stripe Price ID',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'stripeProductId',
      title: 'Stripe Product ID',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      price: 'price',
    },
    prepare({ title, price }) {
      return {
        title,
        subtitle: `$${price}`,
      }
    },
  },
}) 