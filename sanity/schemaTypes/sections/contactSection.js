import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactSection',
  title: 'Contact Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name : 'email',
            title : 'Email',
            type : 'email',    
        }),
        defineField({
            name : 'phone',
            title : 'Phone',
            type : 'string',
        }),
        defineField({   
            name : 'address',
            title : 'Address',
            type : 'string',
        }),
    ]
})  