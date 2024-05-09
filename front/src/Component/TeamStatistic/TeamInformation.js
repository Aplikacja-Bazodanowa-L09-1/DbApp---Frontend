import { useState } from 'react';
import '../../Style/TeamStatistic/TeamInformation.css'

const TeamInformation = () => {
    const [ustawienia,setUstawienia]=useState(
        {
            wins:'3',
            loses:'1',
            draws:'2',
            bestScorrer:'Nikodem Szytuła',
            lastExceedances:'Antoni Wołkowicz'
        }
    );

    return ( 
        <div>
            <div id="informationheader">Statystyki Drużyny</div>
            <div id="informationmain">
                <br/>
                <div className='informationblocks'>
                    <div className='informationleft'>Ilość Wygranych Meczy</div>
                    <div className='informationright'>{ustawienia.wins}</div>
                </div>
                <div className='informationblocks'>
                    <div className='informationleft'>Ilość Przegranych Meczy</div>
                    <div className='informationright'>{ustawienia.loses}</div>
                </div>
                <div className='informationblocks'>
                    <div className='informationleft'>Ilość Remisów</div>
                    <div className='informationright'>{ustawienia.draws}</div>
                </div>
                <div className='informationblocks'>
                    <div className='informationleft'>Najlepszy Strzelec</div>
                    <div className='informationright'>{ustawienia.bestScorrer}</div>
                </div>
                <div className='informationblocks'>
                    <div className='informationleft'>Najmniejsza Ilość Kartek</div>
                    <div className='informationright'>{ustawienia.lastExceedances}</div>
                </div>
                <br/><br/>
            </div>
        </div>
     );
}
 
export default TeamInformation;