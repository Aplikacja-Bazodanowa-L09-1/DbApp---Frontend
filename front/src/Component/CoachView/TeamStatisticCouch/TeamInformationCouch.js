import { useState, useEffect } from 'react';

import '../../../Style/CoachView/TeamStatisticCouch/TeamInformationCouch.css';
const TeamInformationCouch = () => {
    const [wins,setWins] = useState('')
    const [loses,setLoses] = useState('')
    const [draws,setDraws] = useState('')
    const [topScorer,setTopScorer]=useState('')
    const [leastCards,setLeastCards]=useState('')
    const [iswrite,setIsWrite]=useState(false)
    const [isview,setIsView]=useState(true)
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

    const changeInformation =()=>{
        setIsWrite(true);
        setIsView(false);
    }
    const saveChanges=()=>{
        setIsWrite(false);
        setIsView(true);
    }

    return ( 
        <div>
            <div id="informationheader">Statystyki Drużyny</div>
            <div id="informationmain">
                <br/>
                <div className='informationblocks'>
                    <div className='informationleft'>Ilość Wygranych Meczy</div>
                    {isview && <div className='informationright'>{wins}</div>}
                    {iswrite && <div className='informationright'>
                         <input type='text' className='couchinformationinput' value={wins} onChange={(e)=>setWins(e.target.value)}/>
                    </div>}
                </div>
                <div className='informationblocks'>
                    <div className='informationleft'>Ilość Przegranych Meczy</div>
                    {isview &&<div className='informationright'>{loses}</div>}
                    {iswrite && <div className='informationright'>
                         <input type='text' className='couchinformationinput' value={loses} onChange={(e)=>setLoses(e.target.value)}/>
                    </div>}
                </div>
                <div className='informationblocks'>
                    <div className='informationleft'>Ilość Remisów</div>
                    { isview && <div className='informationright'>
                        {draws}
                    </div>}
                    {iswrite && <div className='informationright'>
                         <input type='text' className='couchinformationinput' value={draws} onChange={(e)=>setDraws(e.target.value)}/>
                    </div>}
                </div>
                <div className='informationblocks'>
                    <div className='informationleft'>Najlepszy Strzelec</div>
                    {isview && <div className='informationright'>
                        {topScorer}
                    </div>}
                    {iswrite && <div className='informationright'>
                         <input type='text' className='couchinformationinput' value={topScorer} onChange={(e)=>setTopScorer(e.target.value)}/>
                    </div>}
                </div>
                <div className='informationblocks'>
                    <div className='informationleft'>Najmniejsza Ilość Kartek</div>
                    {isview &&<div className='informationright'>
                        {leastCards}
                    </div>}
                    {iswrite && <div className='informationright'>
                         <input type='text' className='couchinformationinput' value={leastCards} onChange={(e)=>setLeastCards(e.target.value)}/>
                    </div>}
                </div>
                <br/><br/>
                {isview &&<div id="couchinformationdiv">
                    <button id="couchinformationbutton" onClick={changeInformation}>Edytuj</button>
                </div>}
                {iswrite &&<div id="couchinformationdiv">
                    <button id="couchinformationbutton" onClick={saveChanges}>Save</button>
                </div>}
            </div>
        </div>
     );
}
 
export default TeamInformationCouch;