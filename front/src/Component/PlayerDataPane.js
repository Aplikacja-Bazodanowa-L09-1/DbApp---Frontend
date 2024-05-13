import '../Style/PlayerDataPane.css'
import { useState, React, useEffect} from "react"

const PlayerDataPane = () => {

    const [dateOfBirth, setDateOfBirth] = useState('')
    const [pHeight, setPlayerHeight] = useState('')
    const [pWeight, setPlayerWeight] = useState('')
    const [pShoeSize, setPShoeSize] = useState('')
    const [mail, setMail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')


    return (
    <div id="playerDataPane">
        <p><span className="bStyle">Data Urodzenia: </span>{dateOfBirth}</p>
        <p><span className="bStyle">Wzrost: </span>{pHeight}</p>
        <p><span className="bStyle">Waga: </span>{pWeight}</p>
        <p><span className="bStyle">Rozmiar Buta: </span>{pShoeSize}</p>
        <p><span className="bStyle">Mail: </span>{mail}</p>
        <p><span className="bStyle">Nr Telefonu: </span>{phoneNumber}</p>
    </div> 
   );
}

export default PlayerDataPane