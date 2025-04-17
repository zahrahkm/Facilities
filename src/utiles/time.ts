import { format, parse, isWithinInterval } from 'date-fns';

export const formatTime = (time: string) => {
  return format(parse(time, 'HH:mm', new Date()), 'h:mm a');
};

export const isFacilityOpen = (openingTime: string, closingTime: string) => {
  const now = new Date();
  const [openHour, openMinute] = openingTime.split(':').map(Number);
  const [closeHour, closeMinute] = closingTime.split(':').map(Number);

  const opening = new Date(now);
  opening.setHours(openHour, openMinute, 0);

  const closing = new Date(now);
  closing.setHours(closeHour, closeMinute, 0);

  return isWithinInterval(now, { start: opening, end: closing });
};





export const handleTimeInput = (e: React.FormEvent<HTMLInputElement>) => {
  let newValue = e.currentTarget.value

  // Remove any non-digit characters except colon
  newValue = newValue.replace(/[^\d:]/g, "")

  // Split into parts (before and after colon if exists)
  const parts = newValue.split(":")

  // Handle the first part (hours)
  let hours = parts[0] || ""
  hours = hours.slice(0, 2) // Limit to 2 digits

  if (hours.length > 0 && Number.parseInt(hours) > 23) {
    hours = "23"
  }

  // Handle the second part (minutes) if it exists
  let minutes = ""
  let formattedValue = hours

  // Only add colon and process minutes if hours has 2 digits
  if (hours.length === 2 && parts.length > 1) {
    minutes = parts[1].slice(0, 2) // Limit to 2 digits

    if (minutes.length > 0 && Number.parseInt(minutes) > 59) {
      minutes = "59"
    }

    formattedValue = `${hours}:${minutes}`
  }

  // Auto-insert colon after 2 digits for better UX
  if (hours.length === 2 && !newValue.includes(":") && newValue.length > 2) {
    const potentialMinutes = newValue.substring(2).slice(0, 2)
    if (potentialMinutes) {
      if (Number.parseInt(potentialMinutes) > 59) {
        formattedValue = `${hours}:59`
      } else {
        formattedValue = `${hours}:${potentialMinutes}`
      }
    } else {
      formattedValue = `${hours}:`
    }
  }
   // Update input value
   e.currentTarget.value = formattedValue;
  
}