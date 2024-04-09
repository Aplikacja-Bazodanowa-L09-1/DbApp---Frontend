import '../Style/Registration.css'
import { useState } from 'react'


const Registration = () => {
    const [full_name,setFull_Name]=useState({
        firstname:'',
        lastname:''
    });
    const [email,setEmail]=useState({
        firstemail:'',
        secondemail:''
    });
    const [passwords,setPasswords]=useState({
        newpassword:'',
        repeatpassword:''
    });
    const [flagEmail,setFlagEmail]=useState(false);
    const [flagPassword,setFlagPassword]=useState(false);
    const OnSubmit =(e) =>{
        e.preventDefault();
        console.log(full_name,email,passwords);
        
    };
    const OnChangeName =(e) =>{
        setFull_Name({...full_name, [e.target.name]:e.target.value})
    };
    const OnChangePassword = (e) =>{
        setPasswords({...passwords,[e.target.name]:e.target.value})
    };
    const OnChangeEmail =(e) =>{
        setEmail({...email,[e.target.name]:e.target.value})
    };
    return (
    <div>
        <div id="Form">
            <form onSubmit={OnSubmit}>
                First name:
                <input type="text" id="FirstName" name="firstname" placeholder='First Name' onChange={OnChangeName} required/>
                Last name:
                <input type='text' id="LastName" name="lastname" placeholder='Last Name' onChange={OnChangeName} required/>
                Enter email:
                <input type='email' id="FirstEmail" name="firstemail" placeholder='Email' onChange={OnChangeEmail} required/>
                Repeat email:
                <input type='email' id="SecondEmail" name="secondemail" placeholder='Repat email' onChange={OnChangeEmail} required/>
                Enter password:
                <input type='password' id="NewPassword" name="newpassword" placeholder='New password' onChange={OnChangePassword} required/>
                Repeat password:
                <input type='password' id="RepeatPassword" name="repeatpassword" placeholder='Repeat password' onChange={OnChangePassword} required/>
                <input type='submit' id='bSubmit' value='REGISTER'/>
            </form>
        </div>
    </div>
    );
};
 
export default Registration;