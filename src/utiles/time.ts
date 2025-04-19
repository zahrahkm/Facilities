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

  // Handle cases where closing time is on the next day
  if (closeHour < openHour || (closeHour === openHour && closeMinute < openMinute)) {
    if (now.getHours() < closeHour || (now.getHours() === closeHour && now.getMinutes() <= closeMinute)) {
      opening.setDate(opening.getDate() - 1);
    } else {
      closing.setDate(closing.getDate() + 1);
    }
  }

  return isWithinInterval(now, { start: opening, end: closing });
};

export const getNextStatusChangeTime = (openingTime: string, closingTime: string): Date => {
  const now = new Date();
  const [openHour, openMinute] = openingTime.split(':').map(Number);
  const [closeHour, closeMinute] = closingTime.split(':').map(Number);

  const opening = new Date(now);
  opening.setHours(openHour, openMinute, 0, 0);

  const closing = new Date(now);
  closing.setHours(closeHour, closeMinute, 0, 0);

  // If closing time is before opening time, adjust the dates
  if (closeHour < openHour || (closeHour === openHour && closeMinute < openMinute)) {
    closing.setDate(closing.getDate() + 1);
  }

  // If we're currently closed
  if (!isFacilityOpen(openingTime, closingTime)) {
    // If today's opening time has passed, get tomorrow's opening time
    if (now > opening) {
      opening.setDate(opening.getDate() + 1);
    }
    return opening;
  }
  // If we're currently open, return closing time
  return closing;
};