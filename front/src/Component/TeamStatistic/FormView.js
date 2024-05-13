import { useState } from 'react';
import '../../Style/TeamStatistic/FormView.css'

const FormView = () => {
    const [clubinfo,setClubinfo]=useState('FC Barcelona');
    const [sportEvent,setSportEvent]=useState('Wyjazd');
    const [date,setDate]=useState('21.04.2024');
    const [hour,setHour]=useState('18:00');
    const [players,setPlayers]=useState(
        {
            max:'16',
            active:'7'
        }
    );
    return ( 
        <div id="mainhead">
            <label id="formlabel">Wynik Ankiety</label>
            <div id="formmain">
                <div id="formleft">
                    <div id="formclub">
                        <img src="" alt='zdjecie' id="frontimage"/>
                        <div id="formclubinfo">
                            {clubinfo}<br/>
                            {sportEvent}
                        </div>
                    </div>
                    <button id="formbutton">Podgląd</button>
                </div>
                <div id="formright">
                    <div id="formdate">{date}<br/>{hour} </div>
                    <br/><br/>
                    <div id="formhowmany">
                        {players.active}/{players.max}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FormView;