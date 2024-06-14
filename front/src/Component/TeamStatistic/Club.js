import { useState, useEffect } from 'react';
import '../../Style/TeamStatistic/Club.css'


const Club = () => {
    const [clubName,setClubName] = useState('')
    const [coachName,setCoachName] = useState('')
    const [coachSurname, setCoachSurname] = useState('') 

    useEffect(() => {
        if(localStorage.getItem('team_info.name') !== null){
            setClubName(localStorage.getItem('team_info.name'))
            setCoachName(localStorage.getItem('team_info.coach_name'))
            setCoachSurname(localStorage.getItem('team_info.coach_surname'))
        }
        else{
            fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/team_stats/info/`, {
            mode: 'cors',
            method: 'GET',
            headers: {"Content-Type": "application/json", "authorization": `Berear ${localStorage.getItem('access_token')}`},
        }).then(response=>response.json()).then(data=>{
            if(data.detail){
                console.log(data.detail)
            }else{
                console.log(data.team_info[0].player.team.name)
                setClubName(data.team_info[0].player.team.name)
                setCoachName(data.coach.first_name)
                setCoachSurname(data.coach.last_name)
            
                localStorage.setItem('team_info.name', data.team_info[0].player.team.name)
                localStorage.setItem('team_info.coach_name', data.coach.first_name)
                localStorage.setItem('team_info.coach_surname', data.coach.last_name)
            }
        })
        }
    })


    return ( 
        <div id="club" className='paneShadow'>
            <div id="clubimage">
                <img alt="Logo klubu" id="clublogo"/>
            </div>
            <div id="clubinformation">
                <div className="clubnazwa"><label><b>{clubName}</b></label></div>
                <br/>
                <div className="clubnazwa"><label>Trener - {coachName} {coachSurname}</label></div>
            </div>
        </div>
     );
}
 
export default Club;