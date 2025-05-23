import { ContactSectionProps } from '@/interfaces/contactSection'
import { FaEnvelope } from 'react-icons/fa'
import SectionTitle from '@/components/sectionTitle'

export default function ContactSection({ heading, email }: ContactSectionProps) {
  const [leftText] = heading.split('ANY QUESTIONS')

  return (
    <section className="py-4">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Heading */}
          <div className="max-w-xl">
            <SectionTitle
              variant="primary"
              size="large"
              as="h2"
            >
              {leftText}
            </SectionTitle>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start justify-start gap-4 md:ml-auto">
            <SectionTitle
              variant="primary"
              size="small"
              as="h3"
            >
              PLEASE CONTACT:
            </SectionTitle>
            <div>
              <a 
                href={`mailto:${email}`} 
                className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
              >
                <FaEnvelope className="w-6 h-6" />
                <span className="text-base md:text-xl font-semibold uppercase">{email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}