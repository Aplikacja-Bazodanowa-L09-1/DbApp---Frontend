import { useState } from 'react';
import '../Style/TeamStatistic.css'

const TeamStatistic = () => {
    const [trener,setTrener]=useState('Kamil');
    const [klub,setKlub]=useState('Liverpool F.C');
    
    return ( 
        <div id="main">
            <div id="widget">
                <div className="option">
                    1
                </div>
                <div className="option">
                    2
                </div>
                <div className="option">
                    3
                </div>
                <div className="option">
                    4
                </div>
            </div>

            <div id="cases">
                <div className='blocks'>
                    <div id="club">
                        <div id="image">sadgsfg</div>
                        <div id="info">
                            <div id="klub"><b><label>{klub}</label></b></div>
                            <div id="trener"><label>Trener - {trener}</label></div>
                        </div>
                    </div>
                
                    <div id="statistic">
                        <div>
                            <div>gh</div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                
                <div className='blocks'>
                    <div id="teamstatistic">
                        <div className='details'>
                            <div className='left'>Ilosc wygranych meczy</div>
                            <div className='right'>1</div>
                        </div>
                        <div className='details'>
                            <div className='left'>Ilość przegranych meczy</div>
                            <div className='right'>2</div>
                        </div>
                        <div className='details'>
                            <div className='left'>Ilość remisów</div>
                            <div className='right'>3</div>
                        </div>
                        <div className='details'>
                            <div className='left'>Najlepszy strzelec</div>
                            <div className='right'>4</div>
                        </div>
                        <div className='details'>
                            <div className='left'>Najmniejsza ilość kartek</div>
                            <div className='right'>5</div>
                        </div>
                    </div>
                    
                    <div id="table">
                        lig table
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default TeamStatistic;