import { useState, useEffect } from "react";
import Main from "./Main";
import '../Style/Login.css'

const Login = () => {
    const [login,setLogin]=useState('');
    const[password,setPassword]=useState('');
    const [status,setStatus]=useState(false);

    /// DOPISANE PRZEZ DEJWA ///

    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('access_token') !== null) {
            setIsAuth(true);
        }
    }, [isAuth]);

    let credentials = {username:login, password:password}


    /// KONIEC DOPISANIA PRZEZ DEJWA ///

    const OnClick =(event)=>{
        event.preventDefault();
        fetch('https://dbapp.pythonanywhere.com/token/',{
            mode: 'cors',
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(credentials)
        }).then((respond)=>respond.json()).then((data)=>{
            //console.log(data)
            if(data.access){
                localStorage.clear();
                localStorage.setItem('access_token', data.access);
                localStorage.setItem('refresh_token', data.refresh);
                setStatus(true);
            }
            else{
                setStatus(false);
            }
            
        }).catch((err)=>{console.log(err.message);});
    }

    if(status===true)
    {
        window.location.href = '/'
    }
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