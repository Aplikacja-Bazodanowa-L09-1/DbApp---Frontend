import '../../Style/RentedEquipmentPane.css'
import { useState, React, useEffect} from "react"

const RentedEquipmentPane = () => {
    const [equipment, setEquipment] = useState([]);


    const fetchRentedEquipmentPane = () => {
        fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/equipment/rented/`, {
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
                setEquipment(data.eq)
                console.log(equipment)
            }
        })
    }

    useEffect(() => {
        fetchRentedEquipmentPane()
    }, [])


    return (
    <div id="rentedEquipmentPane" className='paneShadow'>
        <div id="scrollBox">
            {equipment.map(eq =>(
                <p>
                    <span className="bStyle listStyle">
                    {eq.descr}
                    </span>   
                </p>
            ))}
        </div>
    </div> 
   );
}

export default RentedEquipmentPane