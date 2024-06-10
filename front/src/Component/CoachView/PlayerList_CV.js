import { useState, useEffect } from 'react';
import "../../Style/CoachView/PlayerList_CV.css";

const PlayerList_CV = ({ onSelectPlayer }) => {
    const [fetchedPlayers, setFetchedPlayers] = useState([]);

    useEffect(() => {
        fetch('YOUR_API_ENDPOINT')
            .then(response => response.json())
            .then(data => setFetchedPlayers(data))
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div id="playerList_CV">
            <div className="playerCard_CV addPlayerCard_CV">
                <img id="profPhoto_CV" src="https://i.pravatar.cc/99" alt="Tu będzie profilowe"/>
                <span className="playerName_CV bStyle">DODAJ ZAWODNIKA</span>
                <button className="copy_CV">Kopiuj</button>
            </div>
            {fetchedPlayers.map(player => (
                <div key={player.id} onClick={() => onSelectPlayer(player.id)} className="playerCard_CV">
                    <img src={player.profileImage} alt={`${player.firstName} ${player.lastName}`} />
                    <span className="playerName_CV">{`${player.firstName} ${player.lastName}`}</span>
                </div>
            ))}
        </div>
    );
}

export default PlayerList_CV;