import { useState } from "react";
import '../../Style/TeamStatistic/Club.css';

const Club = () => {
    const[clubname,setClubName]=useState('Nazwa klubu');
    const[trener,setTrener]=useState('Nazwa Trenera');
    return ( 
        <div id="club">
            <div id="clubimage">
                <img alt="Logo klubu" id="clublogo"/>
            </div>
            <div id="clubinformation">
                <div className="clubnazwa"><label><b>{clubname}</b></label></div>
                <br/>
                <div className="clubnazwa"><label>Trener - {trener}</label></div>
            </div>
        </div>
     );
}
 
export default Club;