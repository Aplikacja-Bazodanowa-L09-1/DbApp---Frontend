import '../../Style/TeamStatistic/TeamPhoto.css';
import { useState } from 'react';
const TeamPhoto = () => {
    const [teamimage,setTeamImage]=useState();
    
    return ( 
        <div id="teamphotoblock" className='paneShadow'>
            <img id="tableligimg" src={teamimage}/>
        </div>
     );
}
 
export default TeamPhoto;