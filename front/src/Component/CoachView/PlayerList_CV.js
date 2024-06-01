import { useState, useEffect, useRef } from 'react';
import "../../Style/CoachView/PlayerList_CV.css"

const PlayerList_CV = () => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('YOUR_API_ENDPOINT')
          .then(response => response.json())
          .then(data => setPlayers(data))
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    }, []);

    return (
        /*<div id="playerList_CV">
            <div class="playerCard_CV">
                <span class="playerName_CV bStyle">DODAJ ZAWODNIKA</span>
                <button class="copy_CV">Kopiuj</button>
            </div>
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
                </div>
            ))}
        </div>
    );
}

export default PlayerList_CV;