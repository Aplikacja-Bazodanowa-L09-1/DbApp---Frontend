import '../../Style/PlayerDataPane.css'
import { useState, React, useEffect} from "react"

const PlayerDataPane = () => {

    const [dateOfBirth, setDateOfBirth] = useState('')
    const [pHeight, setPlayerHeight] = useState('')
    const [pWeight, setPlayerWeight] = useState('')
    const [pShoeSize, setPShoeSize] = useState('')
    const [mail, setMail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    useEffect(() => {
        if(localStorage.getItem('user_info.date_of_birth') !== null){
            setDateOfBirth(localStorage.getItem('user_info.date_of_birth'))
            setPlayerHeight(localStorage.getItem('user_info.height'))
            setPlayerWeight(localStorage.getItem('user_info.weight'))
            setPShoeSize(localStorage.getItem('user_info.shoe_size'))
            setMail(localStorage.getItem('user_info.mail'))
            setPhoneNumber(localStorage.getItem('user_info.phone_number'))
        }
        else{
            fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/user/info/`, {
            mode: 'cors',
            method: 'GET',
            headers: {"Content-Type": "application/json", "authorization": `Berear ${localStorage.getItem('access_token')}`},
        }).then(response=>response.json()).then(data=>{
            if(data.detail){
                console.log(data.detail)
            }else{
                console.log(data.user_cred)
                setDateOfBirth(data.user_cred.player.date_of_birth)
                setPlayerHeight(data.user_cred.player.height)
                setPlayerWeight(data.user_cred.player.wieght)
                setPShoeSize(data.user_cred.player.boot_size)
                setMail(data.user_cred.email)
                setPhoneNumber(data.user_cred.phone_number)

                localStorage.setItem('user_info.date_of_birth', data.user_cred.player.date_of_birth)
                localStorage.setItem('user_info.height', data.user_cred.player.height)
                localStorage.setItem('user_info.weight', data.user_cred.player.wieght)
                localStorage.setItem('user_info.shoe_size', data.user_cred.player.boot_size)
                localStorage.setItem('user_info.mail', data.user_cred.email)
                localStorage.setItem('user_info.phone_number', data.user_cred.phone_number)
            }
            
        })
        }
    })

    return (
    <div id="playerDataPane">
        <div id="playerData">
            <p><span className="bStyle">Data Urodzenia: </span>{dateOfBirth}</p>
            <p><span className="bStyle">Wzrost: </span>{pHeight}</p>
            <p><span className="bStyle">Waga: </span>{pWeight}</p>
            <p><span className="bStyle">Rozmiar Buta: </span>{pShoeSize}</p>
            <p><span className="bStyle">Mail: </span>{mail}</p>
            <p><span className="bStyle">Nr Telefonu: </span>{phoneNumber}</p>
        </div>
    </div> 
   );
}

export default PlayerDataPane