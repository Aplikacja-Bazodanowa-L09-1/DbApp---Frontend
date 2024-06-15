import { useState, useEffect } from 'react';
import "../../../Style/Admin/AdminTeamView/TeamData.css";

const TeamData = ({ teamId }) => {
    const [teamData, setTeamData] = useState(null);

    const fetchTeamData = async (teamId) => {
        try {
            const response = await fetch(`https://api.example.com/teams/${teamId}`);
            const data = await response.json();
            setTeamData(data);
        } catch (error) {
            console.error('Error fetching team data:', error);
        }
    };

    useEffect(() => {
        if (teamId) {
            fetchTeamData(teamId);
        }
    }, [teamId]);

    //DELETE THESE WHEN ITS ALL CONNECTED
    let placeHolder1 = null
    let placeHolder2 = null

    if (!teamId) {
        placeHolder1 = "Liverpool F.C";
        placeHolder2 = "Suduk Unguruk";
    } else {
        placeHolder1 = teamData.teamName;
        placeHolder2 = teamData.coachName;
    }

    //DELETE UP TO HERE AND REPLACE BELOW WITH playerData.####

    return (
        <div id="boxTeamData">
            <div id="logoBoxAdmin">
                <img id="logoPhotoAdmin" src={'https://i.pravatar.cc'} alt={`logo`} />
            </div>
            <div id="boxTeamNameAdmin">
                <span id="teamNameAdmin" class="bStyle"> {placeHolder1} </span>
                <div id="teamButtonsAdmin">
                    <button class="editTeamAdmin">Edytuj</button>
                    <button class="deleteTeamAdmin">Usuń</button>
                </div>
            </div>
            <div id="boxCoachNameAdmin">
                <span id="coachNameAdmin" class="bStyle">TRENER: {placeHolder2} </span>
                <div id="coachButtonsAdmin">
                    <button class="editTeamAdmin">Edytuj</button>
                    <button class="deleteTeamAdmin">Usuń</button>
                </div>
            </div>
        </div>
    );
}

export default TeamData;