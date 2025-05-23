'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Image from 'next/image'
import { VideoTestimonialSectionProps, VideoTestimonial as VideoTestimonialType } from '@/interfaces/videoTestimonials'
import { useState } from 'react'
import VideoModal from './modals/VideoModal'
import SectionTitle from './sectionTitle'

const PlayIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <circle cx="24" cy="24" r="24" fill="white" fillOpacity="0.9"/>
    <path d="M32 24L20 31.4641L20 16.5359L32 24Z" fill="#FFA500"/>
  </svg>
)

const VideoTestimonialCard = ({ thumbnailImage, video }: VideoTestimonialType) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleVideoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsModalOpen(true)
  }

  return (
    <>
      <div className="h-full w-full">
        <div className="flex flex-col">
          {/* Video Thumbnail */}
          <div className="relative w-full pt-[177.77%] overflow-hidden">
            <button 
              onClick={handleVideoClick}
              className="absolute inset-0 w-full h-full focus:outline-none group cursor-pointer"
            >
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={thumbnailImage?.url || '/placeholder-video.png'}
                  alt="Video Testimonial"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
              <PlayIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={video.asset.url}
      />
    </>
  )
}

const VideoTestimonial = ({ variant, heading, backgroundImage, videoTestimonials }: VideoTestimonialSectionProps) => {
  const sectionClasses = variant === 'withHeadingAndBackground' 
    ? 'relative py-24 bg-black'
    : 'py-12'

  return (
    <section className={sectionClasses}>
      {/* Background Image for withHeadingAndBackground variant */}
      {variant === 'withHeadingAndBackground' && backgroundImage?.url && (
        <div className="absolute inset-0 w-full h-full opacity-40">
          <Image
            src={backgroundImage.url}
            alt="Background"
            fill
            className="object-cover"
            loading="eager"
            priority
          />
        </div>
      )}

      <div className="relative">
        {/* Header for both variants */}
        <div className="container mx-auto text-center mb-16">
          <SectionTitle 
            variant={variant === 'withHeadingAndBackground' ? 'white' : 'primary'} 
            size="large"
            className="mb-4"
          >
            {heading}
          </SectionTitle>
        </div>

        {/* Slider for small devices */}
        <div className="lg:hidden">
          {videoTestimonials && (
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={'auto'}
              centeredSlides={false}
              loop={true}
              speed={3000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1.15,
                },
                640: {
                  slidesPerView: 1.57,
                },
              }}
              className="lg:hidden"
            >
              {videoTestimonials.map((testimonial, index) => (
                <SwiperSlide className="!w-[350px]" key={`mobile-${testimonial._id}-${index}`}>
                  <VideoTestimonialCard {...testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        {/* Grid for medium and large devices */}
        <div className="hidden lg:block">
          {videoTestimonials && (
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={4}
              loop={true}
              speed={8000}
              allowTouchMove={false}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              className="testimonial-slider max-h-[608px]"
            >
              {videoTestimonials.map((testimonial, index) => (
                <SwiperSlide className="!w-[25%]" key={`desktop-${testimonial._id}-${index}`}>
                  <VideoTestimonialCard {...testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  )
}

export default VideoTestimonial 