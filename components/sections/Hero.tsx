/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import Button from '@/components/Button'
import { urlFor } from '@/sanity/lib/image'
import { HeroDataProps } from '@/interfaces/hero'
import SectionTitle from '@/components/sectionTitle'
// Import icons for mute/unmute
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa'

const Hero = ({
 backgroundVideo,
 backgroundImage,
 mainHeading,
 highlightedHeading,
 testimonialImages,
 testimonialText,
 button,
}: HeroDataProps) => {
 const headingRef = useRef(null)
 const testimonialRef = useRef(null)
 const videoRef = useRef<HTMLVideoElement>(null)
 const [isVideoLoaded, setIsVideoLoaded] = useState(false)
 const [isMuted, setIsMuted] = useState(true)
 const retryCountRef = useRef(0)
 const maxRetries = 3

 const toggleMute = () => {
   if (videoRef.current) {
     videoRef.current.muted = !videoRef.current.muted
     setIsMuted(videoRef.current.muted)
   }
 }

 const loadVideo = () => {
   if (!videoRef.current || !backgroundVideo?.url) return

   const video = videoRef.current
   
   // Reset video state
   video.load()
   video.muted = isMuted
   
   // Add event listeners
   const handleLoadedData = () => {
     setIsVideoLoaded(true)
     video.play().catch(error => {
       console.error('Error playing video:', error)
     })
   }

   const handleError = (error: any) => {
     console.error('Video loading error:', error)
     setIsVideoLoaded(false)
     
     // Retry logic
     if (retryCountRef.current < maxRetries) {
       retryCountRef.current += 1
       console.log(`Retrying video load (attempt ${retryCountRef.current}/${maxRetries})`)
       setTimeout(loadVideo, 1000 * retryCountRef.current) // Exponential backoff
     }
   }

   // Remove old listeners if they exist
   video.removeEventListener('loadeddata', handleLoadedData)
   video.removeEventListener('error', handleError)
   
   // Add new listeners
   video.addEventListener('loadeddata', handleLoadedData)
   video.addEventListener('error', handleError)
 }

 useEffect(() => {
  // Animate heading
  gsap.fromTo(
   headingRef.current,
   { y: 30, opacity: 0 },
   {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
   }
  )

  // Animate testimonials
  gsap.fromTo(
   testimonialRef.current,
   { scale: 0.9, opacity: 0 },
   {
    scale: 1,
    opacity: 1,
    duration: 0.8,
    delay: 0.5,
    ease: 'back.out',
   }
  )

  // Initialize video loading
  if (backgroundVideo?.url) {
    retryCountRef.current = 0
    loadVideo()
  }

  // Cleanup
  return () => {
    if (videoRef.current) {
      videoRef.current.removeEventListener('loadeddata', () => {})
      videoRef.current.removeEventListener('error', () => {})
    }
  }
 }, [backgroundVideo])

 return (
  <section className="relative min-h-[90vh] sm:min-h-screen w-full overflow-hidden">
   {/* Background Video/Image with Overlay */}
   <div className="absolute inset-0">
     {backgroundVideo?.url ? (
       <>
         {/* Fallback Image */}
         <Image
           src={urlFor(backgroundImage.asset).url()}
           alt={backgroundImage.alt || 'Tennis training background'}
           fill
           className={`object-cover brightness-50 transition-opacity duration-500 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}
           loading="eager"
           priority
         />
         {/* Video */}
         <video
           ref={videoRef}
           className={`absolute inset-0 w-full h-full object-cover brightness-50 transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
           autoPlay
           muted={isMuted}
           loop
           playsInline
           preload="auto"
           src={backgroundVideo.url}
         />
         {/* Mute/Unmute Button */}
         <button
           onClick={toggleMute}
           className="absolute bottom-4 right-4 z-10 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 border border-white/20"
           aria-label={isMuted ? "Unmute video" : "Mute video"}
         >
           {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
         </button>
       </>
     ) : backgroundImage && (
       <Image
         src={urlFor(backgroundImage.asset).url()}
         alt={backgroundImage.alt || 'Tennis training background'}
         fill
         className="object-cover brightness-50"
         loading="eager"
         priority
       />
     )}
   </div>

   {/* Content */}
   <div className="relative container mx-auto px-4 min-h-[90vh] sm:min-h-screen flex flex-col justify-center sm:justify-end pb-8 sm:pb-32 pt-20">
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between w-full gap-8 sm:gap-4">
      {/* Left side - Headings and CTA */}
      <div className="w-full sm:max-w-4xl" ref={headingRef}>
       <SectionTitle 
        variant="gradient"
        size="large"
        className="text-center sm:text-left"
       >
        {highlightedHeading}
       </SectionTitle>
       <SectionTitle 
        variant="white"
        size="default"
        className="text-center sm:text-left"
       >
        {mainHeading}
       </SectionTitle>
       {/* CTA Button */}
       {button && (
         <div className="mt-8 w-full flex justify-center sm:justify-start">
           <Button {...button} />
         </div>
       )}
      </div>

      {/* Testimonial Section */}
      {testimonialImages?.length > 0 && testimonialText && (
        <div
          ref={testimonialRef}
          className="flex flex-col items-center sm:items-start"
        >
          {/* Testimonial Images */}
          <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-full p-3 px-6 -space-x-4 mb-4">
            {testimonialImages.map((image, index) => (
              <div
                key={`testimonial-${image.asset._ref}-${index}`}
                className="w-12 h-12 sm:w-12 sm:h-12 rounded-full overflow-hidden relative"
                style={{ zIndex: testimonialImages.length - index }}
              >
                <Image
                  src={urlFor(image.asset).url()}
                  alt={image.alt || `Testimonial ${index + 1}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="48px"
                />
              </div>
            ))}
          </div>
          {/* Testimonial Text */}
          <p className="font-sans text-base sm:text-lg font-medium text-white mb-4 text-center sm:text-left max-w-xs">
            {testimonialText}
          </p>
        </div>
      )}
    </div>
   </div>
  </section>
 )
}

export default Hero
