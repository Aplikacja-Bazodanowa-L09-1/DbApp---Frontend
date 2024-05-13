import '../Style/EquipmentView.css'
import NavBar from "./NavBar"
import AvailableEquipmentPane from "./AvailableEquipmentPane"
import RentedEquipmentPaneLarge from "./RentedEquipmentPaneLarge"


const EquipmentView = () => {
    
    return (
        <div>
        <div id="box">
            <div id="bar">
                 <NavBar/>
            </div>
            <div id="leftSide">
                <div className="headers">Dostępny Sprzęt</div>
                <AvailableEquipmentPane/>
            </div>
            <div id="rightSide">
                <div className="headers">Wypożyczony Sprzęt</div>
                <RentedEquipmentPaneLarge/>
                <div id="bottom"></div>
            </div>
        </div>
    </div> 
   );
}

export default EquipmentView