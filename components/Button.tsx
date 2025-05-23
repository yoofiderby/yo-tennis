import { ButtonProps } from '@/interfaces/components/button'
import Link from 'next/link'
import TennisIcon from './icons/TennisIcon'

function getURLFromPage(textAndLink: ButtonProps['textAndLink']): string {
 const { linkType } = textAndLink
 if (linkType === 'external') {
  return textAndLink.url || ''
 } else if (linkType === 'internal') {
  const { page } = textAndLink
  if (page && page.slug && page._type) {
   if (page._type === 'page') {
    return `/${page.slug}`
   } else {
    return ''
   }
  }
  
  // If URL is provided directly, use it
  return textAndLink.url || ''
 } else if (linkType === 'inline') {
  return textAndLink.jumpTo ? `#${textAndLink.jumpTo}` : ''
 } else if (linkType === 'global' && textAndLink.globalLink) {
  return textAndLink.globalLink.url || ''
 }
 return ''
}

interface ExtendedButtonProps extends ButtonProps {
  overrideUrl?: string
}

function Button({ textAndLink, overrideUrl }: ExtendedButtonProps) {
 if (!textAndLink) {
  return null
 }

 const url = overrideUrl || getURLFromPage(textAndLink)

 return (
  <Link
   href={url}
   target={
    textAndLink.linkType === 'external' || textAndLink.linkType === 'global'
     ? '_blank'
     : '_self'
   }
   rel={
    textAndLink.linkType === 'external' || textAndLink.linkType === 'global'
     ? 'noopener noreferrer'
     : undefined
   }
  >
   <button
    className="flex items-center justify-center gap-2 py-4 px-6 text-[20px] leading-5 rounded-full uppercase bg-primary text-white hover:bg-secondary/90 hover:text-black transition-colors"
   >
    {textAndLink && textAndLink.text && <span className="flex items-center">{textAndLink.text}</span>}
    <TennisIcon className="w-6 h-6 flex-shrink-0 bg-primary rounded-full" />
   </button>
  </Link>
 )
}

export default Button
