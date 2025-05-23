import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'
import { getURLFromTextAndLink } from '@/utils/linkExtractor'
import { FlyoutCardProps } from '@/interfaces/components/flyoutMenu'

const FlyoutCard = ({ icon, heading, description, link }: FlyoutCardProps) => {
  const url = getURLFromTextAndLink(link)
  const target = link.linkType === 'external' || link.linkType === 'global' ? '_blank' : '_self'
  const rel = link.linkType === 'external' || link.linkType === 'global' ? 'noopener noreferrer' : undefined

  return (
    <Link
      href={url}
      target={target}
      rel={rel}
      className="flex items-start rounded-lg p-8 border border-white/10 hover:bg-foundation-light-orange/10 transition-colors"
    >
      <div className="ml-5">
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center mb-4 rounded-lg bg-foundation-light-orange/10">
          {icon?.iconUrl && (
            <Image
              src={urlFor(icon.iconUrl).url()}
              alt={icon.alt || ''}
              width={28}
              height={28}
              className="h-16 w-16"
              loading="lazy"
            />
          )}
        </div>
        <p className="text-lg font-bold text-foundation-light-orange">{heading}</p>
        <p className="mt-2 text-base text-white">{description}</p>
      </div>
    </Link>
  )
}

export default FlyoutCard 