import '../../Style/ProfilePane.css'
import { useState, React, useEffect} from "react"

const ProfilePane = () => {


   
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [role, setRole] = useState('')
    const [team, setTeam] = useState('')
    const [teamMessageTitle, setTeamMessageTitle] = useState('')
    const [teamMessage, setTeamMessage] = useState('')

    const logoutHandler = (event) => {
        const refrsh_token = localStorage.getItem('refresh_token')
        const data = {"token": refrsh_token}

        fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/auth/revoke_token/`,{
            mode: 'cors',
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(response=>{response.json()}).then(data=>{
            console.log(data)
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
            window.location.href='/login/'
        }).catch(err=>{console.log(err)})
    }

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/app/user/profile`, {
            mode: 'cors',
            method: 'GET',
            headers: {"Content-Type": "application/json", "authorization": `Berear ${localStorage.getItem('access_token')}`},
        }).then(response=>response.json()).then(data=>{
            //console.log(data.user_cred.first_name)
            setName(data.user_cred.first_name)
            setSurname(data.user_cred.last_name)
            setRole(data.user_cred.role)
            setTeam(data.user_cred.player.team.name)
            setTeamMessageTitle(data.user_cred.player.team.team_message_title)
            setTeamMessage(data.user_cred.player.team.team_message)

            localStorage.setItem('user.name', data.user_cred.first_name)
            localStorage.setItem('user.surname', data.user_cred.last_namee)
            localStorage.setItem('user.role', data.user_cred.role)
            localStorage.setItem('user.team', data.user_cred.player.team.name)
            localStorage.setItem('notification.team_message_title', data.user_cred.player.team.team_message_title)
            localStorage.setItem('notification.team_message', data.user_cred.player.team.team_message)
        })
    })

     return (
        <div id="profPane" className='paneShadow'>
            <div id="profBox">
                <img id="profPhoto" src="https://i.pravatar.cc/100" alt="Tu będzie profilowe"/>
                <div id="profInfo">
                    <p id="playerName" className="info">{name} {surname}</p>
                    <p id="playerPosition" className="info">{role}</p>
                    <p id="playerClub" className="info">{team}</p>
                </div>
                <div id="buttonBox">
                    <div id="logoutButton" onClick={logoutHandler}>Wyloguj</div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePane