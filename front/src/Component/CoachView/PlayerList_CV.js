<<<<<<< Updated upstream
import { useState, useEffect, useRef } from 'react';
import "../../Style/CoachView/PlayerList_CV.css"
=======
import { useState, useEffect} from 'react';

import "../../Style/CoachView/PlayerList_CV.css";
>>>>>>> Stashed changes

<<<<<<< Updated upstream
const PlayerList_CV = () => {
=======
const PlayerList_CV = ({ onSelectPlayer,sharedState }) => {
    const [fetchedPlayers, setFetchedPlayers] = useState([]);
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
>>>>>>> Stashed changes

    const [players, setPlayers] = useState([]);
    const [createPlayerToken, setCreatePlayerToken] = useState()
    

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

<<<<<<< Updated upstream
<<<<<<< Updated upstream
    useEffect(() => {
        fetch('YOUR_API_ENDPOINT')
          .then(response => response.json())
          .then(data => setPlayers(data))
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    }, []);
=======
    // useEffect(() => {
    //     fetch('YOUR_API_ENDPOINT')
    //         .then(response => response.json())
    //         .then(data => setFetchedPlayers(data))
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, []);

    //Delete this when testing and uncomment the above
    // useEffect(() => {
    //     // Mock data for testing
    //     const mockPlayers = [
    //         { id: 1, profileImage: 'https://i.pravatar.cc/100?img=1', firstName: 'John', lastName: 'Doe', position: 'BR' },
    //         { id: 2, profileImage: 'https://i.pravatar.cc/100?img=2', firstName: 'Jane', lastName: 'Smith', position: 'LO' },
    //         { id: 3, profileImage: 'https://i.pravatar.cc/100?img=3', firstName: 'Mike', lastName: 'Johnson', position: 'PO' },
    //         { id: 4, profileImage: 'https://i.pravatar.cc/100?img=4', firstName: 'Emily', lastName: 'Davis', position: 'CPS' },
    //         { id: 5, profileImage: 'https://i.pravatar.cc/100?img=5', firstName: 'Chris', lastName: 'Brown', position: 'CLS' },
    //         { id: 6, profileImage: 'https://i.pravatar.cc/100?img=6', firstName: 'Jessica', lastName: 'Wilson', position: 'ŚO' },
    //         { id: 7, profileImage: 'https://i.pravatar.cc/100?img=7', firstName: 'David', lastName: 'Miller', position: 'LS' },
    //         { id: 8, profileImage: 'https://i.pravatar.cc/100?img=8', firstName: 'Laura', lastName: 'Martinez', position: 'PS' },
    //     ];

    //     setFetchedPlayers(mockPlayers);
    // }, []);
>>>>>>> Stashed changes

    const fetchCreatePlayerToken = async () => {
        fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/coach/getCreatePlayerToken`, {
            method: 'GET',
            mode: 'cors',
            headers: { "Content-Type": "application/json", "authorization": `Berear ${localStorage.getItem('access_token')}` },
        }).then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }
=======
    const handleCopyClick = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/coach/getCreatePlayerToken/`,{
                method: 'GET',
                mode: 'cors',
                headers: { "Content-Type": "application/json", "authorization": `Berear ${localStorage.getItem('access_token')}`},
            }).then(response => response.json())
            .then(data => {
                setCreatePlayerToken(data.createPlayerToken)
                console.log(createPlayerToken)
            })
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
        
        window.alert(createPlayerToken ? `Link do tworzenia zawodnika: \n ${process.env.REACT_APP_FRONT_ADDRESS}/registrationform/${createPlayerToken} \n Skopiowano do schowka` : 'Error')
        navigator.clipboard.writeText(`${process.env.REACT_APP_FRONT_ADDRESS}/registrationform/${createPlayerToken}`)
    };
>>>>>>> Stashed changes

    return (
<<<<<<< Updated upstream
        /*<div id="playerList_CV">
            <div class="playerCard_CV">
                <span class="playerName_CV bStyle">DODAJ ZAWODNIKA</span>
                <button class="copy_CV">Kopiuj</button>
=======
        <div id="playerList_CV">
            <div className="playerCard_CV addPlayerCard_CV">
                <img id="profPhoto_CV" src="https://i.pravatar.cc/99" alt="Tu będzie profilowe"/>
                <span className="playerName_CV bStyle">DODAJ ZAWODNIKA</span>
                <button className="copy_CV" onClick={fetchCreatePlayerToken}>Kopiuj</button>
>>>>>>> Stashed changes
            </div>
<<<<<<< Updated upstream
            <div class="playerCard_CV">
                <img id="profPhoto_CV" src="https://i.pravatar.cc/100" alt="Tu będzie profilowe"/>
                <span class="playerName_CV">Niko Szytuła BR</span>
                <button class="editButton_CV">&#x21bb;</button>
            </div>
            <div class="playerCard_CV">
                <img id="profPhoto_CV" src="https://i.pravatar.cc/101" alt="Tu będzie profilowe"/>
                <span class="playerName_CV">Dawid Szymonik ŚO</span>
                <button class="editButton_CV">&#x21bb;</button>
            </div>
            <div class="playerCard_CV">
            <img id="profPhoto_CV" src="https://i.pravatar.cc/102" alt="Tu będzie profilowe"/>
                <span class="playerName_CV">Jan Szczepański LO</span>
                <button class="editButton_CV">&#x21bb;</button>
            </div>
            <div class="playerCard_CV">
                <img id="profPhoto_CV" src="https://i.pravatar.cc/103" alt="Tu będzie profilowe"/>
                <span class="playerName_CV">Kacper Tulecki PO</span>
                <button class="editButton_CV">&#x21bb;</button>
            </div>
            <div class="playerCard_CV">
                <img id="profPhoto_CV" src="https://i.pravatar.cc/104" alt="Tu będzie profilowe"/>
                <span class="playerName_CV">Dawid Stygar CLS</span>
                <button class="editButton_CV">&#x21bb;</button>
            </div>
            <div class="playerCard_CV">
                <img id="profPhoto_CV" src="https://i.pravatar.cc/105" alt="Tu będzie profilowe"/>
                <span class="playerName_CV">Michał Janik CPS</span>
                <button class="editButton_CV">&#x21bb;</button>
            </div>
        </div>*/

        <div id="playerList_CV">
            <div class="playerCard_CV addPlayerCard_CV">
                <img id="profPhoto_CV" src="https://i.pravatar.cc/99" alt="Tu będzie profilowe"/>
                <span class="playerName_CV bStyle">DODAJ ZAWODNIKA</span>
                <button class="copy_CV">Kopiuj</button>
            </div>
            {players.map(player => (
                <div key={player.id} className="playerCard_CV">
                    <img src={player.profileImage} alt={`${player.firstName} ${player.lastName}`} />
                    <span class="playerName_CV">`${player.firstName} ${player.lastName}`</span>
=======
            <div id = "listOfPlayers_CV">
            {fetchedPlayers.map(player => (
                <div key={player.id} onClick={() => onSelectPlayer(player.id)} className="playerCard_CV">
                    <img src={'https://i.pravatar.cc/100?img=1'} alt={`${player.first_name} ${player.lastName}`} />
                    <span className="playerName_CV bStyle">{`${player.first_name} ${player.last_name} ${player.player.player_positions.map(position => position.position.position_code)}`}</span>
>>>>>>> Stashed changes
                </div>
            ))}
        </div>
    );
}

export default PlayerList_CV;