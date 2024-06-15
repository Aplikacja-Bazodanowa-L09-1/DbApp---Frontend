import React, { useState } from "react"
import ReactCalendar from './Calendar';
import CalendarPopup from './CalendarPopup';
import AddEventPopup from "./AddEventsPopup";

function CalendarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAddingEvents, setIsAddingEvents] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const togglePopup = (date) => {
    setSelectedDate(date);
    setIsOpen(!isOpen);
  }

  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' });
  };

  const toggleAddSportEvent = () => {
    setIsAddingEvents(!isAddingEvents)
  }

  const closeAddEventPopup = () => {
    setIsAddingEvents(false);
  }

  return (
    <div>
      <ReactCalendar onClickDay={togglePopup}/>

      {isOpen && <CalendarPopup
        handleClose={() => setIsOpen(false)}
        content={
          <>
            <p className="sport_events_text">Wydarzenia</p>
            <div className="current_day">
              <p className="sub1">{selectedDate ? formatDate(selectedDate) : ''}</p>
            </div>

            <img className="image_training" src={require('../../Icons/barbells.png')} alt='barbells icon' />
            <div className="trainings">
              <p className="sub">Trening</p>
            </div>
            

            <img className="image_ball" src={require('../../Icons/ball.png')} alt='ball icon' />
            <div className="matches">
              <p className="sub">Mecz</p>
            </div>

            {//tutaj warunek sprawdzający czy ktoś jest zalogowany jako trener (TODO) - opcja ma być niedostępna dla zawodnika

            /*<div>
              <button className="add_button">
                <p className="sub2" onClick={toggleAddSportEvent}>Dodaj wydarzenie</p>
              </button>
            </div>*/}
          </>
        }
      />}

      {isAddingEvents && <AddEventPopup closePopup={closeAddEventPopup}/>}

      
    </div>
  );
}

export default CalendarComponent;
