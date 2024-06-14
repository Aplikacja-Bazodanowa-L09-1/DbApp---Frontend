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
        placeHolder1 = " ";
        placeHolder2 = " ";
    }

    //DELETE UP TO HERE AND REPLACE BELOW WITH playerData.####

    return (
        <div id="boxTeamData">
            <div id="logoBoxAdmin">
                <img src={'https://i.pravatar.cc'} alt={`asdasd`} id="logoPhotoAdmin" />
            </div>
            <div id="boxTeamNameAdmin">
                <span id="teamNameAdmin" class="bStyle">Liverpool F.C.</span>
                <div id="teamButtonsAdmin">
                    <button class="editTeamAdmin">Edytuj</button>
                    <button class="deleteTeamAdmin">Usuń</button>
                </div>
            </div>
            <div id="boxCoachNameAdmin">
                <span id="coachNameAdmin" class="bStyle">Michał Ziutek</span>
                <div id="coachButtonsAdmin">
                    <button class="editTeamAdmin">Edytuj</button>
                    <button class="deleteTeamAdmin">Usuń</button>
                </div>
            </div>
        </div>
    );
}

export default TeamData;