import '../Style/AvailableEquipmentPane.css'
import { useState, React, useEffect} from "react"

const AvailableEquipmentPane = () => {
    const [aEquipment, setAEquipment] = useState([]);
    return (
    <div id="availableEquipmentPane">
        <div id="scrollBoxA">
        <div id="abc"></div>
        {aEquipment.map(aEq =>(
                <p>
                    <span className="bStyle listStyle">
                        {aEq}
                    </span> 
                    <div className="eqButton">Wypożycz</div>  
                </p>
            ))}
        </div>
    </div> 
   );
}

export default AvailableEquipmentPane