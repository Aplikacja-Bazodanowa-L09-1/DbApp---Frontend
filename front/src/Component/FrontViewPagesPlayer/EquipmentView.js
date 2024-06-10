import '../../Style/EquipmentView.css'
import NavBar from "../NavBar"
import AvailableEquipmentPane from "../EquipmentView/AvailableEquipmentPane"
import RentedEquipmentPaneLarge from "../EquipmentView/RentedEquipmentPaneLarge"
import { useState, useEffect } from "react";



const EquipmentView = () => {

    // DAWID SZYMONIK --------------------------------------------------------------------------
    const [PageContent, setPageContent] = useState('')

    const logoutHandler = (event) => {
        const refrsh_token = localStorage.getItem('refresh_token')
        const data = { "token": refrsh_token }

        fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/auth/revoke_token/`, {
            mode: 'cors',
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(response => { response.json() }).then(data => {
            console.log(data)
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
            window.location.href = '/login/'
        }).catch(err => { console.log(err) })
    }


    useEffect(() => {

        fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/equipment/`, {
            mode: 'cors',
            method: 'GET',
            headers: {
                "authorization": `Berear ${localStorage.getItem('access_token')}`
            }
        }).then(response => {

            if (response.status == 403) {
                throw new Error("access_token expired")
            }
            else return response.json()

        }).then(data => {
            setPageContent(data.content)

        }).catch(err => {
            if (err == 'Error: access_token expired') {
                if (window.confirm("Sesja wygasła. Czy chcesz ją odnowić?")) {

                    /// ODNOWIENIE SESJI
                    fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/auth/refresh_token/`, {
                        mode: 'cors',
                        method: 'POST',
                        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "allow" },
                        body: JSON.stringify({ token: `${localStorage.getItem('refresh_token')}` })
                    })
                        .then(response => response.json())
                        .then(data => {
                            localStorage.setItem('access_token', data.accessToken)
                            window.location.reload()
                        })

                } else {
                    logoutHandler()
                }
            }
        })
    })

    const [sharedState, setShatedState] = useState(false);

    const toggleSharedState = () => {setShatedState(!sharedState)}
/// DAWID SZYMONIK - koniec----------------------------------------------------------------

    
    return (
        <div>
        <div id="box">
            <div id="bar">
                 <NavBar/>
            </div>
            <div id="leftSide">
                <div className="headers">Dostępny Sprzęt</div>
                <AvailableEquipmentPane toggleSharedState={toggleSharedState} sharedState={sharedState}/>
            </div>
            <div id="rightSide">
                <div className="headers">Wypożyczony Sprzęt</div>
                <RentedEquipmentPaneLarge toggleSharedState={toggleSharedState} sharedState={sharedState}/>
                <div id="bottom"></div>
            </div>
        </div>
    </div> 
   );
}

export default EquipmentView