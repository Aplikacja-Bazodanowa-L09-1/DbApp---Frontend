import { useState } from 'react';
import NavBar from './NavBar.js';
import Club from './TeamStatistic/Club.js'
import TeamInformation from './TeamStatistic/TeamInformation.js';
import FormView from './TeamStatistic/FormView.js';
import TableLig from './TeamStatistic/TableLig.js';
import Squad from './TeamStatistic/Squad.js'

import '../Style/TeamStatistic.css'

const TeamStatistic = () => {
    return ( 
        <div id="main">
            <div id="widget">
                <NavBar/>
            </div>
            <div id="teamleft">
                <div id="teamclub"><Club/></div>
                <div id="teaminformation"><TeamInformation/></div>
            </div>
            <div id="teamright">
                <div id="formview"><FormView/></div>
                <div id="tablelig"><TableLig/></div>
                <div id="squad"><Squad/></div>
            </div>
            
        </div>
     );
}
 
export default TeamStatistic;