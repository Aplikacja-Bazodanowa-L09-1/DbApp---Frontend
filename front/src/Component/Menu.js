import { useState } from "react";
import Login from "./Login";
import '../Style/Menu.css'
import Registration from "./Registration";

const Menu = () => {
    const [register,setRegister]=useState(false);
    const [login,setLogin]=useState(false);
    const OnCLickR = () =>{
        setRegister(true);
    }
    const OnCLickL = () =>{
        setLogin(true);
    }
    if(register===true && login===false)
    {
        window.location.href = 'register/'
    }
    else if(register===false && login===true)
    {
        window.location.href = 'login/'
    }
    else{
        return (
            <div>
                <div id="divMenu">
                    <h1>What do you want to do?</h1>
                    <button id="bLogin" onClick={OnCLickL}>LOGIN</button>
                    <button id="bRegister" onClick={OnCLickR}>REGISTER</button>
                </div>
            </div>
         );
    }

}
 
export default Menu;