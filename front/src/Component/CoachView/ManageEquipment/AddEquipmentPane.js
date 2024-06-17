import '../../../Style/CoachView/ManageEquipment/AddEquipmentPane.css'
import { useState, React, useEffect} from "react"

const AddEquipmentPane = ({toggleSharedState, sharedState}) => {

    const [eqName,setEqName] = useState('')
    const [eqNumber,setEqNumber] = useState('')


    const fetchAddEqupiment = async () => {
        fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/coach/equipment/update`, {
            mode: 'cors',
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${localStorage.getItem('access_token')}`
            },
            body: JSON.stringify( {
                descr: eqName+" - " + eqNumber
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.detail) {
                console.log('Error:', data.detail);
            } else {
                toggleSharedState()
                console.log('Updated data:', data.body);
            }
        })
        .catch(error => {
            console.error('Error updating team meassage', error)
        })
    }


    const handleSubmit = () => {
        // Implement the logic to save the updated statistics
        fetchAddEqupiment()
    };

return (
    <div id="addEquipmentPane" className='paneShadow'>
        <div id="pIcon"> <i class="icon-plus-alternative"/> </div>
        <div id="eqInputs">
            <input type="text" name="" id="" value={eqName} onChange={(e)=>setEqName(e.target.value)} placeholder='Nazwa'/>
            <input type="text" name="" id=""value={eqNumber} onChange={(e)=>setEqNumber(e.target.value)} placeholder='Rozmiar'/>
        </div>
        <div id="addEqBtn">
            <div className="smallRedBtn" onClick={handleSubmit} >Dodaj</div>
        </div>
    </div> 
   );
}

export default AddEquipmentPane