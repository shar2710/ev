import React from "react";

/**
 * Header component for displaying and navigating between months.
 *
 * @param {Object} props - The component props.
 * @param {Date} props.selectedDate - The currently selected date.
 * @param {Function} props.setSelectedDate - Function to update the selected date.
 *
 * @returns {JSX.Element} The rendered Header component.
 */
const Header = ({ selectedDate, setSelectedDate }) => {
  const handlePrevMonth = () => {
    setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() + 1)));
  };

  return (
    <div className="header">
      <button onClick={handlePrevMonth}>Previous</button>
      <h2>{selectedDate.toLocaleString("default", { month: "long" })} {selectedDate.getFullYear()}</h2>
      <button onClick={handleNextMonth}>Next</button>
    </div>
  );
};

export default Header;
