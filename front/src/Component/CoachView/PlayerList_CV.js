import { useState, useEffect } from 'react';
import "../../Style/CoachView/PlayerList_CV.css";

const PlayerList_CV = ({ onSelectPlayer,sharedState }) => {
    const [fetchedPlayers, setFetchedPlayers] = useState([]);
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const [players, setPlayers] = useState([]);

    const fetchPlayerList_CV = () => {
        fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/coach/list/`, {
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
                setFetchedPlayers(data.list)
                console.log(fetchedPlayers)
            }
        })
    }
    useEffect(() => {
        fetchPlayerList_CV()
    }, [sharedState])

    const handleCopyClick = async () => {
        try {
            const response = await fetch('YOUR_BACKEND_ENDPOINT');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // Assume the link is returned in the `link` field of the response data
            const link = data.link;

            // Handle copying the link to the stash here (e.g., using the Clipboard API)
            navigator.clipboard.writeText(link).then(() => {
                window.alert('Link copied successfully: ' +{link});
            });
        } catch (error) {
            console.error('Error fetching link:', error);
            setAlertMessage('Failed to copy link.');
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
        }
        window.alert("asdasddasd")
    };

    return (
        <div id="playerList_CV">
            <div className="addPlayerCard_CV">
                <i class="icon-plus-alternative"/>
                <span className="addName_CV bStyle">DODAJ ZAWODNIKA</span>
                <button className="copy_CV" onClick={handleCopyClick}>Kopiuj</button>
            </div>
            <div id = "listOfPlayers_CV">
                {fetchedPlayers.map(player => (
                    <div key={player.id} onClick={() => onSelectPlayer(player.id)} className="playerCard_CV">
                        <img src={'https://i.pravatar.cc/100?img=1'} alt={`${player.first_name} ${player.lastName}`} />
                        <span className="playerName_CV bStyle">{`${player.first_name} ${player.last_name} ${player.player.player_positions.map(position => position.position.position_code)}`}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlayerList_CV;