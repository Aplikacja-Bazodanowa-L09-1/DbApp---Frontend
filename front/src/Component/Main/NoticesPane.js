import { useState, useEffect } from "react";
import '../../Style/NoticesPane.css'
const bicepsIcon = require('../../Icons/biceps.png')

const NoticesPane = () => {

    const [teamMessageTitle, setTeamMessageTitle] = useState('')
    const [teamMessage, setTeamMessage] = useState('')

    useEffect(() => {
        if(localStorage.getItem('notification.team_message_title') !== null){
            setTeamMessageTitle(localStorage.getItem('notification.team_message_title'))
            setTeamMessage(localStorage.getItem('notification.team_message'))
        }
        else{
            fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/app/team/notification/`, {
            mode: 'cors',
            method: 'GET',
            headers: {"Content-Type": "application/json", "authorization": `Berear ${localStorage.getItem('access_token')}`},
        }).then(response=>response.json()).then(data=>{
            console.log(data.notification.player.team.team_message_title)
            setTeamMessageTitle(data.notification.player.team.team_message_title)
            setTeamMessage(data.notification.player.team.team_message)

            localStorage.setItem('notification.team_message_title', data.notification.player.team.team_message_title)
            localStorage.setItem('notification.team_message', data.notification.player.team.team_message)
        })
        }
    })

     return (
        <div id="noticesPane">
            <div id="notification">
                <div id="notifTop">
                    <div id="notifLeft">
                        <img id="notifIcon" src={bicepsIcon} alt="icon" />
                    </div>
                    <div id="notifRight">
                        <div id="notifTitle">
                            {teamMessageTitle}
                        </div>
                        <div id="notifDate">
                            data
                        </div>
                    </div>
                </div>
                <div id="notifBottom">
                    {teamMessage}
                </div>
            </div>
        </div>
    );
}

export default NoticesPane