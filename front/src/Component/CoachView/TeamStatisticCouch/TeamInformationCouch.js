import { useState, useEffect } from 'react';

import '../../../Style/CoachView/TeamStatisticCouch/TeamInformationCouch.css';
const TeamInformationCouch = () => {
    const [wins,setWins] = useState('')
    const [loses,setLoses] = useState('')
    const [draws,setDraws] = useState('')
    const [topScorer,setTopScorer]=useState('')
    const [leastCards,setLeastCards]=useState('')
    // atributs for edition - START
    const [winsedit,setWinsEdit] = useState('')
    const [losesedit,setLosesEdit] = useState('')
    const [drawsedit,setDrawsEdit] = useState('')
    const [topScoreredit,setTopScorerEdit]=useState('')
    const [leastCardsedit,setLeastCardsEdit]=useState('')
    // atributs for edition - END
    useEffect(() => {
        if(localStorage.getItem('team_stats.matches_won') !== null){
            setWins(localStorage.getItem('team_stats.matches_won'))
            setLoses(localStorage.getItem('team_stats.matches_lost'))
            setDraws(localStorage.getItem('team_stats.matches_drawn'))
            setTopScorer(localStorage.getItem('team_stats.top_scorer'))
            setLeastCards(localStorage.getItem('team_stats.least_cards'))
        }
        else{
            fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/team_stats/statistics/`, {
            mode: 'cors',
            method: 'GET',
            headers: {"Content-Type": "application/json", "authorization": `Berear ${localStorage.getItem('access_token')}`},
        }).then(response=>response.json()).then(data=>{
            if(data.detail){
                console.log(data.detail)
            }else{
                console.log(data.stats)
                setWins(data.stats.player.team_stat.matches_won)
                setLoses(data.stats.player.team_stat.matches_lost)
                setDraws(data.stats.player.team_stat.matches_drawn)
                setTopScorer(data.stats.player.team_stat.top_scorer)
                setLeastCards(data.stats.player.team_stat.least_cards)

                localStorage.setItem('team_stats.matches_won', data.stats.player.team_stat.matches_won)
                localStorage.setItem('team_stats.matches_lost', data.stats.player.team_stat.matches_lost)
                localStorage.setItem('team_stats.matches_drawn', data.stats.player.team_stat.matches_drawn)
                localStorage.setItem('team_stats.top_scorer', data.stats.player.team_stat.top_scorer)
                localStorage.setItem('team_stats.least_cards', data.stats.player.team_stat.least_cards)
            }
            
        })
        }
    })
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
        const [visibility, setVisibility] = useState({visibility: "hidden"});
    return (
        <div id="informationcouchmain" className='paneShadow'>
                <div className='informationcouchblocks'>
                    <div className='informationcouchleft'>Ilość Wygranych Meczy</div>
                    <div className='informationcouchright'>{wins}</div>
                </div>
                <div className='informationcouchblocks'>
                    <div className='informationcouchleft'>Ilość Przegranych Meczy</div>
                    <div className='informationcouchright'>{loses}</div>
                </div>
                <div className='informationcouchblocks'>
                    <div className='informationcouchleft'>Ilość Remisów</div>
                    <div className='informationcouchright'>{draws}</div>
                </div>
                <div className='informationcouchblocks'>
                    <div className='informationcouchleft'>Najlepszy Strzelec</div>
                    <div className='informationcouchright'>{topScorer}</div>
                </div>
                <div className='informationcouchblocks'>
                    <div className='informationcouchleft'>Najmniejsza Ilość Kartek</div>
                    <div className='informationcouchright'>{leastCards}</div>
                </div>
                <br/>
                <div id="couchinformationdiv">
                    <button id="couchinformationbutton" onClick={visibilityOn}><b>Edytuj</b></button>
                </div>
                <div id="editBox" style={visibility} >
                    <div id="editWindow">
                        <div id="editTitle">
                            Statystyki Drużyny
                        </div>
                        <div id="editInputs">
                            <div className="editOption">
                                <div className='editlefttext'>Ilość Wygranych Meczy</div>
                                <div className='editright'>
                                    <input type="text" name="" id="" min="0" placeholder={wins} onChange={(e)=>setWinsEdit(e.target.value)}/>
                                </div>
                            </div>
                            <div className="editOption">
                                <div className='editlefttext'>Ilość Przegranych Meczy:</div>
                                <div className='editright'>
                                    <input type="text" name="" id="" min="0" placeholder={loses} onChange={(e)=>setLosesEdit(e.target.value)}/>
                                </div>
                            </div>
                            <div className="editOption">
                                <div className='editlefttext'>Ilość Remisów:</div>
                                <div className='editright'>
                                    <input type="text" name="" id="" min="0" placeholder={draws} onChange={(e)=>setDrawsEdit(e.target.value)}/>
                                </div>
                            </div>
                            <div className="editOption txtOpt">
                            <div className='editlefttext'>Najlepszy Strzelec:</div>
                                <div className='editright'>
                                    <input type="text" name="" id=""  placeholder={topScorer} onChange={(e)=>setTopScorerEdit(e.target.value)}/>
                                </div>
                            </div>
                            <div className="editOption txtOpt">
                                <div className='editlefttext'>Najmniejsza Ilość Kartek:</div>
                                <div className='editright'>
                                    <input type="text" name="" id=""  placeholder={leastCards} onChange={(e)=>setLeastCardsEdit(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div id="editButtons">
                            <div class="editBtn" id="okBtn" onClick={visibilityOff}>OK</div>
                        </div>
                    </div>
                </div>
        </div>
     );
}
 
export default TeamInformationCouch;