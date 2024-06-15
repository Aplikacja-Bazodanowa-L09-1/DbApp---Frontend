import { useState, useEffect } from 'react';
import "../../../Style/Admin/AdminTeamView/TeamList.css";

const TeamList = ({ onSelectTeam,sharedState }) => {
    const [fetchedTeams, setFetchedTeams] = useState([]);

    /*useEffect(() => {
        fetch('YOUR_API_ENDPOINT')
            .then(response => response.json())
            .then(data => setFetchedTeams(data))
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);*/

    const fetchTeamList = () => {
        fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/coach/list/`, { //CHANGE PATH BACKEND
            mode: 'cors',
            method: 'GET',
            headers: { "Content-Type": "application/json", "authorization": `Berear ${localStorage.getItem('access_token')}` },
        }).then(response => response.json()).then(data => {
            if (data.detail) {
                console.log(data.detail)
            } else {
                
                //console.log(data.eq)
                // for(let i=0; i<data.eq.length; i++){
                //     console.log(data.eq[i])
                //     setAEquipment([])
                // }
                setFetchedTeams(data.list)
                console.log(fetchedTeams)
            }
        })
    }

    //Delete this when testing and uncomment the above
    useEffect(() => {
        fetchTeamList()
    }, [sharedState])

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