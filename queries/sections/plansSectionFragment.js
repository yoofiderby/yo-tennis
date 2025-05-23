import { customImageFragment } from '../partials/customImageFragment'

export const plansSectionFragment = `
  _type == "plansSection" => {
    _type,
    _key,
    title,
    "backgroundImage": backgroundImage${customImageFragment},
    "classes": classes[]->{
      _id,
      title,
      slug,
      description,
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
    }
  },
  _type == "plansSectionRef" => {
    _type,
    _key,
    "plansSection": plansSection-> {
      _type,
      _id,
      title,
      "backgroundImage": backgroundImage${customImageFragment},
      "classes": classes[]-> {
        _id,
        _type,
        title,
        slug,
        description,
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
      }
    }
  }
` 