import { ImageIcon } from '@sanity/icons'

export const blockContent = {
 title: 'Block Content',
 name: 'blockContent',
 type: 'object', // Change to 'document' type
 fields: [
  {
   name: 'blocks', // A field to hold the blocks (can be an array)
   type: 'array',
   title: 'Blocks',
   of: [
    {
     title: 'Block',
     type: 'block',
     // Styles let you set what your user can mark up blocks with. These
     // correspond with HTML tags, but you can set any title or value
     // you want and decide how you want to deal with it where you want to
     // use your content.
     styles: [
      { title: 'Normal', value: 'normal' },
      { title: 'H1', value: 'h1' },
      { title: 'H2', value: 'h2' },
      { title: 'H3', value: 'h3' },
      { title: 'H4', value: 'h4' },
      { title: 'Quote', value: 'blockquote' },
     ],
     lists: [{ title: 'Bullet', value: 'bullet' }],
     // Marks let you mark up inline text in the block editor.
     marks: {
      // Decorators usually describe a single property – e.g. a typographic
      // preference or highlighting by editors.
      decorators: [
       { title: 'Strong', value: 'strong' },
       { title: 'Emphasis', value: 'em' },
      ],
      // Annotations can be any object structure – e.g. a link or a footnote.
      annotations: [
       {
        title: 'URL',
        name: 'link',
        type: 'object',
        fields: [
         {
          title: 'URL',
          name: 'href',
          type: 'url',
         },
        ],
       },
      ],
     },
    },
    {
     type: 'image',
     icon: ImageIcon,
     options: { hotspot: true },
     fields: [
      {
       name: 'alt',
       type: 'string',
       title: 'Alternative Text',
      },
     ],
    },
   ],
  },
 ],
}
