'use client'

import PageHeader from '@/components/PageHeader'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function PageHeaderWrapper() {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // 768px is the 'md' breakpoint in Tailwind
    }

    // Initial check
    checkMobile()

    // Add event listener
    window.addEventListener('resize', checkMobile)

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  if (pathname === '/') return null
  
  // Convert path to breadcrumbs
  const pathSegments = pathname.split('/').filter(Boolean)
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/')
    return {
      label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      href,
    }
  })
  
  // Add Home as the first breadcrumb
  breadcrumbs.unshift({ label: 'Home', href: '/' })
  
  // Use the last segment as the title
  const title = pathSegments[pathSegments.length - 1]
    ?.charAt(0)
    .toUpperCase() + pathSegments[pathSegments.length - 1]?.slice(1).replace(/-/g, ' ') || ''
  
  return (
    <PageHeader 
      title={title} 
      breadcrumbs={breadcrumbs} 
      backgroundImage={isMobile ? "/page_header_bg_mob.png" : "/page_header_bg.png"}
    />
  )
} 