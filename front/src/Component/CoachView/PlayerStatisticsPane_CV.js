import { useState, useEffect } from 'react';
import "../../Style/CoachView/PlayerStatisticsPane_CV.css";

const PlayerStatisticsPane_CV = ({ playerId }) => {
    const [visibility, setVisibility] = useState({visibility: "hidden"});
    const [playerStats, setPlayerStats] = useState(null);
    const [goalsNumber, setGoals] = useState('');
    const [assistsNumber, setAssists] = useState('');
    const [yellowCards, setYellCards] = useState('');
    const [redCards, setRedCards] = useState('');
    const [attendanceAtTraining, setAttendanceAtTraining] = useState('');
    const [attendanceAtMatches, setAttendanceAtMatches] = useState('');
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

    const fetchPlayerStats = async (playerId) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/playerstats/${playerId}`);
            const data = await response.json();
            setPlayerStats(data);
        } catch (error) {
            console.error('Error fetching player statistics:', error);
        }
    };

    useEffect(() => {
        if (playerId) {
            fetchPlayerStats(playerId);
        }
    }, [playerId]);

    //DELETE THESE WHEN ITS ALL CONNECTED
    let placeHolder1 = null
    let placeHolder2 = null
    let placeHolder3 = null
    let placeHolder4 = null
    let placeHolder5 = null
    let placeHolder6 = null

    if (!playerId) {
        placeHolder1 = " ";
        placeHolder2 = " ";
        placeHolder3 = " ";
        placeHolder4 = " ";
        placeHolder5 = " ";
        placeHolder6 = " ";
    } else {
        placeHolder1 = playerStats.goals;
        placeHolder2 = playerStats.assists;
        placeHolder3 = playerStats.redCards;
        placeHolder4 = playerStats.yellowCards;
        placeHolder5 = playerStats.attendanceAtTraining;
        placeHolder6 = playerStats.attendanceAtMatches;
    }
    //DELETE UP TO HERE AND REPLACE BELOW WITH THE RESPECTIVE VALUES

    return (
        <div id="playerStatisticsPane_CV">
            <h2 id="whiteFont" class="whiteTextShadow">Statystyki Zawodnika</h2>
            <div id="dataBoxStatisticsPane_CV">
                <div id="positionDeleteBox_CV">
                    <p><span className="bStyle playerPositionStyle" id="whiteFont">BRAMKARZ</span></p>
                    <button id="deleteButton_CV" onClick={visibilityOn}>Edytuj</button>
                </div>
                <p><span className="bStyle">Gole: {placeHolder1}</span></p>
                <p><span className="bStyle">Asysty: {placeHolder2}</span></p>
                <p><span className="bStyle">Czerwone Kartki: {placeHolder3}</span></p>
                <p><span className="bStyle">Żółte Kartki: {placeHolder4}</span></p>
                <p><span className="bStyle">Obecność Na Treningach: {placeHolder5}</span></p>
                <p><span className="bStyle">Obecność Na Meczach: {placeHolder6}</span></p>
            </div>
            <div id="survBox" style={visibility} >
                <div id="survWindow">
                    <div id="survTitle">
                        Zmień Statystyki Gracza
                    </div>
                    <div id="survInputs">
                        <div className="survOption">
                            Gole:
                            <input type="number" name="" id="" min="0" value={placeHolder1} onChange={(e)=>setGoals(e.target.value)}/>
                        </div>
                        <div className="survOption">
                            Asysty:
                            <input type="number" name="" id="" min="0" value={placeHolder2} onChange={(e)=>setAssists(e.target.value)}/>
                        </div>
                        <div className="survOption">
                            Żółte kartki:
                            <input type="number" name="" id="" min="0" value={placeHolder3} onChange={(e)=>setYellCards(e.target.value)}/>
                        </div>
                        <div className="survOption txtOpt">
                            Czerwone kartki:
                            <input type="text" name="" id="" value={placeHolder4} onChange={(e)=>setRedCards(e.target.value)} />
                        </div>
                    </div>
                    <div id="survButtons">
                        <div class="survBtn" id="exitBtn" onClick={visibilityOff}>X</div>
                        <div class="survBtn" id="okBtn">OK</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerStatisticsPane_CV;