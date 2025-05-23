/* eslint-disable @typescript-eslint/no-unused-vars */
import { HeaderProps } from '@/interfaces/header'
import { headerFragment } from '@/queries/sections'
import { client } from '@/sanity/lib/client'
import Navbar from '@/components/Navbar'

const Header = async () => {
 const query = `${headerFragment}`
 const data = await client.fetch(query, {}, { next: { revalidate: 60 } })
 const {
  logo,
  navigationItems,
  socialIcons,
  button,
  hamburgerMenuIcon,    
  homePageLogo,
 }: HeaderProps = data
 return (
  <Navbar
   logo={logo}
   homePageLogo={homePageLogo}
   navigationItems={navigationItems}
   socialIcons={socialIcons}
   button={button}
   hamburgerMenuIcon={hamburgerMenuIcon}
  />
 )
}

export default Header
