import { useState, useEffect } from 'react';
import '../../Style/TeamStatistic/TeamInformation.css'

const TeamInformation = () => {
    const [wins,setWins] = useState('')
    const [loses,setLoses] = useState('')
    const [draws,setDraws] = useState('')
    const [topScorer,setTopScorer]=useState('')
    const [leastCards,setLeastCards]=useState('')

    
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

    return ( 
            <div id="informationmain" className='paneShadow'>
                <br/>
                <div className='informationblocks'>
                    <div className='informationleft bStyle'>Ilość Wygranych Meczy:</div>
                    <div className='informationright'>{wins}</div>
                </div>
                <div className='informationblocks'>
                    <div className='informationleft bStyle'>Ilość Przegranych Meczy:</div>
                    <div className='informationright'>{loses}</div>
                </div>
                <div className='informationblocks'>
                    <div className='informationleft bStyle'>Ilość Remisów:</div>
                    <div className='informationright'>{draws}</div>
                </div>
                <div className='informationblocks'>
                    <div className='informationleft bStyle'>Najlepszy Strzelec:</div>
                    <div className='informationright'>{topScorer}</div>
                </div>
                <div className='informationblocks'>
                    <div className='informationleft bStyle'>Najmniejsza Ilość Kartek:</div>
                    <div className='informationright'>{leastCards}</div>
                </div>
                <br/><br/>
            </div>
     );
}
 
export default TeamInformation;