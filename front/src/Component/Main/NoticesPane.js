import { useState, useEffect } from "react";
import '../../Style/Main/NoticesPane.css'
const notifIcon = require('../../Icons/notifiIcon.png')

const NoticesPane = ({toggleSharedState, sharedState}) => {

    const [teamMessageTitle, setTeamMessageTitle] = useState('')
    const [teamMessage, setTeamMessage] = useState('')
    const [editTeamMessageTitle, setEditTeamMessageTitle] = useState('')
    const [editTeamMessage, setEditTeamMessage] = useState('')
    const [role, setRole] = useState('')
    const [visibility, setVisibility] = useState({visibility: "hidden"});


    const fetchUpdateNotification = async () => {
        fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/coach/notification/update`, {
            mode: 'cors',
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${localStorage.getItem('access_token')}`
            },
            body: JSON.stringify( {
                team_message_title: editTeamMessageTitle,
                team_message: editTeamMessage
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.detail) {
                console.log('Error:', data.detail);
            } else {
                console.log('Updated data:', data.body);
                toggleSharedState()
            }
        })
        .catch(error => {
            console.error('Error updating team meassage', error)
        })
    }
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

        const handleSubmit = () => {
            // Implement the logic to save the updated statistics
            fetchUpdateNotification();
            setTeamMessageTitle(editTeamMessageTitle);
            setTeamMessage(editTeamMessage);
            visibilityOff();
        }
        
        const fetchNotification = async() => {
            fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/app/team/notification/`, {
                mode: 'cors',
                method: 'GET',
                headers: {"Content-Type": "application/json", "authorization": `Berear ${localStorage.getItem('access_token')}`},
            }).then(response=>response.json()).then(data=>{
                console.log(data.user)
                setTeamMessageTitle(data.notification.player.team.team_message_title)
                setTeamMessage(data.notification.player.team.team_message)
                // setRole(data.user_cred.role)
    
                // localStorage.setItem('user.role', data.user_cred.role)
                localStorage.setItem('notification.team_message_title', data.notification.player.team.team_message_title)
                localStorage.setItem('notification.team_message', data.notification.player.team.team_message)
            })
        } 
    useEffect(() => {
        // if(localStorage.getItem('notification.team_message_title') !== null){
        //     setTeamMessageTitle(localStorage.getItem('notification.team_message_title'))
        //     setTeamMessage(localStorage.getItem('notification.team_message'))
        //     setRole(localStorage.getItem('role'))
        // }
        // else{
            setRole(localStorage.getItem('role'))
            fetchNotification();
        
    })

     return (
        <div id="noticesPane" className='paneShadow'>
            <div id="notification">
                <div id="nLeft">
                    <img src={notifIcon} alt="icon" />
                </div>  
                <div id="nMiddle">
                    <div id="nTitle">
                        {teamMessageTitle}
                    </div>
                    <div id="nMessage">
                        {teamMessage}
                    </div>
                </div>
                <div id="nRight">
                        {role === 'Coach'? <div className="smallRedBtn" onClick={visibilityOn}>Edytuj</div>:
                        <div></div>}      
                </div>
            </div>

        <div id="notifBox" style={visibility} >
            <div id="notifWindow">
                <div id="notifEditTitle">
                    Edytuj Powiadomienie
                </div>
                <div id="notifInputs">
                    <p className="nEditP">Tytuł:</p>
                    <input type="text"  id="nTitleInput" min="0" value={editTeamMessageTitle} onChange={(e)=>setEditTeamMessageTitle(e.target.value)}/>
                    <p className="nEditP">Treść:</p>
                    <textarea id="nMessageTextArea" value={editTeamMessage} onChange={(e)=>setEditTeamMessage(e.target.value)}/>
                </div>
                <div id="notifButtons">
                    <div class="smallRedBtn" onClick={visibilityOff}>Wróć</div>
                    <div class="smallRedBtn" onClick={handleSubmit}>Zapisz</div>
                </div>
            </div>
        </div>

        </div>
    );
}

export default NoticesPane