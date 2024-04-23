import { useSearchParams } from 'react-router-dom';
import '../Style/Registration.css'
import { useState } from 'react'
import {useParams} from 'react-router-dom'


const ResetPassword = (event) => {

    let {token} = useParams()

    const [password,setPassword]=useState('');
    const [password2,setPassword2]=useState('');

    const changePassword = () => {
        fetch(`http://localhost:8184/auth/reset_password/${token}/`, {
            mode: 'cors',
            method: 'POST',
            headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin":"allow"},
            body: JSON.stringify({password : password})
        }).then(response => response.json()).then(data => {
            if(data.message == 'password changed'){
                window.location.href = '/login'
            }
        })
        .catch(err => {console.log(err)})
    }

    return (
    <div>
        <div id="Form">
            <form>
            <div id="text">Ustawienie hasła:</div>
            <div id="divForm">
                <label className='napis'>Nowe hasło:</label>
                <input type="password" className='pola' onChange={(e)=>setPassword(e.target.value)}/>
                <label className='napis'>Powtórz hasło:</label>
                <input type="password" className='pola' onChange={(e)=>setPassword2(e.target.value)}/>
            </div>
                <label id="przUstaw" onClick={changePassword}>Ustaw</label>
            </form>
        </div>
    </div>
    );
};
 
export default ResetPassword;