import Link from 'next/link'
import Image from 'next/image'
import SectionTitle from '@/components/sectionTitle'
import { HomeIcon } from '@heroicons/react/24/solid'
import { PageHeaderProps } from '@/interfaces/components/pageHeader'

export default function PageHeader({ 
  title, 
  breadcrumbs,
  backgroundImage = "/page_header_bg.png"
}: PageHeaderProps) {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative mt-44 bg-[#1C1C1C] w-[90vw] lg:w-3xl min-h-[300px] text-white rounded-2xl overflow-hidden flex items-center justify-center">
        {/* Background Image with Overlay */}
        <Image
          src={backgroundImage}
          alt="Page header background"
          fill
          className="object-cover opacity-50"
          loading="lazy"
        />
        
        <div className="container relative z-2 mx-auto px-4 py-12 flex flex-col items-center">
          <SectionTitle
            as="h1"
            size="large"
            variant="secondary"
            className="text-center mb-4"
          >
            {title}
          </SectionTitle>
          
          <div className="flex items-center justify-center gap-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.href} className="flex items-center">
                {index > 0 && <span className="mx-2">›</span>}
                <Link 
                  href={crumb.href}
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  {index === 0 && <HomeIcon className="w-4 h-4 text-primary" />}
                  {crumb.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 