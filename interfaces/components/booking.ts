import { CustomImage } from './customImage'
import { TextBlockProps } from './textBlock'
import { TimeSlotData } from './TimeSlot'

export interface SubPackage {
  title: string
  description: TextBlockProps
  price: number
  featuredImage: CustomImage
  _key: string
}

export interface BookingData {
  _id: string
  title: string
  subPackage: SubPackage
  timeSlots: TimeSlotData[]
}

export interface BookingFormData {
  clientName: string
  clientEmail: string
  clientPhone: string
  timeSlotId: string
} 