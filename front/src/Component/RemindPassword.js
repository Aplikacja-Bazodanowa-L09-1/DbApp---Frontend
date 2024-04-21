import '../Style/RemindPassword.css';
import { useState } from 'react';


const sendEmail = () =>{

}

const RemindPassword = () => {
    const [email,setEmail] = useState('')
    return ( 
        <div>
            <div>
                <form id="formPrzypomnij">
                    <div id="text">Przypomnij hasło:</div>
                        <div id="idPrzypomnij">
                            
                                <div className="inputfield">
                                    <label className="topic">Email</label>
                                    <input type="email" className="data" required/>
                                </div>
                                <input className="przypomnij" type="submit" value="Przypomnij"/>
                            
                        </div>
                </form>
            </div>
        </div>
    );
}
 
export default RemindPassword;