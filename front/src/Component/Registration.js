import '../Style/Registration.css'
import { useState } from 'react'


const Registration = () => {
    return (
    <div>
        <div id="Form">
            <form>
            <div id="text">Ustawienie hasła:</div>
            <div id="divForm">
                <label className='napis'>Nowe hasło:</label>
                <input type="password" className='pola'/>
                <label className='napis'>Powtórz hasło:</label>
                <input type="password" className='pola'/>
            </div>
                <label id="przUstaw">Ustaw</label>
            </form>
        </div>
    </div>
    );
};
 
export default Registration;