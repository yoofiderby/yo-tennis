/**
 * Get day name from day number
 */
export function getDayName(dayNumber: string) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return days[parseInt(dayNumber)]
}

/**
 * Format time to 12-hour format in Pakistan time
 */
export function formatTime(time: string) {
  if (!time) return ''
  // Parse hours and minutes from the time string
  const [hours, minutes] = time.split(':').map(Number)
  const period = hours >= 12 ? 'PM' : 'AM'
  const displayHours = hours % 12 || 12
  return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`
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
 * Format date to long format (e.g., "January 1, 2024") in Pakistan time
 */
export function formatDate(date: string) {
  if (!date) return ''
  try {
    // Create date object with explicit Pakistan timezone (UTC+5)
    const [year, month, day] = date.split('-').map(Number)
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                   'July', 'August', 'September', 'October', 'November', 'December']
    return `${months[month - 1]} ${day}, ${year}`
  } catch (error) {
    console.error('Error formatting date:', error)
    return ''
  }
} 
