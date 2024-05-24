import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../../Style/Calendar.css';

function ReactCalendar({ onClickDay }) {
  const [date, setDate] = useState(new Date());

  const handleDayClick = (value) => {
    onClickDay(value);
  };

  return (
    <div>
      <Calendar
        onChange={setDate}
        value={date}
        onClickDay={handleDayClick}
      />
    </div>
  );
}

export default ReactCalendar;