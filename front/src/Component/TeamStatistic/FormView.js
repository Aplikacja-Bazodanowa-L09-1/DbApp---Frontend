import { useState,React, useEffect } from 'react';
import '../../Style/TeamStatistic/FormView.css'
const surveyPhoto = require('../../Icons/surveyIcon.png')
const arrowPhoto = require('../../Icons/arrow.png')


const FormView = (sharedState) => {
    const [survData, setSurvData] = useState([[]]);
    const [clubinfo,setClubInfo]=useState('');
    const [sportEvent,setSportEvent]=useState('');
    const [date,setDate]=useState([]);
    //const [hour,setHour]=useState('');
    const [players,setPlayers]=useState(
        {
            max:'',
            active:''
        }
    );

    const [visibility, setVisibility] = useState({visibility: "hidden"});
    const visibilityOn = () =>
    {
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';
        setVisibility({visibility: "visible"});
    }
    const visibilityOff = () =>
    {
        document.body.style.overflow = 'auto';
        setVisibility({visibility: "hidden"});
    }

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/team_stats/form`, {
            mode: 'cors',
            method: 'GET',
            headers: { "Content-Type": "application/json", "authorization": `Bearer ${localStorage.getItem('access_token')}` },
        })
        .then(response => response.json())
        .then(data => {
            //  console.log('Fetched data:', data);  // Debug: sprawdź dane
            if (data.events_form && data.events_form.length > 0) {
                
                setClubInfo(data.events_form[0].player.team.events[0].title);
                setSportEvent(data.events_form[0].player.team.events[0].type);
                setDate(data.events_form[0].player.team.events[0].event_datetime.split('T'));
                setPlayers({
                    max: data.playerCount,
                    active: data.event_will_attend_players
                });
                localStorage.setItem('events_form.player.team.events.title', data.events_form[0].player.team.events[0].title)
                localStorage.setItem('events_form.player.team.events.type', data.events_form[0].player.team.events[0].type)
                localStorage.setItem('events_form.player.team.events.event_datetime', data.events_form[0].player.team.events[0].event_datetime)
                localStorage.setItem('playerCount', data.playerCount)
                localStorage.setItem('event_will_attend_players', data.event_will_attend_players)
            }
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    const fetchPlayerNames = () => {
        fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/team_stats/questionary/`, {
            mode: 'cors',
            method: 'GET',
            headers: { "Content-Type": "application/json", "authorization": `Berear ${localStorage.getItem('access_token')}` },
        }).then(response => response.json()).then(data => {
            if (data.detail) {
                console.log(data.detail)
            } else {
                
                // console.log(data.playerNames)
                // for(let i=0; i<data.playerNames.length; i++){
                //     console.log(data.playerNames[i])
                //     setSurvData([])
                // }
                setSurvData(data.playersNames)
                console.log(survData)
            }
        })
    }
    useEffect(() => {
        fetchPlayerNames()
    }, [sharedState])

    return ( 
        <div id="formmain" className='paneShadow'>
                <div id="formleft">
                    <div id="formclub">
                        <img src={surveyPhoto} alt='zdjecie' id="frontimage"/>
                        <div id="formclubinfo">
                            {clubinfo}<br/>
                            {sportEvent}
                        </div>
                    </div>
                    <button id="formbutton" onClick={visibilityOn}>Podgląd</button>
                </div>
                <div id="formright">
                    <div id="formdate">{date[0]}<br/>
                    {date[1] && date[1].slice(0,-5)} </div>
                    
                    <div id="formhowmany">
                        {players.active}/{players.max}
                    </div>
                </div>

            <div id="srBox" style={visibility} >
                <div id="srWindow">
                    <div id="srExit">
                        <img src={arrowPhoto} alt="" onClick={visibilityOff}/>
                    </div>
                    <div id="srTitle">
                    Ankieta Przedmeczowa
                    </div>
                <div id="srTable">
                    <div id="srTitleRow">
                        <div className="srCell">Imie i nazwisko</div>
                        <div className="srCell">Pozycja</div>
                        <div className="srCell">Kondycja mentalna</div>
                        <div className="srCell">Kondycja Fizyczna</div>
                        <div className="srCell">Chęci do Grania</div>
                        <div className="srCell">Kontuzje</div>
                    </div>
                    {survData.map((row, index) =>(
                    <div className="srRow" key={index}>
                    <div className="srCell">
                        {`${row.first_name} ${row.last_name}`}
                    </div>
                    <div className="srCell">
                        {row.player && row.player.player_positions 
                            ? row.player.player_positions.map(pos => pos.position.full_name).join(', ')
                            : 'Brak danych'
                        }
                    </div>
                    <div className="srCell">
                        {row.player && row.player.player_answer
                            ? row.player.player_answer.mental_condition
                            : 'Brak danych'
                        }
                    </div>
                    <div className="srCell">
                        {row.player && row.player.player_answer
                            ? row.player.player_answer.physical_condition
                            : 'Brak danych'
                        }
                    </div>
                    <div className="srCell">
                        {row.player && row.player.player_answer
                            ? row.player.player_answer.motivation
                            : 'Brak danych'
                        }
                    </div>
                    <div className="srCell">
                        {row.player && row.player.player_answer
                            ? row.player.player_answer.injuries
                            : 'Brak danych'
                        }
                    </div>
                </div>
            ))}
                </div>
            </div>
            </div>    
        </div>
     );
}
 
export default FormView;

