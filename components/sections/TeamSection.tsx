import Image from 'next/image'
import {  TeamSectionProps } from '@/interfaces/teamSection'
import SectionTitle from '@/components/sectionTitle'
import localFont from 'next/font/local'

const thunder = localFont({
  src: '../../public/fonts/Thunder-BoldLC.woff',
  variable: '--font-thunder',
})

export default function TeamSection({ backgroundHeading, teamMembers }: TeamSectionProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Text */}
      <div className={`absolute top-0 left-0 text-center mt-[50px] lg:-mt-[20px] z-0 w-full text-[140px] lg:text-[600px] font-bold text-[rgba(28,28,28,0.05)] pointer-events-none select-none leading-[100%] uppercase [font-feature-settings:'liga'_off,'clig'_off] ${thunder.className}`}>
        {backgroundHeading}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-4xl mx-auto relative z-10">
          <SectionTitle
            variant="primary"
            size="large"
            as="h2"
          >
            Have a love for people & Tennis? Shoot us an email why you&apos;re the next superstar cardio instructor!
          </SectionTitle>
          <SectionTitle
            variant="gradient"
            size="large"
            as="h2"
          >
           Info@yotennis@gmail.com
          </SectionTitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member._id} className="relative group overflow-hidden">
              {/* Image Container */}
              <div className="aspect-[3/4] relative overflow-hidden">
                {member.image?.url && (
                  <Image
                    src={member.image.url}
                    alt={member.image.alt || member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110 md:grayscale md:group-hover:grayscale-0"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </div>

              {/* Member Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="space-y-2">
                    <SectionTitle
                      variant="white"
                      size="small"
                      as="h3"
                    >
                      {member.name}
                    </SectionTitle>
                    <p className="text-lg text-white">{member.designation}</p>
                    
                    {/* Social Links */}
                    {member.socialLinks && member.socialLinks.length > 0 && (
                      <div className="flex gap-4 mt-4">
                        {member.socialLinks.map((social, index) => (
                          <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-primary transition-colors"
                          >
                            <span className="sr-only">{social.platform}</span>
                            {/* Add your social icons here */}
                            {social.platform === 'linkedin' && (
                              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                              </svg>
                            )}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
