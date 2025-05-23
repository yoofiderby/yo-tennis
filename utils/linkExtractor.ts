import { ROUTES } from '@/constants/routes'
import { TextAndLink } from '@/interfaces/components/textAndLink'

export function getURLFromTextAndLink(textAndLink: TextAndLink): string {
  const { linkType } = textAndLink

  if (linkType === 'external') {
    return textAndLink.url || ''
  } else if (linkType === 'internal') {
    const { page } = textAndLink
    if (page && page.slug && page._type) {
      if (page._type === 'page') {
        return `/${page.slug}`
      } else if (page._type === ROUTES.SERVICE) {
        return `/${ROUTES.SERVICE}/${page.slug}`
      } else if (page._type === ROUTES.BLOG) {
        return `/${ROUTES.BLOG}/${page.slug}`
      } else if (page._type === ROUTES.PORTFOLIO) {
        return `/${ROUTES.PORTFOLIO}/${page.slug}`
      }
    }
    return ''
  } else if (linkType === 'inline') {
    return textAndLink.jumpTo ? `#${textAndLink.jumpTo}` : ''
  } else if (linkType === 'global' && textAndLink.globalLink) {
    return textAndLink.globalLink.url || ''
  }

  return ''
} 