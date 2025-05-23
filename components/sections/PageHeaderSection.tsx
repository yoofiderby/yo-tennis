import { PageHeaderSectionProps } from '@/interfaces/pageHeaderSection'
import { Bebas_Neue } from 'next/font/google'
import Link from 'next/link'
// import BackgroundWrapper from '@/components/BackgroundWrapper'
import { FaCalendarAlt } from 'react-icons/fa'
import Button from '@/components/Button'

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' })

const PageHeaderSection = ({
 button,
 callToAction,
 mainHeading = '',
 description = '',
 highlightedText = [],
}: PageHeaderSectionProps) => {
 const { text, email, meetingText, meetingLink } = callToAction || {}

 return (
  <section className="-mt-92p">
   {/* <BackgroundWrapper> */}
    <div className="container md:mx-auto px-5 pt-28 md:pt-36 lg:pt-60 pb-5 xl:pb-16">
     <div className="text-left w-full">
      {/* Main Heading */}
      {mainHeading && (
       <h1
        className={`
                  ${bebasNeue.className} 
                  uppercase text-white font-bold 
                  text-[56px] md:text-8xl lg:text-135 xl:text-153 3xl:text-160 
                  leading-[92%] lg:leading-104.5 
                  mb-4 md:mb-9 lg:mb-8 2xl:mb-12
                `}
       >
        {mainHeading}
       </h1>
      )}
      {description && (
       <p className="font-sans md:w-[60%] text-[28px] font-normal text-white mb-4">
        {description}
       </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-4">
       <div className="md:col-span-4 space-y-4">
        {button && <Button {...button} />}

        {(text || email || (meetingText && meetingLink)) && (
         <div className="md:w-2/4 flex flex-col items-start">
          {text && (
           <p className="font-sans font-medium md:text-sm lg:text-base text-white">
            {text}
           </p>
          )}
          {email && (
           <h4 className="text-white font-sans hover:text-foundation-light-orange font-semibold text-xl md:text-lg xl:text-2xl mt-2">
            <Link
             href={`mailto:${email}`}
             rel="noopener noreferrer"
            >
             {email}
            </Link>
           </h4>
          )}
          {meetingText && meetingLink?.url && (
           <h4 className="font-sans text-foundation-light-orange hover:text-white font-semibold text-xl md:text-lg xl:text-2xl mt-2">
            <Link
             href={meetingLink.url}
             target="_blank"
             rel="noopener noreferrer"
            >
             <span className="flex items-center gap-2">
              {meetingText} <FaCalendarAlt />
             </span>
            </Link>
           </h4>
          )}
         </div>
        )}
       </div>

       {highlightedText?.length > 0 && (
        <div className="md:col-span-8">
         <div className="flex flex-wrap justify-center md:justify-start">
          {highlightedText
           .filter(({ text, color }) => text && color)
           .map(({ text, color }, i) => (
            <p
             key={i}
             style={{ color }}
             className="text-white font-normal lg:font-semibold font-sans text-base md:text-xs lg:text-base xl:text-lg 2xl:text-2xl leading-[125%  ] lg:leading-6 2xl:leading-6.5 mx-1"
            >
             {text}
            </p>
           ))}
         </div>
        </div>
       )}
      </div>
     </div>
    </div>
   {/* </BackgroundWrapper> */}
  </section>
 )
}

export default PageHeaderSection
