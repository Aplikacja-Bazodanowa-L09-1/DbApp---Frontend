import { useState, useEffect } from 'react';
import "../../Style/CoachView/PlayerStatisticsPane_CV.css";

const PlayerStatisticsPane_CV = ({ playerId }) => {
    const [goalsNumber, setGoals] = useState('');
    const [assistsNumber, setAssists] = useState('');
    const [yellowCards, setYellCards] = useState('');
    const [redCards, setRedCards] = useState('');
    const [attendanceAtTraining, setAttendanceAtTraining] = useState('');
    const [attendanceAtMatches, setAttendanceAtMatches] = useState('');

    useEffect(() => {
        const fetchPlayerStatistics = async (playerId) => {
            try {
                const response = await fetch(`YOUR_API_ENDPOINT/${playerId}/statistics`);
                const data = await response.json();

                setGoals(data.goals);
                setAssists(data.assists);
                setYellCards(data.yellowCards);
                setRedCards(data.redCards);
                setAttendanceAtTraining(data.attendanceAtTraining);
                setAttendanceAtMatches(data.attendanceAtMatches);
            } catch (error) {
                console.error('Error fetching player statistics:', error);
            }
        };

        if (playerId) {
            fetchPlayerStatistics(playerId);
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
        placeHolder1 = goalsNumber;
        placeHolder2 = assistsNumber;
        placeHolder3 = redCards;
        placeHolder4 = yellowCards;
        placeHolder5 = attendanceAtTraining;
        placeHolder6 = attendanceAtMatches;
    }
    //DELETE UP TO HERE AND REPLACE BELOW WITH THE RESPECTIVE VALUES

    return (
        <div id="playerStatisticsPane_CV">
            <h2 id="whiteFont" class="whiteTextShadow">Statystyki Zawodnika</h2>
            <div id="dataBoxStatisticsPane_CV">
                <div id="positionDeleteBox_CV">
                    <p><span className="bStyle playerPositionStyle" id="whiteFont">BRAMKARZ</span></p>
                    <button id="deleteButton_CV">Edytuj</button>
                </div>
                <p><span className="bStyle">Gole: {placeHolder1}</span></p>
                <p><span className="bStyle">Asysty: {placeHolder2}</span></p>
                <p><span className="bStyle">Czerwone Kartki: {placeHolder3}</span></p>
                <p><span className="bStyle">Żółte Kartki: {placeHolder4}</span></p>
                <p><span className="bStyle">Obecność Na Treningach: {placeHolder5}</span></p>
                <p><span className="bStyle">Obecność Na Meczach: {placeHolder6}</span></p>
            </div>
        </div>
    );
}

export default PlayerStatisticsPane_CV;