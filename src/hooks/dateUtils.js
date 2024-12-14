/**
 * Checks if a given date is within a specified date range.
 *
 * @param {Date} date - The date to check.
 * @param {Date} startDate - The start date of the range.
 * @param {Date} endDate - The end date of the range.
 * @returns {boolean} - Returns true if the date is within the range, otherwise false.
 */
export const isDateInRange = (date, startDate, endDate) => {
    return date >= startDate && date <= endDate;
  };
  