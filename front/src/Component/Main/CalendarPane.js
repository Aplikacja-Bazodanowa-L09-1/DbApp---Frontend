<<<<<<< Updated upstream
=======
import React, { useEffect, useState } from "react";
>>>>>>> Stashed changes
import '../../Style/CalendarPane.css'
import CalendarComponent from './CalendarComponent';

<<<<<<< Updated upstream
const CalendarPane = () => {
     return (
        <div id="calPane">
            <CalendarComponent />
        </div>
=======
const CalendarPane = ({sharedState}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAddingEvents, setIsAddingEvents] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [date, setDate] = useState(new Date());
    const [titleEvents, setTitleEvents] = useState([]);
    //const [hourEvents, setHourEvents] = useState([]);
  
    const togglePopup = (date) => {
      setSelectedDate(date);
      setIsOpen(!isOpen);
      fetchEventsForDate(date);
    }
    
// -------------------------------------------------------

const fetchEventsForDate = (date) => {
  const dateAtMidnightUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const formattedDate = dateAtMidnightUTC.toISOString();

  fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/app/calendar/event?date=${formattedDate}`, {
      mode: 'cors',
      method: 'GET',
      headers: { 
          "Content-Type": "application/json", 
          "authorization": `Bearer ${localStorage.getItem('access_token')}` 
      },
      //body: JSON.stringify({ date: formattedDate }) // formatowanie daty na yyyy-mm-dd
  })
  .then(response => response.json())
  .then(data => {

    if (Array.isArray(data.events)) {
      setTitleEvents(data.events);
  } else {
      console.log('Expected an array but got:', typeof data.events);
      setTitleEvents([]);
  }
      //setHourEvents(data.events);
      //console.log(data.map(events => events.title)); // Obsłuż dane odpowiedzi
  })
  .catch(error => {
      console.error('Błąd pobierania wydarzeń:', error);
      setTitleEvents({});
  });
}

useEffect(() => {
  fetchEventsForDate(date)
}, [sharedState, date])
  //console.log(titleEvents.map(events => events.title))



//----------------------------------------------------

    const formatDate = (date) => {
      if (!date) return '';
      return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' });
    };
  
    const toggleAddSportEvent = () => {
      setIsAddingEvents(!isAddingEvents);
    }
  
    const closeAddEventPopup = () => {
      setIsAddingEvents(false);
    }
  
    const AddEventsPopup = (props) => {
      return(
        <div className="popup">
          <div className="button">
            <button className="close" onClick={props.closePopup}>
              <img src={require('../../Icons/arrow.png')} alt="arrow" />
            </button>
          </div>
          <div className="title">
            <h1>Nowe wydarzenie</h1>
          </div>
          <div className="description">
            <h1>Wprowadź Datę</h1>
            <h1>Wprowadź Godzinę</h1>
            <h1>Nazwa</h1>
          </div>
          <button className="button_date"></button>
          <button className="button_hour"></button>
          <button className="button_name"></button>
          <button className="button_accept">
            <img src={require('../../Icons/accepted.png')} alt="accept" />
          </button>
          <button className="button_reject">
            <img src={require('../../Icons/denied.png')} alt="reject" />
          </button>
        </div>
      );
    }
  
    return (
      <div id="calPane" className='paneShadow'>
        <Calendar
          onChange={setDate}
          value={date}
          onClickDay={togglePopup}
        />
  
        {isOpen && (
          <div className="calendar_popup">
            <div className="button">
              <button className="close" onClick={() => setIsOpen(false)}>
                <img src={require('../../Icons/arrow.png')} alt='spinned arrow icon' />
              </button>
            </div>
            <div className="contents">
              <>
                <p className="sport_events_text">Wydarzenia</p>
                <div className="current_day">
                  <p className="sub1">{selectedDate ? formatDate(selectedDate) : ''}</p>
                </div>
                <img className="image_training" src={require('../../Icons/barbells.png')} alt='barbells icon' />
                <div className="trainings">
                  <p className="sub">{titleEvents.length > 0 ? titleEvents[0].title : 'Trening'}</p>
                </div>
                <img className="image_ball" src={require('../../Icons/ball.png')} alt='ball icon' />
                <div className="matches">
                  <p className="sub">Mecz</p>
                </div>
                {// tutaj warunek sprawdzający czy ktoś jest zalogowany jako trener (TODO) - opcja ma być niedostępna dla zawodnika
                  <div>
                    <button className="add_button">
                      <p className="sub2" onClick={toggleAddSportEvent}>Dodaj wydarzenie</p>
                    </button>
                  </div>}
              </>
            </div>
          </div>
        )}
  
        {isAddingEvents && (
          <AddEventsPopup closePopup={closeAddEventPopup} />
        )}
      </div>
>>>>>>> Stashed changes
    );
}

export default CalendarPane