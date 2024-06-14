import "../../../Style/Admin/AdminTeamView/AdminTeamView.css";
import NavBar from "../NavBarAdmin.js";
import TeamList from "./TeamList.js";
import TeamData from "./TeamData.js";
import { useState } from "react";

const AdminTeamView = () => {
    const [selectedTeamId, setSelectedTeamId] = useState(null);

    const handleSelectTeam = (teamId) => {
        setSelectedTeamId(teamId);
    };

    return (
        <div id="boxAdminTeamView">
            <div id="teamNavBarAdmin">
                <NavBar />
            </div>
            <div id="notNavbarAdmin">
                <div id="teamList">
                    <TeamList onSelectTeam={handleSelectTeam} />
                </div>
                <div id="teamAdminStats">
                    <TeamData teamId={selectedTeamId} />
                </div>
            </div>
        </div>
    );
}

export default AdminTeamView;