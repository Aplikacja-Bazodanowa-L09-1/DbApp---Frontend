import { useState, useEffect } from 'react';
import '../../../Style/CoachView/TeamStatisticCouch/TeamInformationCouch.css';

const TeamInformationCouch = () => {
    const [wins, setWins] = useState('');
    const [loses, setLoses] = useState('');
    const [draws, setDraws] = useState('');
    const [topScorer, setTopScorer] = useState('');
    const [leastCards, setLeastCards] = useState('');
    const [visibility, setVisibility] = useState({ visibility: "hidden" });

    useEffect(() => {
        const savedStats = {
            matches_won: localStorage.getItem('team_stats.matches_won'),
            matches_lost: localStorage.getItem('team_stats.matches_lost'),
            matches_drawn: localStorage.getItem('team_stats.matches_drawn'),
            top_scorer: localStorage.getItem('team_stats.top_scorer'),
            least_cards: localStorage.getItem('team_stats.least_cards')
        };

        if (savedStats.matches_won !== null) {
            setWins(savedStats.matches_won);
            setLoses(savedStats.matches_lost);
            setDraws(savedStats.matches_drawn);
            setTopScorer(savedStats.top_scorer);
            setLeastCards(savedStats.least_cards);
        } else {
            fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/team_stats/statistics/`, {
                mode: 'cors',
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem('access_token')}`
                },
            })
                .then(response => response.json())
                .then(data => {
                    if (data.detail) {
                        console.log(data.detail);
                    } else {
                        console.log(data.stats);
                        setWins(data.stats.player.team_stat.matches_won);
                        setLoses(data.stats.player.team_stat.matches_lost);
                        setDraws(data.stats.player.team_stat.matches_drawn);
                        setTopScorer(data.stats.player.team_stat.top_scorer);
                        setLeastCards(data.stats.player.team_stat.least_cards);

                        localStorage.setItem('team_stats.matches_won', data.stats.player.team_stat.matches_won);
                        localStorage.setItem('team_stats.matches_lost', data.stats.player.team_stat.matches_lost);
                        localStorage.setItem('team_stats.matches_drawn', data.stats.player.team_stat.matches_drawn);
                        localStorage.setItem('team_stats.top_scorer', data.stats.player.team_stat.top_scorer);
                        localStorage.setItem('team_stats.least_cards', data.stats.player.team_stat.least_cards);
                    }
                })
                .catch(error => console.error('Error fetching data:', error));
        }
    }, []);

    const visibilityOn = () => {
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';
        setVisibility({ visibility: "visible" });
    };

    const visibilityOff = () => {
        document.body.style.overflow = 'auto';
        setVisibility({ visibility: "hidden" });

        localStorage.setItem('team_stats.matches_won', wins);
        localStorage.setItem('team_stats.matches_lost', loses);
        localStorage.setItem('team_stats.matches_drawn', draws);
        localStorage.setItem('team_stats.top_scorer', topScorer);
        localStorage.setItem('team_stats.least_cards', leastCards);
    };

    const handleSubmit = () => {
        updateStatistics({
            matches_won: wins,
            matches_lost: loses,
            matches_drawn: draws,
            top_scorer: topScorer,
            least_cards: leastCards
        });
        visibilityOff();
    };
    const updateStatistics = (data) => {
        fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/coach/teamstatistic/update`, {
            mode: 'cors',
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${localStorage.getItem('access_token')}`
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(responseData => {
                console.log('Statistics updated successfully:', responseData);
                localStorage.setItem('team_stats.matches_won', data.matches_won);
                localStorage.setItem('team_stats.matches_lost', data.matches_lost);
                localStorage.setItem('team_stats.matches_drawn', data.matches_drawn);
                localStorage.setItem('team_stats.top_scorer', data.top_scorer);
                localStorage.setItem('team_stats.least_cards', data.least_cards);
            })
            .catch(error => console.error('Error updating statistics:', error));
    };
    return (
        <div id="informationcouchmain" className='paneShadow'>
            <div className='informationcouchblocks'>
                <div className='informationcouchleft bStyle'>Ilość Wygranych Meczy:</div>
                <div className='informationcouchright'>{wins}</div>
            </div>
            <div className='informationcouchblocks'>
                <div className='informationcouchleft bStyle'>Ilość Przegranych Meczy:</div>
                <div className='informationcouchright'>{loses}</div>
            </div>
            <div className='informationcouchblocks'>
                <div className='informationcouchleft bStyle'>Ilość Remisów:</div>
                <div className='informationcouchright'>{draws}</div>
            </div>
            <div className='informationcouchblocks'>
                <div className='informationcouchleft bStyle'>Najlepszy Strzelec:</div>
                <div className='informationcouchright'>{topScorer}</div>
            </div>
            <div className='informationcouchblocks'>
                <div className='informationcouchleft bStyle'>Najmniejsza Ilość Kartek:</div>
                <div className='informationcouchright'>{leastCards}</div>
            </div>
            <br />
            <div id="couchinformationdiv">
                <button id="couchinformationbutton" onClick={visibilityOn}><b>Edytuj</b></button>
            </div>
            <div id="editBox" style={visibility}>
                <div id="editWindow">
                    <div id="editTitle">
                        Statystyki Drużyny
                    </div>
                    <div id="editInputs">
                        <div className="editOption">
                            <div className='editlefttext'>Ilość Wygranych Meczy</div>
                            <div className='editright'>
                                <input type="number" min="0" value={wins} onChange={(e) => setWins(e.target.value)} />
                            </div>
                        </div>
                        <div className="editOption">
                            <div className='editlefttext'>Ilość Przegranych Meczy:</div>
                            <div className='editright'>
                                <input type="number" min="0" value={loses} onChange={(e) => setLoses(e.target.value)} />
                            </div>
                        </div>
                        <div className="editOption">
                            <div className='editlefttext'>Ilość Remisów:</div>
                            <div className='editright'>
                                <input type="number" min="0" value={draws} onChange={(e) => setDraws(e.target.value)} />
                            </div>
                        </div>
                        <div className="editOption txtOpt">
                            <div className='editlefttext'>Najlepszy Strzelec:</div>
                            <div className='editright'>
                                <input type="text" value={topScorer} onChange={(e) => setTopScorer(e.target.value)} />
                            </div>
                        </div>
                        <div className="editOption txtOpt">
                            <div className='editlefttext'>Najmniejsza Ilość Kartek:</div>
                            <div className='editright'>
                                <input type="text" value={leastCards} onChange={(e) => setLeastCards(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div id="editButtons">
                        <div className="editBtn" id="okBtn" onClick={handleSubmit}>OK</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamInformationCouch;
