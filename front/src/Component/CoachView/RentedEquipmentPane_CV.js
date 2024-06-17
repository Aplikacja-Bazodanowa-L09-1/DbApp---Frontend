import { useState, useEffect } from 'react';
import "../../Style/CoachView/RentedEquipmentPane_CV.css";

const RentedEquipmentPane_CV = ({ playerId }) => {
    const [rEquipment, setREquipment] = useState([]);

    // useEffect(() => {
    //     const fetchRentedEquipment = async (playerId) => {
    //         try {
    //             const response = await fetch(`YOUR_API_ENDPOINT/${playerId}/rented-equipment`);
    //             const data = await response.json();
    //             setREquipment(data);
    //         } catch (error) {
    //             console.error('Error fetching rented equipment:', error);
    //         }
    //     };

    //     if (playerId) {
    //         fetchRentedEquipment(playerId);
    //     }
    // }, [playerId]);

    const fetchRentedEquipment_CV = (playerId) => {
        fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/coach/equipment/rented?playerId=${playerId}`, {
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
                setREquipment(data)
                console.log('kk')
            }
        })
    }

    useEffect(() => {
        if(playerId){
            fetchRentedEquipment_CV(playerId)
        }
    }, [playerId])
    
    //from here
    let placeHolder1 = null;

    if (!playerId) {
        placeHolder1 = " "
    }
    else if (rEquipment.length === 0) {
        placeHolder1 = "Gracz nie wypożyczył żadnego sprzętu"
    }
    else {
        placeHolder1 = rEquipment.map(rEq => (
        <p>
            <span className="eq_CV listStyle">
                {rEq}
            </span>
        </p>
        ))
    }

    return (
        <div id="playerEquipmentPane_CV">
            <h2 id="whiteFont" class="whiteTextShadow">Wypożyczony Sprzęt</h2>
            <div id="scrollBoxCV">
                {placeHolder1}
            </div>
        </div>
    );
}

export default RentedEquipmentPane_CV;