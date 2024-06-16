import { useState, React, useEffect } from "react"
import ReactCalendar from './Calendar';
import CalendarPopup from './CalendarPopup';

function CalendarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const [trainingEvent, setTrainingEvent] = useState(''); //zwaramy typ trg
  const [trainingDesc, setTrainngDesc] = useState(''); //zwracamy opis trg

  const [matchEvent, setMatchEvent] = useState(''); //zwracamy typ mecz domowy lub mecz wyjazdowy
  const [matchClubInfo, setMatchClubInfo] = useState(''); //zwracamy nazwe klubu z kim gramy

  const togglePopup = (date) => {
    setSelectedDate(date);
    //await fetchEvents(date);
    setIsOpen(!isOpen);
  }


  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' });
  };

  const showAddSportEvent = () => {
    alert("Tu będzie dodawanie wydarzeń!");
  }
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/app/calendar/event`, {
        mode: 'cors',
        method: 'GET',
        headers: { "Content-Type": "application/json", "authorization": `Bearer ${localStorage.getItem('access_token')}` },
    })
    .then(response => response.json())
    .then(data => {
        console.log('Fetched data:', data);

    })
    .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <div>
      <ReactCalendar onClickDay={togglePopup}/>

      {isOpen && <CalendarPopup
        handleClose={() => setIsOpen(false)}
        content={
          <>
            <p className="sport_events_text">Wydarzenia</p>
            <div className="current_day">
              <p>{selectedDate ? formatDate(selectedDate) : ''}</p>
            </div>

            <img className="image_training" src={require('../../Icons/barbells.png')} alt='barbells icon' />
            <div className="trainings">
              <p className="sub">Trening</p>
<<<<<<< Updated upstream
            </div>
=======
            </div>  
            
>>>>>>> Stashed changes

            <img className="image_ball" src={require('../../Icons/ball.png')} alt='ball icon' />
            <div className="matches">
              <p className="sub">Mecz</p>
            </div>

            <div>
              <button className="add_button">
                <p onClick={showAddSportEvent}>Dodaj wydarzenie</p>
              </button>
            </div>
          </>
        }
      />}
    </div>
  );
}

export default CalendarComponent;
