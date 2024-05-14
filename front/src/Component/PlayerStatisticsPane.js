import '../Style/PlayerStatisticsPane.css'
import { useState, React, useEffect} from "react"
 
const PlayerStatisticsPane = () => {
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
            fetch('http://localhost:8184/user/statistics/', {
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
 
        })
        }
    })
 
    return (
    <div id="playerStatisticsPane">
        <p><span className="bStyle">Gole: </span>{goalsNumber}</p>
        <p><span className="bStyle">Asysty: </span>{assistsNumber}</p>
        <p><span className="bStyle">Żółte Kartki: </span>{yellowCards}</p>
        <p><span className="bStyle">Czerowne Kartki: </span>{redCards}</p>
        <p><span className="bStyle">Obecność Na Treningach: </span>{attendanceAtTraining}</p>
        <p><span className="bStyle">Obecność Na Meczach: </span>{attendanceAtMatches}</p>
    </div> 
   );
}
 
export default PlayerStatisticsPane