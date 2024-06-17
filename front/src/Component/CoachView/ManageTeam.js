<<<<<<< Updated upstream
//import { useState, useEffect, useRef } from 'react';
import "../../Style/CoachView/ManageTeam.css"
import NavBar from "../NavBar.js"
import PlayerData from "./PlayerDataPane_CV.js"
import PlayerStats from "./PlayerStatisticsPane_CV.js"
import RentedEquipment from "./RentedEquipmentPane_CV.js"
import PlayerList from "./PlayerList_CV.js"

const ManageTeam = () => {
=======
import "../../Style/CoachView/ManageTeam.css";
import NavBar from "../NavBar.js";
import PlayerData from "./PlayerDataPane_CV.js";
import PlayerStats from "./PlayerStatisticsPane_CV.js";
import RentedEquipment from "./RentedEquipmentPane_CV.js";
import PlayerList from "./PlayerList_CV.js";
import { useState, useEffect } from "react";

const ManageTeam = () => {
    const [selectedPlayerId, setSelectedPlayerId] = useState(null);

    const [PageContent, setPageContent] = useState('')

    const handleSelectPlayer = (playerId) => {
        setSelectedPlayerId(playerId);
    };

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

        fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/coach/`, {
            mode: 'cors',
            method: 'GET',
            headers: {
                "authorization": `Berear ${localStorage.getItem('access_token')}`
            }
        }).then(response => {

            if (response.status == 403) {
                throw new Error("access_token expired")
            }
            else return response.json()

        }).then(data => {
            setPageContent(data.content)

        }).catch(err => {
            if (err == 'Error: access_token expired') {
                if (window.confirm("Sesja wygasła. Czy chcesz ją odnowić?")) {

                    /// ODNOWIENIE SESJI
                    fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/auth/refresh_token/`, {
                        mode: 'cors',
                        method: 'POST',
                        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "allow" },
                        body: JSON.stringify({ token: `${localStorage.getItem('refresh_token')}` })
                    })
                        .then(response => response.json())
                        .then(data => {
                            localStorage.setItem('access_token', data.accessToken)
                            window.location.reload()
                        })
                        
                } else {
                    logoutHandler()
                }
            }
        })
    }, [])

>>>>>>> Stashed changes
    return (
        <div>
            <div id="boxManageTeam_CV">
                <div id="bar">
                    <NavBar />
                </div>
                <div id="playerListCV">
                    <PlayerList />
                </div>
                <div id="playerStatsCV">
                    <div id="playerDataBoxCV">
                        <PlayerData />
                    </div>
                    <div id="playerStatsBoxCV">
                        <PlayerStats />
                    </div>
                    <div id="rentedEqBoxCV">
                        <RentedEquipment />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageTeam;