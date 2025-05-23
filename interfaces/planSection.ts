import { CustomImage } from "./components/customImage"
import { ButtonProps as Button } from "./components/button"

export interface Class {
  _id: string
  title: string
  slug: {
    current: string
  }
  description: any[]
  featuredImage: CustomImage
  chartImage?: CustomImage
  timePeriod: string
  maxCapacity: number
  location: string
  instructor: string
  timeSlots: {
    _key: string
    dayOfWeek: string
    startTime: string
    endTime: string
    maxCapacity: number
    availableSeats: number
    isActive: boolean
    startDate: string
    endDate: string
    nextOccurrence?: string
  }[]
}

export interface PlansSectionData {
  _type: 'plansSection'
  title: string
  backgroundImage?: CustomImage
  classes: Class[]
}

export interface PlansSectionProps {
  _type: 'plansSection' | 'plansSectionRef'
  _key: string
  title?: string
  backgroundImage?: CustomImage
  classes?: Class[]
  plansSection?: PlansSectionData
}
  