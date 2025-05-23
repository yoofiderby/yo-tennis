import { TextBlock } from '../blocks'
import { TextBlockProps } from '@/interfaces/components/textBlock'

const TextBlockSection = ({ content, components }: TextBlockProps) => {
 return (
  <div className="container mx-auto px-5">
   <TextBlock
    content={content}
    components={components}
   />
  </div>
 )
}

export default TextBlockSection
