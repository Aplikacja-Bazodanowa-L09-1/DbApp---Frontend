import '../../Style/RentedEquipmentPaneLarge.css'
import { useState, React, useEffect} from "react"

const RentedEquipmentPaneLarge = ({toggleSharedState, sharedState}) => {
    const [rEquipment, setREquipment] = useState([]);


    // DAWID SZYMONIK -----------------------------------------------------------------------

    const fetchRentedEquipmentPane = () => {
        fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/equipment/rented/`, {
            mode: 'cors',
            method: 'GET',
            headers: { "Content-Type": "application/json", "authorization": `Berear ${localStorage.getItem('access_token')}` },
        }).then(response => response.json()).then(data => {
            if (data.detail) {
                console.log(data.detail)
                setREquipment([])
            } else {

                //console.log(data.eq)
                // for(let i=0; i<data.eq.length; i++){
                //     console.log(data.eq[i])
                //     setAEquipment([])
                // }
                setREquipment(data.eq)
                //console.log(rEquipment)
            }
        })
    }

    useEffect(() => {
        fetchRentedEquipmentPane()
    }, [sharedState])


    // RETURN EQ
    const returnEq = (id) => {
        fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/equipment/return/${id}/`, {
            mode:'cors',
            method: 'PATCH',
            headers: { "Content-Type": "application/json", "authorization": `Berear ${localStorage.getItem('access_token')}` },
        }).then(response => response.json()).then(data => {
            if(data.message == 'successfully deleted'){
                toggleSharedState()
                fetchRentedEquipmentPane()
            }
        })
    }

    // DAWID SZYMONIK - koniec ----------------------------------------------------------------------------


    return (
    <div id="rentedEquipmentPaneLarge" className='paneShadow'>
        <div id="scrollBoxB">
        {rEquipment.map(item => {
                return(
                    <p key={item.id}>
                      <span className="bStyle listStyle">
                        {item.descr}
                      </span>
                      <div className="eqButton" onClick={() => {returnEq(item.id)}}>Zwróć</div>
                    </p>
                )})}
        </div>
    </div> 
   );
}

export default RentedEquipmentPaneLarge