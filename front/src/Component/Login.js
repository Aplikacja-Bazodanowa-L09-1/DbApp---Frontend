import { useState, useEffect } from "react";
import '../Style/Login.css'

const Login = () => {
    const [login,setLogin]=useState('');
    const[password,setPassword]=useState('');

    /// DOPISANE PRZEZ DEJWA ///

    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('access_token') !== null) {
            setIsAuth(true);
            return window.location.href='/main/'
        }
    }, [isAuth]);

    let credentials = {username:login, password:password}


    /// KONIEC DOPISANIA PRZEZ DEJWA ///

    const handleSubmit =(event)=>{
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
                window.location.href='/main/'
            }
            else{
                console.log(data.detail);
            }
            
        }).catch((err)=>{console.log(err.message);});
    }

    const Przypomnienie = () =>{
        window.location.href='/remind-password/'
    }

    return ( 
        <div>
            <div id="divLogin">
                <form>
                    <div id="text">Login:</div>
                    <div id="formLogin">
                        
                            <div className="inputfield">
                                <label className="Name">Login</label>
                                <input type="text" value={login} onChange={(e)=>setLogin(e.target.value)} id="ilogin" required/>
                            
                                <lable className="Name">Hasło</lable>
                                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} id="ipassword" required/>
                                <label id="prz_haslo" onClick={Przypomnienie}>Przypomnij hasło</label>
                            </div>
                            
                        
                    </div>
                    <button onClick={handleSubmit} id="ButtonLogin">Zaloguj się</button>
                </form>
            </div>
        </div>
     );}

 
export default Login;