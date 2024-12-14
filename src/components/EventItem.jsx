import React from "react";
import EventItem from "./EventItem";

/**
 * Component to render a list of events.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.events - The array of event objects to be displayed.
 * @param {Function} props.editEvent - The function to edit an event.
 * @param {Function} props.deleteEvent - The function to delete an event.
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
