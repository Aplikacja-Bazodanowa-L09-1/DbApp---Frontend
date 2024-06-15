import '../../Style/AvailableEquipmentPane.css'
import { useState, React, useEffect} from "react"

const AvailableEquipmentPane = ({toggleSharedState, sharedState}) => {
    const [aEquipment, setAEquipment] = useState([])

// DAWID SZYMONIK -----------------------------------------------------------------------

    const fetchAvailableEquipmentPane = () => {
        fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/equipment/available/`, {
            mode: 'cors',
            method: 'GET',
            headers: { "Content-Type": "application/json", "authorization": `Berear ${localStorage.getItem('access_token')}` },
        }).then(response => response.json()).then(data => {
            if (data.detail) {
                console.log(data.detail)
            } else {
                
                // console.log(data.eq)
                // for(let i=0; i<data.eq.length; i++){
                //     console.log(data.eq[i])
                //     setAEquipment([])
                // }
                setAEquipment(data.eq)
                console.log(aEquipment)
            }
        })
    }

    useEffect(() => {
        fetchAvailableEquipmentPane()
    }, [sharedState])


    /// RENT EQUIPMENT
    const rentEq = (id) => {
        fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/equipment/rent/${id}/`, {
            mode:'cors',
            method: 'PATCH',
            headers: { "Content-Type": "application/json", "authorization": `Berear ${localStorage.getItem('access_token')}` },
        }).then(response => response.json()).then(data => {
            if(data.message == 'created'){
                toggleSharedState()
                fetchAvailableEquipmentPane()
            }
        })
    }


    // DAWID SZYMONIK - koniec ----------------------------------------------------------------------------

    return (
    <div id="availableEquipmentPane" className='paneShadow'>
        <div id="scrollBoxA">
        <div id="abc">
        {aEquipment.map(item => {
            if(item.available == true){
                return(
                    <p key={item.id}>
                      <span className="bStyle listStyle">
                        {item.descr}
                      </span>
                      <div className="eqButton" onClick={() => {rentEq(item.id)}}>Wypożycz</div>
                    </p>
                )}})}
        </div>
        </div>
    </div> 
   );
}

export default AvailableEquipmentPane