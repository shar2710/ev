import React, { useState, useEffect } from "react";
import Calendar from "./components/Calender";
import Header from "./components/Header";
import { useEvents } from "./hooks/useEvents";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { events, addEvent, editEvent, deleteEvent } = useEvents();

  return (
    <div className="app-container">
      <Header selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <Calendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        events={events}
        addEvent={addEvent}
        editEvent={editEvent}
        deleteEvent={deleteEvent}
      />
    </div>
  );
};

export default App;
