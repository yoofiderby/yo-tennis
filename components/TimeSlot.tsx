import { TimeSlotProps } from '@/interfaces/components/TimeSlot'

export default function TimeSlot({
  slot,
  isSelected,
  onSelect,
  totalSessions,
  formattedStartTime,
  formattedEndTime,
  formattedStartDate,
  formattedEndDate
}: TimeSlotProps) {
  return (
    <div
      className={`p-3 border rounded-lg cursor-pointer transition-all ${
        isSelected
          ? 'border-green-500 bg-green-50'
          : 'border-gray-200 hover:border-green-300'
      }`}
      onClick={() => onSelect(slot._key)}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium text-gray-900">
            {formattedStartTime} - {formattedEndTime}
          </p>
          <p className="text-sm text-gray-500">
            {totalSessions} sessions • {formattedStartDate} to {formattedEndDate}
          </p>
        </div>
        <div className="text-sm text-gray-500">
          {slot.availableSeats} seats left
        </div>
      </div>
      <div className="mt-2">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{
              width: `${(slot.availableSeats / slot.maxCapacity) * 100}%`
            }}
          />
        </div>
      </div>
    </div>
  )
} 