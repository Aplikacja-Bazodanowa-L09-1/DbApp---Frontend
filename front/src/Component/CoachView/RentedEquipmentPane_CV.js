import { useState, useEffect, useRef } from 'react';
import "../../Style/CoachView/RentedEquipmentPane_CV.css"

const PlayerEquipmentPane_CV = () => {

    const [rEquipment, setREquipment] = useState([]);
    if(rEquipment[0] == null) rEquipment[0] = "Gracz nie wypożyczył żadnego sprzętu"

    return (

        /*<div id="playerEquipmentPane_CV">
            <h2 id="whiteFont">Wypożyczony Sprzęt</h2>
            <div id="dataBox">
                <p><span class="eq_CV">Korki - Rozmiar 41</span></p>
                <p><span class="eq_CV">Koszulka Meczowa - Nr 10 - Roz. M</span></p>
                <p><span class="eq_CV">Spodenki Meczowe - Nr 10 - Roz. M</span></p>
                <p><span class="eq_CV">Bluza Meczowa - Nr 10 - Roz. M</span></p>
            </div>
        </div>*/

        
        <div id="playerEquipmentPane_CV">
            <h2 id="whiteFont">Wypożyczony Sprzęt</h2>
            <div id="scrollBoxCV">
                {rEquipment.map(rEq =>(
                    <p>
                        <span className="eq_CV listStyle">
                            {rEq}
                        </span>
                    </p>   
                ))}
            </div>
        </div> 
    );
}

export default PlayerEquipmentPane_CV;