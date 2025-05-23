export interface TimeSlotData {
  _key: string
  dayOfWeek: string
  startTime: string
  endTime: string
  availableSeats: number
  maxCapacity: number
  isActive: boolean
  startDate: string
  endDate: string
}

export interface TimeSlotProps {
  slot: TimeSlotData
  isSelected: boolean
  onSelect: (key: string) => void
  totalSessions: number
  formattedStartTime: string
  formattedEndTime: string
  formattedStartDate: string
  formattedEndDate: string
} 