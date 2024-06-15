import '../../../Style/CoachView/ManageEquipment/AvailableEquipmentPaneCoach.css'
import { useState, React, useEffect} from "react"

const AvailableEquipmentPaneCoach = ({toggleSharedState, sharedState}) => {
    const [aEquipment, setAEquipment] = useState([])

// DAWID SZYMONIK -----------------------------------------------------------------------

    const fetchAvailableEquipmentPaneCoach = () => {
        fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/equipment/available/`, {
            mode: 'cors',
            method: 'GET',
            headers: { "Content-Type": "application/json", "authorization": `Berear ${localStorage.getItem('access_token')}` },
        }).then(response => response.json()).then(data => {
            if (data.detail) {
                console.log(data.detail)
            } else {
                
                //console.log(data.eq)
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
        fetchAvailableEquipmentPaneCoach()
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
                fetchAvailableEquipmentPaneCoach()
            }
        })
    }


    // DAWID SZYMONIK - koniec ----------------------------------------------------------------------------

    return (
    <div id="availableEquipmentPaneCoach" className='paneShadow'>
        <div id="scrollBoxAC">
        <div id="abc">
        {aEquipment.map(item => {
            if(item.available == true){
                return(
                    <p key={item.id}>
                      <span className="bStyle listStyle">
                        {item.descr}
                      </span>
                      <div className="avEqBtn">
                        <div className="eqBtnPos">
                            <div className="eqButton" onClick={() => {rentEq(item.id)}}>Wypożycz</div>
                        </div>
                        <div className="redBtnPos">
                            <div className="smallRedBtn">Usuń</div>
                        </div>
                      </div>
                    </p>
                )}})}
        </div>
        </div>
    </div> 
   );
}

export default AvailableEquipmentPaneCoach