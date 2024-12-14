import React, { useState } from "react";

/**
 * EventModal component for adding a new event.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isOpen - Indicates if the modal is open.
 * @param {Function} props.setIsOpen - Function to set the modal open state.
 * @param {Date} props.selectedDate - The selected date for the event.
 * @param {Function} props.addEvent - Function to add the event.
 *
 * @returns {JSX.Element|null} The EventModal component or null if not open.
 */
const EventModal = ({ isOpen, setIsOpen, selectedDate, addEvent }) => {
  const [eventName, setEventName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    addEvent({ eventName, startTime, endTime, description, date: selectedDate.toString() });
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <h2>Add Event for {selectedDate.toLocaleDateString()}</h2>
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <input
        type="time"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      />
      <input
        type="time"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Save Event</button>
      <button onClick={() => setIsOpen(false)}>Close</button>
    </div>
  );
};

export default EventModal;
