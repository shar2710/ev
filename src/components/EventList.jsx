import React from "react";
import EventItem from "./EventItem";

/**
 * EventList component renders a list of events.
 *
 * @param {Object[]} events - Array of event objects to be displayed.
 * @param {Function} editEvent - Function to handle editing an event.
 * @param {Function} deleteEvent - Function to handle deleting an event.
 * @returns {JSX.Element} The rendered list of events.
 */
const EventList = ({ events, editEvent, deleteEvent }) => {
  return (
    <div className="event-list">
      {events.map((event, index) => (
        <EventItem key={index} event={event} editEvent={editEvent} deleteEvent={deleteEvent} />
      ))}
    </div>
  );
};

export default EventList;
