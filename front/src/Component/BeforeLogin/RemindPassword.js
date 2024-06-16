import '../../Style/BeforeLogin/RemindPassword.css';
import { useState } from 'react';






const RemindPassword = () => {

    const [email,setEmail] = useState('')
    const [status,setStatus]=useState(0);
    const sendEmail = (event) =>{
        event.preventDefault();
        fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/auth/remind_password/`,{
            mode: 'cors',
            method: 'POST',
            headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin":"allow"},
            body: JSON.stringify({email:email})
        }).then(setStatus(1)).catch(setStatus(2));
    }
    if(status===0)
    {
        return ( 
            <div>
                <div>
                    <form id="formPrzypomnij">
                        <div id="text">Resetuj hasło:</div>
                        <div id="idPrzypomnij">                            
                                <div className="inputfield">
                                    <label className="topic">Email</label>
                                    <input type="email" className="data" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                                </div>
                        </div>
                        <input className="przypomnij" type="submit" value="Wyślij" onClick={sendEmail}/>
                    </form>
                </div>
            </div>
        );
    }
    else if(status===1)
    {
        return (
            <div> 
                <div id="formPrzypomnij">
                    <form id="emailsuc">
                        <label id="informacja1">Udało się wysłać emaila</label>
                    </form>
                </div>
            </div>
        );
    }
    else if(status===2)
    {
        return (
            <div>
                <form id="formPrzypomnij2">
                <div id="text">Resetuj hasło:</div>
                        <div id="idPrzypomnij2">    
                            <label id="informacja2">Nie udało się wyślać emaila<br/>Spróbuj ponownie</label>                        
                                <div className="inputfield">
                                    <label className="topic">Email</label>
                                    <input type="email" className="data" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                                </div>
                        </div>
                        <input className="przypomnij" type="submit" value="Wyślij" onClick={sendEmail}/>
                    
                </form>
            </div>
        );
    }
}
 
export default RemindPassword;