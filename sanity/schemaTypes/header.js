import { defineField, defineType } from 'sanity'

const header = defineType({
 name: 'header',
 title: 'Header',
 type: 'document',
 fields: [
  defineField({
   name: 'headerName',
   title: 'Header Name',
   type: 'string',
  }),

  defineField({
   name: 'customImage',
   type: 'customImage',
   title: 'Logo',
   description: 'This logo will be shown on all pages except the home page',
  }),
  defineField({
   name: 'homePageLogo',
   type: 'customImage',
   title: 'Home Page Logo',
   description: 'This logo will be shown only on the home page',
  }),
  defineField({
   name: 'hamburgerMenuIcon',
   title: 'Hamburger Menu Icon',
   type: 'image',
  }),
  defineField({
   name: 'navigationItems',
   type: 'array',
   title: 'Navigation Items',
   of: [{ type: 'flyoutLink' }],
  }),
  defineField({
   name: 'socialIcons',
   type: 'array',
   title: 'Social Icons',
   of: [{ type: 'socialIcon' }],
  }),
  defineField({
   name: 'button',
   type: 'button',
   title: 'Button',
  }),
 ],
})

export default header
