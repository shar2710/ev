import { useState } from "react";

/**
 * Custom hook to manage events stored in localStorage.
 *
 * @returns {Object} An object containing the events array and functions to add, edit, and delete events.
 * @returns {Array} events - The array of event objects.
 * @returns {Function} addEvent - Function to add a new event.
 * @returns {Function} editEvent - Function to edit an existing event.
 * @returns {Function} deleteEvent - Function to delete an event.
 */
export const useEvents = () => {
  const [events, setEvents] = useState(JSON.parse(localStorage.getItem("events")) || []);

  const addEvent = (newEvent) => {
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  const editEvent = (updatedEvent) => {
    const updatedEvents = events.map((event) =>
      event.date === updatedEvent.date && event.startTime === updatedEvent.startTime ? updatedEvent : event
    );
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  const deleteEvent = (eventToDelete) => {
    const updatedEvents = events.filter(
      (event) => event.date !== eventToDelete.date || event.startTime !== eventToDelete.startTime
    );
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  return { events, addEvent, editEvent, deleteEvent };
};
