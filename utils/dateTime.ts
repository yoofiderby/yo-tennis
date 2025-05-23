/**
 * Get day name from day number
 */
export function getDayName(dayNumber: string) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return days[parseInt(dayNumber)]
}

/**
 * Format time to 12-hour format
 */
export function formatTime(time: string) {
  if (!time) return ''
  return new Date(`2000-01-01T${time}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

/**
 * Calculate total sessions between dates for a specific day of week
 */
export function calculateTotalSessions(dayOfWeek: string, startDate: string, endDate: string) {
  if (!dayOfWeek || !startDate || !endDate) return 0

  try {
    const start = new Date(startDate)
    const end = new Date(endDate)
    const day = parseInt(dayOfWeek)
    
    if (isNaN(start.getTime()) || isNaN(end.getTime())) return 0
    
    let count = 0
    const current = new Date(start)
    
    while (current <= end) {
      if (current.getDay() === day) {
        count++
      }
      current.setDate(current.getDate() + 1)
    }
    
    return count
  } catch (error) {
    console.error('Error calculating total sessions:', error)
    return 0
  }
}

/**
 * Format date to long format (e.g., "January 1, 2024")
 */
export function formatDate(date: string) {
  if (!date) return ''
  try {
    const dateObj = new Date(date)
    if (isNaN(dateObj.getTime())) return ''
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch (error) {
    console.error('Error formatting date:', error)
    return ''
  }
} 