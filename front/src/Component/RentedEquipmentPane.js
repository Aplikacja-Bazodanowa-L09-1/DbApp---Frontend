import '../Style/RentedEquipmentPane.css'
import { useState, React, useEffect} from "react"

const RentedEquipmentPane = () => {
    const [equipment, setEquipment] = useState([]);
    return (
    <div id="rentedEquipmentPane">
        <div id="scrollBox">
            {equipment.map(eq =>(
                <p>
                    <span className="bStyle listStyle">
                        {eq}
                    </span>   
                </p>
            ))}
        </div>
    </div> 
   );
}

export default RentedEquipmentPane