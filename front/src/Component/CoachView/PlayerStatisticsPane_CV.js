import { useState, useEffect } from 'react';
import "../../Style/CoachView/PlayerStatisticsPane_CV.css";

const PlayerStatisticsPane_CV = ({ playerId }) => {
    const [visibility, setVisibility] = useState({visibility: "hidden"});
    const [playerStats, setPlayerStats] = useState({
        goals: "",
        assists: "",
        red_cards: "",
        yellow_cards: "",
        attended_trainings: "",
        attended_matches: ""
    });


    const visibilityOn = () =>
    {
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';
        setVisibility({visibility: "visible"});
    }
    const visibilityOff = () =>
    {
        document.body.style.overflow = 'auto';
        setVisibility({visibility: "hidden"});
    }

    const fetchPlayerStats = async (playerId) => {
        console.log('select id', playerId)
        try {

                const response = await fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/coach/statistic?playerId=${playerId}`, {
                    mode: 'cors',
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": `Bearer ${localStorage.getItem('access_token')}`
                    }
                });
                const data = await response.json();
                if (data.detail) {
                    console.log('Error:', data.detail);
                } else {
                    console.log('Fetched data:', data.user_stats_view.player.player_stats);
                    setPlayerStats(data.user_stats_view.player.player_stats[0]) // Dodaj log
                    
                }
            } catch (error) {
                console.error('Error fetching player statistics:', error);
            }
    };

    const fetchUpdatePlayerstats = async (playerId) => {
        console.log('Updating stats for id:', playerId);
    fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/coach/statistic/update?playerId=${playerId}`, {
        mode: 'cors',
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${localStorage.getItem('access_token')}`
        },
        body: JSON.stringify( {
            goals: playerStats.goals,
            assists: playerStats.assists,
            red_cards: playerStats.red_cards,
            yellow_cards: playerStats.yellow_cards
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.detail) {
            console.log('Error:', data.detail);
        } else {
            console.log('Updated data:', data.body);
        }
    })
    .catch(error => {
        console.error('Error updating player statistics:', error);
    });
    };

    useEffect(() => {
        if (playerId) {
            fetchPlayerStats(playerId);
        }
    }, [playerId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPlayerStats((prevStats) => ({
            ...prevStats,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        // Implement the logic to save the updated statistics
        fetchUpdatePlayerstats(playerId)
        visibilityOff();
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
        placeHolder1 = playerStats.goals;
        placeHolder2 = playerStats.assists;
        placeHolder3 = playerStats.red_cards;
        placeHolder4 = playerStats.yellow_cards;
        placeHolder5 = playerStats.attended_trainings;
        placeHolder6 = playerStats.attended_matches;
    }
    //DELETE UP TO HERE AND REPLACE BELOW WITH THE RESPECTIVE VALUES

    return (
        <div id="playerStatisticsPane_CV">
            <h2 id="whiteFont" class="whiteTextShadow">Statystyki Zawodnika</h2>
            <div id="dataBoxStatisticsPane_CV">
                <div id="positionDeleteBox_CV">
                    <p><span className="bStyle playerPositionStyle" id="whiteFont">BRAMKARZ</span></p>
                    <button id="deleteButton_CV" onClick={visibilityOn}>Edytuj</button>
                </div>
                <p><span className="bStyle">Gole: {placeHolder1}</span></p>
                <p><span className="bStyle">Asysty: {placeHolder2}</span></p>
                <p><span className="bStyle">Czerwone Kartki: {placeHolder3}</span></p>
                <p><span className="bStyle">Żółte Kartki: {placeHolder4}</span></p>
                <p><span className="bStyle">Obecność Na Treningach: {placeHolder5}</span></p>
                <p><span className="bStyle">Obecność Na Meczach: {placeHolder6}</span></p>
            </div>
            <div id="survBox" style={visibility}>
                <div id="survWindow">
                    <div id="survTitle">Zmień Statystyki Gracza</div>
                    <div id="survInputs">
                        <div className="survOption">
                            Gole:
                            <input
                                type="number"
                                name="goals"
                                value={playerStats.goals}
                                onChange={handleInputChange}
                                min="0"
                            />
                        </div>
                        <div className="survOption">
                            Asysty:
                            <input
                                type="number"
                                name="assists"
                                value={playerStats.assists}
                                onChange={handleInputChange}
                                min="0"
                            />
                        </div>
                        <div className="survOption">
                            Żółte kartki:
                            <input
                                type="number"
                                name="yellowCards"
                                value={playerStats.yellow_cards}
                                onChange={handleInputChange}
                                min="0"
                            />
                        </div>
                        <div className="survOption">
                            Czerwone kartki:
                            <input
                                type="number"
                                name="redCards"
                                value={playerStats.red_cards}
                                onChange={handleInputChange}
                                min="0"
                            />
                        </div>
                    </div>
                    <div id="survButtons">
                        <div className="survBtn" id="exitBtn" onClick={visibilityOff}>X</div>
                        <div className="survBtn" id="okBtn" onClick={handleSubmit}>OK</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerStatisticsPane_CV;