import '../Style/RegistrationForm.css'
import { useState } from 'react';

const RegistrationForm = () => {
    const [Name,setName]=useState('');
    const[Surname,setSurname]=useState('');
    const[Email,setEmail]=useState('');
    const[Emailrepeat,setEmailRepeat]=useState('');
    const[Password,setPassword]=useState('');
    const[PasswordRepeat,setPasswordRepeat]=useState('');
    
    const sendRegistrationForm = () =>{

    }

    return ( 
        <div>
            <div id='registrationformmain'>
                <form id="registrationformform">
                    <label id="registrationformtitle">Registration:</label>
                        <div id="registrationforminside">
                            <label className='registrationformlabel'>Imię</label><br/>
                            <input type='text' className='registrationforminput' onChange={(e)=>setName(e.target.value)}/><br/>
                            <label className='registrationformlabel'>Nazwisko</label><br/>
                            <input type='text' className='registrationforminput' onChange={(e)=>setSurname(e.target.validationMessage)}/><br/>
                            <label className='registrationformlabel'>Email</label><br/>
                            <input type='email' className='registrationforminput' onChange={(e)=>setEmail(e.target.value)}/><br/>
                            <label className='registrationformlabel'>Powtórz email</label><br/>
                            <input type='email' className='registrationforminput' onChange={(e)=>setEmailRepeat(e.target.value)}/><br/>
                            <label className='registrationformlabel'>Hasło</label><br/>
                            <input type='password' className='registrationforminput' onChange={(e)=>setPassword(e.target.value)}/><br/>
                            <label className='registrationformlabel'>Powtórz hasło</label><br/>
                            <input type='password' className='registrationforminput' onChange={(e)=>setPasswordRepeat(e.target.value)}/>
                        </div>
                        <div id="registrationformbuttondiv"><button id="registrationformbutton" onClick={sendRegistrationForm}>Rejestracja</button></div>
                </form>
            </div>
        </div>
     );
}
 
export default RegistrationForm;