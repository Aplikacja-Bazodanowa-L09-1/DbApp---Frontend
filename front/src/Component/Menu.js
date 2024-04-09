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
        return(
            <div>
                <Registration/>
            </div>
        )
    }
    else if(register===false && login===true)
    {
        return(
            <div>
                <Login/>
            </div>
        )
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