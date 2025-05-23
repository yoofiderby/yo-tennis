import { customImageFragment } from './partials'

export const getBookingDataQuery = `*[_type == "class" && count(subPackages[slug.current == $slug]) > 0][0]{
  _id,
  title,
  "subPackage": subPackages[slug.current == $slug][0]{
    _key,
    title,
    description,
    price,
    featuredImage
  },
  timeSlots[]{
    _key,
    dayOfWeek,
    startTime,
    endTime,
    availableSeats,
    maxCapacity,
    isActive,
    startDate,
    endDate
  }
}`

export const getClassQuery = `*[_type == "class" && slug.current == $slug][0]{
  title,
  chartTitle,
  chartImage ${customImageFragment},
  subPackages[]{
    _key,
    title,
    slug,
    description,
    featuredImage ${customImageFragment},
    price,
    stripePriceId,
    stripeProductId,
    isActive
  }
}` 