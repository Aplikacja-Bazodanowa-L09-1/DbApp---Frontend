import '../../../Style/CoachView/ManageEquipment/AddEquipmentPane.css'
import { useState, React, useEffect} from "react"

const AddEquipmentPane = () => {

    const [eqName,setEqName] = useState('')

return (
    <div id="addEquipmentPane" className='paneShadow'>
        <div id="pIcon"> <i class="icon-plus-alternative"/> </div>
        <div id="eqInputs">
            <input type="text" name="" id="" placeholder='Nazwa'/>
            <input type="text" name="" id="" placeholder='Rozmiar'/>
        </div>
        <div id="addEqBtn"></div>
    </div> 
   );
}

export default AddEquipmentPane