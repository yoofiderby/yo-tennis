import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'
import { getURLFromTextAndLink } from '@/utils/linkExtractor'
import { FlyoutCTAProps } from '@/interfaces/components/flyoutMenu'

const FlyoutCTA = ({ icon, text, link }: FlyoutCTAProps) => {
  const url = getURLFromTextAndLink(link)
  const target = link.linkType === 'external' || link.linkType === 'global' ? '_blank' : '_self'
  const rel = link.linkType === 'external' || link.linkType === 'global' ? 'noopener noreferrer' : undefined

  return (
    <Link
      href={url}
      target={target}
      rel={rel}
      className="flow-root rounded-md px-4 py-3 border border-white/10 hover:bg-foundation-light-orange/10 transition-colors focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
    >
      <span className="flex items-center">
        {icon?.iconUrl && (
          <Image
            src={urlFor(icon.iconUrl).url()}
            alt={icon.alt || ''}
            width={28}
            height={28}
            className="h-7 w-7 flex-shrink-0"
          />
        )}
        <span className="ml-4 text-base font-medium text-white">{text}</span>
      </span>
    </Link>
  )
}

export default FlyoutCTA 