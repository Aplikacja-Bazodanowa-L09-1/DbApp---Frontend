import '../../Style/SurveyPane.css'

const SurveyPane = () => {

<<<<<<< Updated upstream
     return (
        <div id="survPane">
          Tu będzie ankieta      
        </div>
=======

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
    const [injuries, setInjuries] = useState();
    const [mentalCon, setMentalCon] = useState();
    const [physicalCon, setPhysicalCon] = useState();
    const [desireToPlay, setDesireToPlay] = useState();

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
            console.log('Fetched data:', data);  // Debug: sprawdź dane
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

     return (
        <div id="survPane" className='paneShadow'>
          <div id="upperSurvBox">
            <div className="sBoxes sLeft">
              <div id="sLogo">
                <img src={surveyPhoto} alt="logo klubu" id="frontimage" />
              </div>
              <div id="sTitle">{clubinfo} <br/>
              {sportEvent}</div>
            </div>
            <div className="sBoxes sRight">
              {date[0]}
              <br/>
              {date[1] ? date[1].slice(0, -5) : ''}
            </div>
          </div>
          <div id="downSurvBox">
            <div className="sBoxes sLeft">
              <div id="redBtn" onClick={visibilityOn}>Nieuzupełniono</div>
            </div>
            <div className="sBoxes sRight">
              <div id="sCount">{players.active}/{players.max}</div>
            </div>
          </div>
          <div id="survBox" style={visibility} >
      <div id="survWindow">
          <div id="survTitle">
              Ankieta Przedmeczowa
          </div>
          <div id="survInputs">
              <div className="survOption">
                  Kondycja Mentalna:
                  <input type="number" name="" id="" min="0" value={mentalCon} onChange={(e)=>setMentalCon(e.target.value)}/>
              </div>
              <div className="survOption">
                  Kondycja Fizyczna:
                  <input type="number" name="" id="" min="0" value={physicalCon} onChange={(e)=>setPhysicalCon(e.target.value)}/>
              </div>
              <div className="survOption">
                  Chęci Do Grania:
                  <input type="number" name="" id="" min="0" value={desireToPlay} onChange={(e)=>setDesireToPlay(e.target.value)}/>
              </div>
              <div className="survOption txtOpt">
                  Kontuzje:
                  <input type="text" name="" id="" value={injuries} onChange={(e)=>setInjuries(e.target.value)} />
              </div>
          </div>
          <div id="survButtons">
              <div class="survBtn" id="exitBtn" onClick={visibilityOff}>X</div>
              <div class="survBtn" id="okBtn">OK</div>
          </div>
      </div>
      </div>  
    </div>  
>>>>>>> Stashed changes
    );
}

export default SurveyPane