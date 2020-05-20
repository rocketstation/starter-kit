import { format } from 'date-fns'

export const months = Array(12)
  .fill(0)
  .map((v, i) => {
    return format(new Date(0, v + i), 'MMM')
  })

export const daysOfWeek = Array(7)
  .fill(1)
  .map((v, i) => {
    return format(new Date(0, 0, v + i), 'EEE')
  })

export { format }
