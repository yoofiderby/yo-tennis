'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Image from 'next/image'
import { TestimonialSectionProps, Testimonial as TestimonialType } from '@/interfaces/testimonials'
import QuoteIcon from '@/components/svgs/QuoteIcon'

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, index) => (
      <svg
        key={index}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={index < rating ? "#D7DE39" : "#E5E7EB"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ))}
  </div>
)

const TestimonialCard = ({  clientName, feedback, imageUrl }: TestimonialType) => (
  <div className="p-6 lg:p-12 bg-white border border-[#DDDEDF] shadow-lg rounded-2xl h-[220px] lg:h-[320px] overflow-hidden">
    <div className="flex justify-between items-start gap-4 lg:gap-6">
      {/* Left side: Profile and Content */}
      <div className="flex-1">
        {/* Profile Section */}
        <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
          <div className="relative w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden">
            <Image
              src={imageUrl?.url || '/placeholder-avatar.png'}
              alt={clientName || 'Client'}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg lg:text-xl text-gray-900 truncate">{clientName}</h3>
            <StarRating rating={5} />
          </div>
        </div>

        {/* Testimonial */}
        {feedback && (
          <p className="text-black text-base lg:text-[20px] leading-relaxed line-clamp-4">
            {feedback}
          </p>
        )}
      </div>

      {/* Right side: Quote Icon */}
      <div className="flex-shrink-0 scale-75 lg:scale-100 origin-top-right">
        <QuoteIcon />
      </div>
    </div>
  </div>
)

const Testimonial = ({ testimonials }: TestimonialSectionProps) => {
 // Split testimonials into two groups for two rows and duplicate them to ensure smooth scrolling
 const halfLength = Math.ceil(testimonials?.length / 2)
 const firstRowTestimonials = testimonials?.slice(0, halfLength)
 const secondRowTestimonials = testimonials?.slice(halfLength)
 
 // Duplicate second row testimonials to ensure there's enough for scrolling
 const duplicatedSecondRow = [...(secondRowTestimonials || []), ...(secondRowTestimonials || [])]

 const commonSwiperProps = {
   modules: [Autoplay],
   spaceBetween: 20,
   loop: true,
   slidesPerView: 3,
   autoplay: {
     delay: 0,
     disableOnInteraction: false,
     reverseDirection: false,
   },
   allowTouchMove: false,
 }

 return (
  <>
   {/* Mobile view */}
   <div className="lg:hidden mb-7">
    {testimonials && (
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
      {testimonials.map((testimonial, index) => (
        <SwiperSlide className="sm:ml-8 md:ml-0" key={index}>
          <TestimonialCard {...testimonial} />
        </SwiperSlide>
      ))}
     </Swiper>
    )}
   </div>

   {/* Desktop view - Two rows */}
   <div className="hidden lg:flex flex-col gap-6">
    {/* First Row - Normal Speed */}
    <div>
      {firstRowTestimonials && (
       <Swiper
        {...commonSwiperProps}
        speed={5000}
        className="testimonial-slider"
       >
        {firstRowTestimonials.map((testimonial, index) => (
          <SwiperSlide key={`first-${index}`}>
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
       </Swiper>
      )}
    </div>

    {/* Second Row - Slower Speed, Reverse Direction */}
    <div>
      {secondRowTestimonials && (
       <Swiper
        {...commonSwiperProps}
        speed={5500}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        className="testimonial-slider"
       >
        {duplicatedSecondRow.map((testimonial, index) => (
          <SwiperSlide key={`second-${index}`}>
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
       </Swiper>
      )}
    </div>
   </div>
  </>
 )
}

export default Testimonial
