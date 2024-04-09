import { useState } from "react";
import Main from "./Main";
import '../Style/Login.css'

const Login = () => {
    const [login,setLogin]=useState('');
    const[password,setPassword]=useState('');
    const [status,setStatus]=useState(false);

    const OnClick =(event)=>{
        event.preventDefault();
        fetch('https://dbapp.pythonanywhere.com/login',{
            method: 'POST',
            headers: {"Content-Type": "application/json, application/x-www-form-urlencoded, multipart/form-data, text/plain","Access-Control-Allow-Credentials":true,"Access-Control-Allow-Origin": "https://dbapp.pythonanywhere.com/login", "X-PINGOTHER": "pingpong"},
            body: JSON.stringify(login,password)
        }).then((respond)=>respond.json()).then((data)=>{
            console.log(data);
            setStatus(true);
        }).catch((err)=>{console.log(err.message);});
    }

    if(status===true)
    {return(
        <div><Main/></div>
    )}
    else{
    return ( 
        <div>
            <div id="dLogin">
                <form>
                    Podaj login:
                    <input type="text" value={login} onChange={(e)=>setLogin(e.target.value)} placeholder="Login" id="ilogin" required/>
                    Podaj hasło:
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" id="ipassword" required/>
                    <input type="submit" value='LOGIN' onClick={OnClick} id="blogin"/>
                </form>
            </div>
        </div>
     );}
}
 
export default Login;