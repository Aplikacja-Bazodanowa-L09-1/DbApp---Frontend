import { useState, useEffect } from 'react';
import "../../../Style/Admin/AdminTeamView/TeamList.css";

const TeamList = ({ onSelectTeam }) => {
    const [fetchedTeams, setFetchedTeams] = useState([]);

    /*useEffect(() => {
        fetch('YOUR_API_ENDPOINT')
            .then(response => response.json())
            .then(data => setFetchedTeams(data))
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);*/

    //Delete this when testing and uncomment the above
    useEffect(() => {
        // Mock data for testing
        const mockTeams = [
            { id: 1, logoImage: 'https://i.pravatar.cc/100?img=1', name: 'Stal Rzeszów'},
            { id: 2, logoImage: 'https://i.pravatar.cc/100?img=2', name: 'Stal Mielec'},
            { id: 3, logoImage: 'https://i.pravatar.cc/100?img=3', name: 'Stal Sanok'},
            { id: 4, logoImage: 'https://i.pravatar.cc/100?img=4', name: 'Cosmos Nowotaniec'},
            { id: 5, logoImage: 'https://i.pravatar.cc/100?img=1', name: 'Stal Rzeszów'},
            { id: 6, logoImage: 'https://i.pravatar.cc/100?img=2', name: 'Stal Mielec'},
            { id: 7, logoImage: 'https://i.pravatar.cc/100?img=3', name: 'Stal Sanok'},
            { id: 8, logoImage: 'https://i.pravatar.cc/100?img=4', name: 'Cosmos Nowotaniec'},
        ];

        setFetchedTeams(mockTeams);
    }, []);

    return (
        <div id="boxTeamList">
            <div id = "listOfTeams">
            {fetchedTeams.map(team => (
                <div key={team.id} onClick={() => onSelectTeam(team.id)} className="teamCard">
                    <img src={team.logoImage} alt={`${team.name}`} />
                    <span className="teamNameAdmin bStyle">{`${team.name}`}</span>
                </div>
            ))}
            </div>
        </div>
    );
}

export default TeamList;