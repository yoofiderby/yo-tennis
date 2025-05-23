import { useState, FormEvent } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import TimeSlot from '@/components/TimeSlot'
import { TimeSlotData } from '@/interfaces/components/TimeSlot'
import { BookingFormData } from '@/interfaces/components/booking'
import { getDayName, formatTime, calculateTotalSessions, formatDate } from '@/utils/dateTime'

interface BookingFormProps {
  classId: string
  subPackageId: string
  subPackagePrice: number
  timeSlots: TimeSlotData[]
}

export default function BookingForm({ 
  classId, 
  subPackageId, 
  subPackagePrice,
  timeSlots 
}: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    timeSlotId: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  // Filter active time slots and sort by date and time
  const availableTimeSlots = timeSlots
    .filter(slot => slot.isActive && slot.availableSeats > 0)
    .sort((a, b) => {
      const dayCompare = parseInt(a.dayOfWeek) - parseInt(b.dayOfWeek)
      if (dayCompare === 0) {
        return a.startTime.localeCompare(b.startTime)
      }
      return dayCompare
    })

  // Group time slots by day of week
  const groupedTimeSlots = availableTimeSlots.reduce((acc, slot) => {
    if (!slot.dayOfWeek) {
      console.log('Slot missing dayOfWeek:', slot)
      return acc
    }
    const day = getDayName(slot.dayOfWeek)
    if (!acc[day]) {
      acc[day] = []
    }
    acc[day].push(slot)
    return acc
  }, {} as Record<string, TimeSlotData[]>)

  // Sort days in order
  const sortedDays = Object.keys(groupedTimeSlots).sort((a, b) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return days.indexOf(a) - days.indexOf(b)
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setSuccess(false)

    try {
      // Create Stripe checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clientName: formData.clientName,
          clientEmail: formData.clientEmail,
          clientPhone: formData.clientPhone,
          classId,
          subPackageId,
          timeSlotId: formData.timeSlotId,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session')
      }

      // Redirect to Stripe Checkout
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
      if (!stripe) {
        throw new Error('Failed to load Stripe')
      }

      const { error } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      })

      if (error) {
        throw new Error(error.message)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {error && (
        <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-md">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 p-4 text-green-700 bg-green-100 rounded-md">
          Booking created successfully! Redirecting...
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            required
            value={formData.clientName}
            onChange={(e) => setFormData(prev => ({ ...prev, clientName: e.target.value }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            required
            value={formData.clientEmail}
            onChange={(e) => setFormData(prev => ({ ...prev, clientEmail: e.target.value }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone
          </label>
          <input
            type="tel"
            required
            value={formData.clientPhone}
            onChange={(e) => setFormData(prev => ({ ...prev, clientPhone: e.target.value }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Available Time Slots
          </label>
          <div className="space-y-4">
            {sortedDays.map(day => (
              <div key={day} className="border rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3">{day}</h4>
                <div className="grid grid-cols-1 gap-3">
                  {groupedTimeSlots[day].map(slot => {
                    const totalSessions = calculateTotalSessions(slot.dayOfWeek, slot.startDate, slot.endDate)
                    return (
                      <TimeSlot
                        key={slot._key}
                        slot={slot}
                        isSelected={formData.timeSlotId === slot._key}
                        onSelect={(key) => setFormData(prev => ({ ...prev, timeSlotId: key }))}
                        totalSessions={totalSessions}
                        formattedStartTime={formatTime(slot.startTime)}
                        formattedEndTime={formatTime(slot.endTime)}
                        formattedStartDate={formatDate(slot.startDate)}
                        formattedEndDate={formatDate(slot.endDate)}
                      />
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
          {availableTimeSlots.length === 0 && (
            <p className="text-sm text-gray-500 mt-2">No available time slots found</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Processing...' : `Book Now - $${subPackagePrice}`}
        </button>
      </form>
    </div>
  )
} 