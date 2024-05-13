import '../Style/PlayerStatisticsPane.css'
import { useState, React, useEffect} from "react"

const PlayerStatisticsPane = () => {
    const [goalsNumber, setGoalsNumber] = useState('')
    const [assistsNumber, setAssistsNumber] = useState('')
    const [yellowCards, setYellowCards] = useState('')
    const [redCards, setRedCards] = useState('')
    const [attendanceAtTraining, setAttendanceAtTraining] = useState('')
    const [attendanceAtMatches, setAttendanceAtMatches] = useState('')
    
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