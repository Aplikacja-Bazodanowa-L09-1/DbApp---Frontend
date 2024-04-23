import '../Style/RemindPassword.css';
import { useState } from 'react';






const RemindPassword = () => {

    const [email,setEmail] = useState('')

    const sendEmail = (event) =>{
        event.preventDefault();
        fetch('http://localhost:8184/auth/remind_password/',{
            mode: 'cors',
            method: 'POST',
            headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin":"allow"},
            body: JSON.stringify({email:email})
        })
    }
    
    return ( 
        <div>
            <div>
                <form id="formPrzypomnij">
                    <div id="text">Przypomnij hasło:</div>
                        <div id="idPrzypomnij">
                            
                                <div className="inputfield">
                                    <label className="topic">Email</label>
                                    <input type="email" className="data" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                                </div>
                                <input className="przypomnij" type="submit" value="Przypomnij" onClick={sendEmail}/>
                            
                        </div>
                </form>
            </div>
        </div>
    );
}
 
export default RemindPassword;