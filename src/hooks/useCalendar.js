import { useState, useEffect } from "react";

/**
 * Custom hook to generate an array of dates representing the days in the selected month.
 *
 * @param {Date} selectedDate - The date object representing the selected month.
 * @returns {Object} An object containing:
 *   - {Array<Date>} daysInMonth - An array of Date objects representing each day in the selected month.
 *   - {function(Date): number} getDayOfWeek - A function that takes a Date object and returns the day of the week (0 for Sunday, 1 for Monday, etc.).
 *   - {function(Date): number} getMonth - A function that takes a Date object and returns the month index (0 for January, 1 for February, etc.).
 */
export const useCalendar = (selectedDate) => {
  const [daysInMonth, setDaysInMonth] = useState([]);

  useEffect(() => {
    const days = [];
    const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const lastDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
    let day = new Date(firstDayOfMonth);

    while (day <= lastDayOfMonth) {
      days.push(new Date(day));
      day.setDate(day.getDate() + 1);
    }

    setDaysInMonth(days);
  }, [selectedDate]);

  const getDayOfWeek = (date) => date.getDay(); // Sunday = 0, Monday = 1, ...

  const getMonth = (date) => date.getMonth(); // Get the month index (0 for January, 1 for February, etc.)

  return { daysInMonth, getDayOfWeek, getMonth };
};
