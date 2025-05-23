import { TestimonialSectionProps } from '@/interfaces/testimonials'
import Testimonial from '@/components/Testimonial'
import Button from '@/components/Button'

const TestimonialSection = ({
 testimonials,
 button,
}: TestimonialSectionProps) => {

 return (
  <section className="relative  mx-auto mt-5  md:mt-0 py-6 md:py-8">
   {!!testimonials && <Testimonial testimonials={testimonials} />}

   {/* Button */}
   <div className="flex justify-center lg:mt-16 ">
    {button && <Button {...button} />}
   </div>
  </section>
 )
}
export default TestimonialSection
