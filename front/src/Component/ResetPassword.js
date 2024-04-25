import { useSearchParams } from 'react-router-dom';
import '../Style/ResetPassword.css'
import { useState } from 'react'
import {useParams} from 'react-router-dom'


const ResetPassword = (event) => {

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }

    let {token} = useParams()

    const [password,setPassword]=useState('');
    const [password2,setPassword2]=useState('');
    const [status,setStatus]=useState(0);

    const changePassword = () => {
        fetch(`http://localhost:8184/auth/reset_password/${token}/`, {
            mode: 'cors',
            method: 'POST',
            headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin":"allow"},
            body: JSON.stringify({password : password})
        }).then(response => response.json()).then(data => {
            if(data.message == 'password changed'){
                setStatus(1);
                window.location.href = '/login'
            }
            else
            {
                setStatus(2);
                window.location.href='/login';
            }
        })
        .catch(err => {console.log(err)},sleep(3000),setStatus(2),window.location.href='/login')
    }
    if(status===0)
        {return (
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
        );}
    else if(status===1)
    {
        return (
            <div>
                <div id="Form">
                    <div id="divFormudane">
                        Hasło zostało zmienione.<br />
                        Zachwilę zostaniesz przekierowany do panelu logowania.
                    </div>
                </div>
            </div>
            );
    }
    else if(status===2)
    {
        return (
            <div>
                <div id="Form">
                    <div id="divFormnieudane">
                        Nie udało się zmienić hasła.<br />
                        Spróbuj ponownie za chwilę.
                    </div>
                </div>
            </div>
            );
    }
};
 
export default ResetPassword;