import { customImageFragment } from './partials/customImageFragment'

export const getAllCategoriesQuery = `*[_type == "category"] {
  _id,
  title,
  slug
}`

export const getAllClassesQuery = `*[_type == "class"] {
  _id,
  title,
  slug,
  description,
  "category": category->{
    _id,
    title,
    slug
  },
  "featuredImage": featuredImage${customImageFragment},
  "chartImage": chartImage${customImageFragment},
  timePeriod,
  maxCapacity,
  location,
  instructor,
  timeSlots[] {
    _key,
    dayOfWeek,
    startTime,
    endTime,
    maxCapacity,
    availableSeats,
    isActive,
    startDate,
    endDate,
    nextOccurrence
  }
}` 