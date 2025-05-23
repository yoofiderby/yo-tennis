import { footerFragment } from '@/queries/sections'
import { client } from '@/sanity/lib/client'
import { Bebas_Neue } from 'next/font/google'
import { FooterProps } from '@/interfaces/footer'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'
import { SocialIcon } from '@/interfaces/common'
const bebasNeue = Bebas_Neue({ 
  subsets: ['latin'], 
  weight: ['400'],
  variable: '--font-bebas-neue',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: true,
  preload: true
})

const Footer = async () => {
  const query = `${footerFragment}`
  const data = await client.fetch(query, {}, { next: { revalidate: 60 } })
  const {
    backgroundImage,
    heading,
    leftNavigationItems,
    rightNavigationItems,
    socialIcons,
    copyrightText,
    creditText,
  }: FooterProps = data

  return (
    <footer className="relative bg-[#D7DE39] overflow-hidden min-h-[400px]">
      {backgroundImage && (
        <div className="absolute top-0 inset-x-0 h-full">
          <Image
            src={urlFor(backgroundImage.asset).url()}
            alt={backgroundImage.alt || 'Footer background'}
            fill
            className="object-contain object-top scale-[0.4] sm:scale-[0.6] lg:scale-75 origin-top"
            priority
          />
        </div>
      )}
      
      <div className="container mx-auto px-4 py-6 relative z-10">
        {/* Logo/Heading Section */}
        <div className="w-full  text-center">
  <div className="flex justify-center items-center">
    <Link href="/" className={`text-black text-[100px] px-4 sm:text-[160px] lg:text-[520px] font-bold ${bebasNeue.className} block leading-none whitespace-nowrap`}>
      {heading || 'YO-TENNIS'}
    </Link>
  </div>
</div>
        {/* Navigation Section */}
        <div className="flex justify-between max-w-7xl text-[20px] sm:text-[32px] font-bold mx-auto mt-16 sm:mt-0 sm:-mt-20">
          {/* Left Navigation */}
          <div className="flex flex-col space-y-4">
            {leftNavigationItems?.map((item, index) => (
              <Link 
                href={`/${item.page?.slug || ''}`} 
                key={index}
                className={`text-black hover:text-black/80 uppercase ${bebasNeue.className}`}
              >
                {item.text}
              </Link>
            ))}
          </div>

          {/* Right Navigation */}
          <div className="flex flex-col space-y-4">
            {rightNavigationItems?.map((item, index) => (
              <Link 
                href={`/${item.page?.slug || ''}`} 
                key={index}
                className={`text-black hover:text-black/80 uppercase ${bebasNeue.className}`}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col w-full mt-24 mx-auto lg:max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
            {/* Social Icons */}
            <div className="flex space-x-6 self-start">
              {socialIcons?.map((item: SocialIcon, index) => (
                <Link
                  href={item.url || '#'}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-primary hover:border-black transition-colors"
                >
                  {item.icon?.iconUrl && (
                    <Image
                      src={urlFor(item.icon.iconUrl).url()}
                      alt={item.icon.alt || 'Social icon'}
                      width={24}
                      height={24}
                      className="hover:invert"
                      loading="lazy"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Copyright and Credit */}
            <div className="flex items-start uppercase justify-start sm:justify-start text-left">
              <div className="text-black font-bold text-sm mr-2">
                {copyrightText}
              </div>
              {creditText && (
                <div className="text-black font-bold text-sm">
                  {creditText}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer