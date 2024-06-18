import '../../Style/TeamStatistic/TeamPhoto.css';
import { useState } from 'react';
const team_photo = require('./image.png')

const TeamPhoto = () => {
    const [teamimage,setTeamImage]=useState();
    
    return ( 
        <div id="teamphotoblock" className='paneShadow'>
            <img id="tableligimg" src={team_photo}/>
        </div>
     );
}
 
export default TeamPhoto;