import { useState, useEffect, useRef } from 'react';
import "../../Style/CoachView/PlayerStatisticsPane_CV.css"

const PlayerStatisticsPane_CV = () => {

    const [goalsNumber, setGoals] = useState('')
    const [assistsNumber, setAssists] = useState('')
    const [yellowCards, setYellCards] = useState('')
    const [redCards, setRedCards] = useState('')
    const [attendanceAtTraining, setAttendanceAtTraining] = useState('')
    const [attendanceAtMatches, setAttendanceAtMatches] = useState('')
 
    useEffect(() => {
        if(localStorage.getItem('user_stats.goals') !== null){
            setGoals(localStorage.getItem('user_stats.goals'))
            setAssists(localStorage.getItem('user_stats.assists'))
            setYellCards(localStorage.getItem('user_stats.yell_cards'))
            setRedCards(localStorage.getItem('user_stats.red_cards'))
            setAttendanceAtTraining(localStorage.getItem('user_stats.attendance_at_training'))
            setAttendanceAtMatches(localStorage.getItem('user_stats.attendance_at_matches'))
        }
        else{
            /*fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/user/statistics/`, {
            mode: 'cors',
            method: 'GET',
            headers: {"Content-Type": "application/json", "authorization": `Berear ${localStorage.getItem('access_token')}`},
        }).then(response=>response.json()).then(data=>{
            if(data.detail){
                console.log(data.detail)
            }else{
                //console.log(data.user_stats.player.player_stats[0].yellow_cards)
                setGoals(data.user_stats.player.player_stats[0].goals)
                setAssists(data.user_stats.player.player_stats[0].assists)
                setYellCards(data.user_stats.player.player_stats[0].yellow_cards)
                setRedCards(data.user_stats.player.player_stats[0].red_cards)
                setAttendanceAtTraining(data.user_stats.player.player_stats[0].attended_trainings)
                setAttendanceAtMatches(data.user_stats.player.player_stats[0].attended_matches)
 
                localStorage.setItem('user_stats.goals', data.user_stats.player.player_stats[0].goals)
                localStorage.setItem('user_stats.assists', data.user_stats.player.player_stats[0].assists)
                localStorage.setItem('user_stats.yell_cards', data.user_stats.player.player_stats[0].yellow_cards)
                localStorage.setItem('user_stats.red_cards', data.user_stats.player.player_stats[0].red_cards)
                localStorage.setItem('user_stats.attendance_at_training', data.user_stats.player.player_stats[0].attended_trainings)
                localStorage.setItem('user_stats.attendance_at_matches', data.user_stats.player.player_stats[0].attended_matches)
            }
 
        })*/
        }
    })

    return (
        <div id="playerStatisticsPane_CV">
            <h2 id="whiteFont">Statystyki Zawodnika</h2>
            <div id="dataBoxStatisticsPane_CV">
                <p><span class="bStyle" id="whiteFont">BRAMKARZ</span></p>
                <p><span class="bStyle">Gole: {goalsNumber}</span></p>
                <p><span class="bStyle">Asysty: {assistsNumber}</span></p>
                <p><span class="bStyle">Czerwone Kartki: {redCards}</span></p>
                <p><span class="bStyle">Żółte Kartki: {yellowCards}</span></p>
                <p><span class="bStyle">Obecność Na Treningach: {attendanceAtTraining}</span></p>
                <p><span class="bStyle">Obecność Na Meczach: {attendanceAtMatches}</span></p>
            </div>
        </div>
    );
}

export default PlayerStatisticsPane_CV;