import '../Style/RentedEquipmentPaneLarge.css'
import { useState, React, useEffect} from "react"

const RentedEquipmentPaneLarge = () => {
    const [rEquipment, setREquipment] = useState([]);

    return (
    <div id="rentedEquipmentPaneLarge">
        <div id="scrollBoxB">
        {rEquipment.map(rEq =>(
                <p>
                    <span className="bStyle listStyle">
                        {rEq}
                    </span> 
                    <div className="eqButton">Zwróć</div>  
                </p>   
            ))}
        </div>
    </div> 
   );
}

export default RentedEquipmentPaneLarge