import "../../Style/CoachView/ManageTeam.css";
import NavBar from "../NavBar_CV.js";
import PlayerData from "./PlayerDataPane_CV.js";
import PlayerStats from "./PlayerStatisticsPane_CV.js";
import RentedEquipment from "./RentedEquipmentPane_CV.js";
import PlayerList from "./PlayerList_CV.js";
import { useState } from "react";

const ManageTeam = () => {
    const [selectedPlayerId, setSelectedPlayerId] = useState(null);

    const handleSelectPlayer = (playerId) => {
        setSelectedPlayerId(playerId);
    };

    return (
        <div id="boxManageTeam_CV">
            <div id="bar">
                <NavBar />
            </div>
            <div id="playerListCV">
                <PlayerList onSelectPlayer={handleSelectPlayer} />
            </div>
            <div id="playerStatsCV">
                <div id="playerDataBoxCV">
                    <PlayerData playerId={selectedPlayerId} />
                </div>
                <div id="playerStatsBoxCV">
                    <PlayerStats playerId={selectedPlayerId} />
                </div>
                <div id="rentedEqBoxCV">
                    <RentedEquipment playerId={selectedPlayerId} />
                </div>
            </div>
        </div>
    );
}

export default ManageTeam;