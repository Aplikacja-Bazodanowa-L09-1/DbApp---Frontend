//import { useState, useEffect, useRef } from 'react';
import "../../Style/CoachView/ManageTeam.css"
import NavBar from "../NavBar.js"
import PlayerData from "./PlayerDataPane_CV.js"
import PlayerStats from "./PlayerStatisticsPane_CV.js"
import RentedEquipment from "./RentedEquipmentPane_CV.js"
import PlayerList from "./PlayerList_CV.js"

const ManageTeam = () => {
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