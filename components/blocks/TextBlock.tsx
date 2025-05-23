import React from 'react'
import { PortableText } from 'next-sanity'
import { TextBlockProps } from '@/interfaces/components/textBlock'

const TextBlock = ({ content, components }: TextBlockProps) => {
 const blocks = content?.blocks
  ? content.blocks
  : Array.isArray(content)
    ? content
    : []

 if (blocks.length === 0) return null

 return (
  <div className="text-block text-left text-white">
   <PortableText
    value={blocks}
    components={components}
   />
  </div>
 )
}

export default TextBlock
