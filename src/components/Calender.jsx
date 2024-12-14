import React from "react";
import { useCalendar } from "../hooks/useCalendar";
import EventModal from "./EventModal";
import EventList from "./EventList";

/**
 * Calendar component to display a monthly calendar with events.
 *
 * @param {Object} props - The component props.
 * @param {Date} props.selectedDate - The currently selected date.
 * @param {Function} props.setSelectedDate - Function to set the selected date.
 * @param {Array} props.events - Array of event objects.
 * @param {Function} props.addEvent - Function to add a new event.
 * @param {Function} props.editEvent - Function to edit an existing event.
 * @param {Function} props.deleteEvent - Function to delete an event.
 * @returns {JSX.Element} The Calendar component.
 */
const Calendar = ({ selectedDate, setSelectedDate, events, addEvent, editEvent, deleteEvent }) => {
  const { daysInMonth, getDayOfWeek, getMonth } = useCalendar(selectedDate);

  const [isModalOpen, setModalOpen] = React.useState(false);
  const [selectedEventDay, setSelectedEventDay] = React.useState(null);

  const handleDayClick = (day) => {
    setSelectedEventDay(day);
    setModalOpen(true);
  };

  return (
    <div>
      <div className="calendar-grid">
        {daysInMonth.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${getDayOfWeek(day) === 0 ? "sunday" : ""}`}
            onClick={() => handleDayClick(day)}
          >
            {day.getDate()}
          </div>
        ))}
      </div>

      <EventList
        events={events.filter((event) => event.date === selectedEventDay?.toString())}
        deleteEvent={deleteEvent}
        editEvent={editEvent}
      />
      {isModalOpen && (
        <EventModal
          isOpen={isModalOpen}
          setIsOpen={setModalOpen}
          selectedDate={selectedEventDay}
          addEvent={addEvent}
        />
      )}
    </div>
  );
};

export default Calendar;
