import { useState, useEffect } from 'react';
import "../../Style/CoachView/PlayerList_CV.css";

const PlayerList_CV = ({ onSelectPlayer }) => {
    const [fetchedPlayers, setFetchedPlayers] = useState([]);

    /*useEffect(() => {
        fetch('YOUR_API_ENDPOINT')
            .then(response => response.json())
            .then(data => setFetchedPlayers(data))
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);*/

    //Delete this when testing and uncomment the above
    useEffect(() => {
        // Mock data for testing
        const mockPlayers = [
            { id: 1, profileImage: 'https://i.pravatar.cc/100?img=1', firstName: 'John', lastName: 'Doe', position: 'BR' },
            { id: 2, profileImage: 'https://i.pravatar.cc/100?img=2', firstName: 'Jane', lastName: 'Smith', position: 'LO' },
            { id: 3, profileImage: 'https://i.pravatar.cc/100?img=3', firstName: 'Mike', lastName: 'Johnson', position: 'PO' },
            { id: 4, profileImage: 'https://i.pravatar.cc/100?img=4', firstName: 'Emily', lastName: 'Davis', position: 'CPS' },
            { id: 5, profileImage: 'https://i.pravatar.cc/100?img=5', firstName: 'Chris', lastName: 'Brown', position: 'CLS' },
            { id: 6, profileImage: 'https://i.pravatar.cc/100?img=6', firstName: 'Jessica', lastName: 'Wilson', position: 'ŚO' },
            { id: 7, profileImage: 'https://i.pravatar.cc/100?img=7', firstName: 'David', lastName: 'Miller', position: 'LS' },
            { id: 8, profileImage: 'https://i.pravatar.cc/100?img=8', firstName: 'Laura', lastName: 'Martinez', position: 'PS' },
        ];

        setFetchedPlayers(mockPlayers);
    }, []);

    return (
        <div id="playerList_CV">
            <div className="addPlayerCard_CV">
                <i class="icon-plus-alternative"/>
                <span className="playerName_CV bStyle">DODAJ ZAWODNIKA</span>
                <button className="copy_CV">Kopiuj</button>
            </div>
            <div id = "listOfPlayers_CV">
            {fetchedPlayers.map(player => (
                <div key={player.id} onClick={() => onSelectPlayer(player.id)} className="playerCard_CV">
                    <img src={player.profileImage} alt={`${player.firstName} ${player.lastName}`} />
                    <span className="playerName_CV bStyle">{`${player.firstName} ${player.lastName} ${player.position}`}</span>
                </div>
            ))}
            </div>
        </div>
    );
}

export default PlayerList_CV;