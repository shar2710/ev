export const getCalendarDates = (month, year) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const calendarDates = [];

  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDates.push({ day: '', isToday: false });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDates.push({
      day,
      date: new Date(year, month, day),
      isToday: new Date().toLocaleDateString() === new Date(year, month, day).toLocaleDateString(),
    });
  }

  return calendarDates;
};

export const loadEvents = () => {
  const storedEvents = JSON.parse(localStorage.getItem('events'));
  // Ensure it's always an array, even if the stored data is invalid or empty
  return Array.isArray(storedEvents) ? storedEvents : [];
};

export const saveEvents = (events) => {
  localStorage.setItem('events', JSON.stringify(events)); // Store events as a JSON string
};

export const saveEvent = (event) => {
  const events = loadEvents();
  events.push(event); // Add the new event
  saveEvents(events); // Save the updated events back to localStorage
};
