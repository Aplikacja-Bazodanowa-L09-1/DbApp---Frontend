import '../../../Style/CoachView/ManageEquipment/AddEquipmentPane.css'
import { useState, React, useEffect} from "react"

const AddEquipmentPane = () => {

    const [eqName,setEqName] = useState('')
    const [eqNumber,setEqNumber] = useState('')

return (
    <div id="addEquipmentPane" className='paneShadow'>
        <div id="pIcon"> <i class="icon-plus-alternative"/> </div>
        <div id="eqInputs">
            <input type="text" name="" id="" onChange={(e)=>setEqName(e.target.value)} placeholder='Nazwa'/>
            <input type="text" name="" id="" onChange={(e)=>setEqNumber(e.target.value)} placeholder='Rozmiar'/>
        </div>
        <div id="addEqBtn">
            <div className="smallRedBtn">Dodaj</div>
        </div>
    </div> 
   );
}

export default AddEquipmentPane