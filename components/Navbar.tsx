'use client'

import { HeaderProps } from '@/interfaces/header'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import { HiX } from 'react-icons/hi' // Icons for hamburger menu
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Button from '@/components/Button'
import FlyoutCard from '@/components/FlyoutCard'
import FlyoutCTA from '@/components/FlyoutCTA'
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { getURLFromTextAndLink } from '@/utils/linkExtractor'
import { SocialIcon } from '@/interfaces/common'

const Navbar = ({
 navigationItems = [],
 logo,
 homePageLogo,
 socialIcons = [],
 hamburgerMenuIcon,
 button,
}: HeaderProps) => {
 const pathname = usePathname()
 const isHomePage = pathname === '/'
 // Get the appropriate logo based on the current page
 const currentLogo = isHomePage && homePageLogo ? homePageLogo : logo
 const { url, alt = '' } = currentLogo || {}
 const { url: hamburgerIconUrl, alt: hamburgerAlt = '' } = hamburgerMenuIcon || {}
 const [menuOpen, setMenuOpen] = useState(false)
 const [flyoutOpen, setFlyoutOpen] = useState(false)

 const toggleMenu = () => setMenuOpen((prev) => !prev)

 useEffect(() => {
  if (!menuOpen) {
   setFlyoutOpen(false)
  }
 }, [menuOpen])

 const headerBackground = (flyoutOpen || menuOpen) ? 'bg-black' : 'bg-transparent'

 return (
  <header className={`w-full absolute top-0 left-0 py-7 lg:py-5 z-10 transition-all duration-500 ease-in-out ${headerBackground}`}>
   <div className="container px-5 mx-auto flex justify-between items-center">
    {/* Logo For Desktop */}
    {url && (
     <Link href="/">
      <Image
       src={urlFor(url).url()}
       alt={alt}
       height={130}
       width={192}
       className="w-[130px] lg:w-48"
       loading="lazy"   
      />
     </Link>
    )}

    {/* Hamburger Menu Icon for Small screens */}
    <div className="lg:hidden relative">
     <button
      onClick={toggleMenu}
      className={`focus:outline-none transform transition-transform duration-300 ${
       menuOpen ? 'rotate-90' : 'rotate-0'
      } z-50`}
     >
       {isHomePage ? (
         hamburgerIconUrl ? (
           <Image
            src={urlFor(hamburgerIconUrl).url()}
            alt={hamburgerAlt}
            height={24} 
            width={24}
            className="h-6 w-6"
            loading="lazy"
           />
         ) : (
           <span className="text-white">☰</span>
         )
       ) : (
        <span className="text-primary">☰</span>
       )}
     </button>
    </div>

    {/* Desktop Menu */}
    {!!navigationItems && (
     <PopoverGroup className="hidden lg:flex items-center  gap-6">
      {navigationItems.map((item, i) => {
       const { text } = item.link || {}
       const linkPath = item.link?.page?.slug ? `/${item.link.page.slug}` : ''
       const isActive = pathname === linkPath || pathname === `${linkPath}/`

       return item.hasFlyoutMenu ? (
        <Popover key={i} className="relative">
         {({ open }) => {
          setFlyoutOpen(open)
          return (
           <>
            <PopoverButton 
             className={`flex items-center gap-2 text-lg font-medium  ${
              isActive ? 'text-foundation-light-orange' : isHomePage ? 'text-white' : 'text-black'
             } hover:text-foundation-light-orange`}
            >
             {text}
             <ChevronDownIcon className="h-5 w-5" />
            </PopoverButton>

            <PopoverPanel 
             className="fixed left-0 right-0 z-10 mt-2 w-screen transform px-4 sm:px-0"
            >
             <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="relative bg-black w-full">
               <div className="max-w-[2000px] mx-auto px-8 py-8">
                <div className={`grid gap-8 ${
                  (item.flyoutMenu?.cards.length || 0) > 2 
                    ? 'lg:grid-cols-4' 
                    : 'lg:grid-cols-2'
                }`}>
                 {item.flyoutMenu?.cards.map((card, index) => (
                  <FlyoutCard
                   key={index}
                   icon={card.icon}
                   heading={card.heading}
                   description={card.description}
                   link={card.link}
                  />
                 ))}
                </div>
               </div>
              </div>
              {item.flyoutMenu?.ctaButtons && (
               <div className="bg-black w-full">
                <div className="max-w-[2000px] mx-auto px-8 py-6">
                 <div className={`gap-4 grid ${
                  (item.flyoutMenu?.ctaButtons.length || 0) > 3 
                    ? 'grid-cols-4' 
                    : 'grid-cols-3'
                 }`}>
                  {item.flyoutMenu.ctaButtons.map((cta, index) => (
                   <FlyoutCTA
                    key={index}
                    icon={cta.icon}
                    text={cta.text}
                    link={cta.link}
                   />
                  ))}
                 </div>
                </div>
               </div>
              )}
             </div>
            </PopoverPanel>
           </>
          )
         }}
        </Popover>
       ) : (
        <li
         key={i}
         className={`relative text-[20px] font-medium  list-none ${
          isActive ? 'text-primary underline' : isHomePage ? 'text-white' : 'text-black'
         } hover:text-secondary`}
        >
         {text && (
          <Link
           href={getURLFromTextAndLink(item.link)}
           target={item.link.linkType === 'external' || item.link.linkType === 'global' ? '_blank' : '_self'}
           rel={item.link.linkType === 'external' || item.link.linkType === 'global' ? 'noopener noreferrer' : undefined}
           className="transition-colors text-xl"
          >
           {text}
          </Link>
         )}
        </li>
       )
      })}
     </PopoverGroup>
    )}

    {/* Button - Only visible on desktop */}
    {!!button && <div className="hidden lg:block"><Button {...button} /></div>}

    {/* Desktop Socials and button */}
    {!!socialIcons && (
     <div className="hidden lg:flex gap-5 items-center">
      {socialIcons.map((social: SocialIcon, index) => {
        const { iconUrl, alt = '' } = social?.icon || {}
       const { url = '' } = social
        
       return (
        <Link
         key={index}
         href={url}
         target="_blank"
         className="text-gray-50"
        >
         {iconUrl && (
          <Image
           src={urlFor(iconUrl).url()}
           alt={alt}
           height={24}
           width={24}
           loading="lazy"
          />
         )}
        </Link>
       )
      })}
     </div>
    )}
   </div>

   {/* Mobile Menu */}
   <div
    className={`fixed top-0 left-0 w-full h-full bg-white z-30 px-6 transition-transform transform duration-500 ${
     menuOpen ? 'translate-x-0' : '-translate-x-full'
    }`}
   >
    <div className="flex justify-end py-7 lg:py-5 items-center relative container mx-auto">
     <button
      onClick={toggleMenu}
      className="text-white text-2xl bg-primary rounded-full p-2 flex items-center justify-center"
     >
      <HiX size={24} />
     </button>
    </div>

    {/* Mobile Navigation Options */}
    {!!navigationItems && (
     <div className="flex flex-col items-start gap-9 mt-9 relative">
      {navigationItems.map((item, i) => {
       const { text } = item.link || {}
       return item.hasFlyoutMenu ? (
        <Disclosure key={i}>
         {({ open }) => (
          <>
           <DisclosureButton className="text-2xl leading-8.5  font-medium text-black py-3 flex items-center gap-2">
            {text}
            <ChevronDownIcon className={`h-5 w-5 transform ${open ? 'rotate-180' : ''}`} />
           </DisclosureButton>
           <DisclosurePanel className="">
            <div className="grid grid-cols-2 gap-4">
             {item.flyoutMenu?.cards.map((card, index) => (
              <Link
               key={index}
               href={getURLFromTextAndLink(card.link)}
               target={card.link.linkType === 'external' || card.link.linkType === 'global' ? '_blank' : '_self'}
               rel={card.link.linkType === 'external' || card.link.linkType === 'global' ? 'noopener noreferrer' : undefined}
               onClick={toggleMenu}
               className="text-black text-base flex items-center gap-2"
              >
               <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                {card.icon?.iconUrl && (
                 <Image
                  src={urlFor(card.icon.iconUrl).url()}
                  alt={card.icon.alt || ''}
                  width={20}
                  height={20}
                  loading="lazy"
                  className="h-5 w-5"
                 />
                )}
               </div>
               <div className="truncate">
                {card.heading}
               </div>
              </Link>
             ))}
             </div>
             <div className="col-span-2 border-b border-black/10 my-4"></div>
             <div className="col-span-2 grid grid-cols-3 gap-4">
              {item.flyoutMenu?.ctaButtons.map((cta, index) => (
               <Link
                key={index}
                href={getURLFromTextAndLink(cta.link)}
                target={cta.link.linkType === 'external' || cta.link.linkType === 'global' ? '_blank' : '_self'}
                rel={cta.link.linkType === 'external' || cta.link.linkType === 'global' ? 'noopener noreferrer' : undefined}
                onClick={toggleMenu}
                className="text-black text-base flex items-center justify-center"
               >
                <div className="w-full truncate text-xs bg-primary/10 rounded-lg p-2 text-center">
                 {cta.text}
                </div>
               </Link>
              ))}
             </div>
           </DisclosurePanel>
          </>
         )}
        </Disclosure>
       ) : (
        <div key={i} className="text-black">
         {text && (
          <Link
           onClick={toggleMenu}
           href={getURLFromTextAndLink(item.link)}
           target={item.link.linkType === 'external' || item.link.linkType === 'global' ? '_blank' : '_self'}
           rel={item.link.linkType === 'external' || item.link.linkType === 'global' ? 'noopener noreferrer' : undefined}
           className="text-lg leading-8.5  font-medium py-3"
          >
           {text}
          </Link>
          
         )}
        </div>
       )
      })}
      {/* Small devices socials */}
      {!!socialIcons && (
       <div className="flex gap-3">
        {socialIcons.map((social, index) => {
         const { iconUrl, alt = '' } = social?.icon || {}
         const { url = '' } = social

         return (
          <Link
          key={index}
          href={url}
          target="_blank"
          className="text-black text-lg"
         >
          {iconUrl && (
              <Image
              src={urlFor(iconUrl).url()}
              alt={alt}
              height={24}
              width={24}
              loading="lazy"
             />
             )}
          </Link>
         )
        })}
       </div>
      )}
     </div>
    )}
   </div>
  </header>
 )
}

export default Navbar
