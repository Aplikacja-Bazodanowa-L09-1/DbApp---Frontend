import { useState, useEffect, useRef } from 'react';
import "../../Style/CoachView/PlayerDataPane_CV.css"

const PlayerDataPane_CV = () => {

    const [dateOfBirth, setDateOfBirth] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [bootSize, setBootSize] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    useEffect(() => {
        if(localStorage.getItem('user_stats.date_of_birth') !== null){
            setDateOfBirth(localStorage.getItem('user_stats.date_of_birth'))
            setHeight(localStorage.getItem('user_stats.height'))
            setWeight(localStorage.getItem('user_stats.weight'))
            setBootSize(localStorage.getItem('user_stats.boot_size'))
            setEmail(localStorage.getItem('user_stats.email'))
            setPhoneNumber(localStorage.getItem('user_stats.phone_number'))
        }
        else{
        }
    })

    return (
        <div id="playerDataPane_CV">
            <h2 id="whiteFont">Dane Zawodnika</h2>
            <div id="dataBoxDataPane_CV">
                <div id="positionDeleteBox_CV">
                    <p><span class="bStyle playerPositionStyle">BRAMKARZ</span></p>
                    <button id="deleteButton_CV">Usuń</button>
                </div>
                <p><span class="bStyle">Data Urodzenia: {dateOfBirth}</span></p>
                <p><span class="bStyle">Wzrost: {height} cm</span></p>
                <p><span class="bStyle">Waga: {weight} Kg</span></p>
                <p><span class="bStyle">Rozmiar Buta: {bootSize}</span></p>
                <p><span class="bStyle">Mail: {email}</span></p>
                <p><span class="bStyle">Nr Telefonu: {phoneNumber}</span></p>
            </div>
        </div>
    );
}

export default PlayerDataPane_CV;