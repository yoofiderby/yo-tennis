import { defineField, defineArrayMember } from 'sanity'
import { pageBuilder } from './pageBuilder'

const page = {
 name: 'page',
 title: 'Pages',
 type: 'document',
 fields: [
  defineField({
   name: 'pageName',
   title: 'Page name',
   type: 'string',
  }),
  defineField({
   name: 'slug',
   title: 'Slug',
   type: 'slug',
   options: {
    source: 'pageName',
    maxLength: 96,
   },
  }),
  pageBuilder,
  {
   name: 'metadata',
   title: 'SEO Metadata',
   type: 'metadata',
  },
 ],
}
export default page
