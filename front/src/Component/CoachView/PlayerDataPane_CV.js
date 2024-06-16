import { useState, useEffect } from 'react';
import "../../Style/CoachView/PlayerDataPane_CV.css";

const PlayerDataPane_CV = ({ playerId }) => {
    const [playerData, setPlayerData] = useState(null);
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const fetchPlayerData = async (playerId) => {
        try {
            const response = await fetch(`https://api.example.com/players/${playerId}`);
            const data = await response.json();
            setPlayerData(data);
        } catch (error) {
            console.error('Error fetching player data:', error);
        }
    };

    useEffect(() => {
        if (playerId) {
            fetchPlayerData(playerId);
        }
    }, [playerId]);

    const handleDeleteClick = async () => {
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
                window.confirm('Do you want to delete this player?');
            });
        } catch (error) {
            console.error('Error fetching link:', error);
            setAlertMessage('Failed to copy link.');
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
        }
        window.confirm('Do you want to delete this player?');
    };

    //DELETE THESE WHEN ITS ALL CONNECTED
    let placeHolder1 = null
    let placeHolder2 = null
    let placeHolder3 = null
    let placeHolder4 = null
    let placeHolder5 = null
    let placeHolder6 = null

    if (!playerId) {
        placeHolder1 = " ";
        placeHolder2 = " ";
        placeHolder3 = " ";
        placeHolder4 = " ";
        placeHolder5 = " ";
        placeHolder6 = " ";
    } else {
        placeHolder1 = playerData.dateOfBirth;
        placeHolder2 = playerData.height;
        placeHolder3 = playerData.weight
        placeHolder4 = playerData.bootSize;
        placeHolder5 = playerData.email;
        placeHolder6 = playerData.phoneNumber;
    }
    //DELETE UP TO HERE AND REPLACE BELOW WITH playerData.####

    return (
        <div id="playerDataPane_CV">
            <h2 id="whiteFont" class="whiteTextShadow">Dane Zawodnika</h2>
            <div id="dataBoxDataPane_CV">
                <div id="positionDeleteBox_CV">
                    <p><span className="bStyle playerPositionStyle">BRAMKARZ</span></p>
                    <button id="deleteButton_CV" onClick={handleDeleteClick}>Usuń</button>
                </div>
                <p><span className="bStyle">Data Urodzenia: {placeHolder1}</span></p>
                <p><span className="bStyle">Wzrost: {placeHolder2} cm</span></p>
                <p><span className="bStyle">Waga: {placeHolder3} Kg</span></p>
                <p><span className="bStyle">Rozmiar Buta: {placeHolder4}</span></p>
                <p><span className="bStyle">Mail: {placeHolder5}</span></p>
                <p><span className="bStyle">Nr Telefonu: {placeHolder6}</span></p>
            </div>
        </div>
    );
}

export default PlayerDataPane_CV;