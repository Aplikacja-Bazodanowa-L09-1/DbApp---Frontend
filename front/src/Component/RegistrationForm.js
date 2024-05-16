import '../Style/RegistrationForm.css'
import { useState } from 'react';


const RegistrationForm = () => {
    const[page,setPage]=useState(1);
    const[name,setName]=useState('');
    const[surname,setSurname]=useState('');
    const[email,setEmail]=useState('');
    const[login,setLogin]=useState('');
    const[password,setPassword]=useState('');
    const[passwordRepeat,setPasswordRepeat]=useState('');
    const[birthday,setBirthday]=useState('');
    const[height,setHeight]=useState();
    const[bootnumber,setBootNumber]=useState();
    const[weight,setWeight]=useState();
    const[islogin,setIsLogin]=useState();
    const[ismail,setIsMail]=useState();
    const[information,setInformation]=useState('');
    const[informationpassword,setInformationPassword]=useState('');
    const[loginis,setLoginIs]=useState({
        border: '',
        backgroundcolor: ''
    });
    const[mailis,setMailIs]=useState({
        border: '',
        backgroundcolor: ''
    });
    const[passwordchangestyle,setPasswordChangeStyle]=useState({
        border:"",
        backgroundcolor:""
    });

    const gotoSecondPageRegistration = () =>{
        setPage(2);
    }
    const gotoFirstPageRegistration = () =>{
        setPage(1);
    }
    const sendRegistrationPage = () =>{
        setPage(1);
    }
    const CheckPasswords = (e) =>{
        e.preventDefault();
        fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/auth/token/`,{
            mode: 'cors',
            method: 'POST',
            headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin":"allow"},
            body: JSON.stringify()
        }).then((respond)=>respond.json()).then((data)=>{
            if(data.access){
                localStorage.clear();
            }
            
        }).catch((err)=>{console.log(err.message);});
        if(islogin && ismail)
            {
                setInformation("Taki login istnieje.   Taki email istnieje.");
            }
        else if(ismail && !ismail)
            {
                setInformation("Taki login istnieje");
            }
        else if(!ismail &&ismail)
            {
                setInformation("Taki email istnieje");
            }
        if(password!==passwordRepeat)
            {
                setInformationPassword("Hasła nie są takie same");
                setPasswordChangeStyle("solid 2px red","lightread")
            }
    }

    if(page===1){return ( 
        <div>
            <div id='registrationformmain'>
                <form id="registrationformform">
                    <label id="registrationformtitle"><b>Rejestracja</b></label>
                        <div id="registrationformstart">
                            <label id="registrationformlabelinfo">Stwórz konto</label>
                            <br/>
                            <label id="registrationforminformationIs">{information}<br/>{informationpassword}</label>
                            <div id="registrationforminformation">
                                <div className='registrationformblocks'>
                                    <label className='registrationformlabel'>Imię:</label>
                                    <input type="text" className='registrationforminput' onChange={(e)=>setName(e.target.value)} value={name} required/>
                                    <label className='registrationformlabel'>Nazwisko:</label>
                                    <input type="text" className='registrationforminput' onChange={(e)=>setSurname(e.target.value)} value={surname} required/>
                                    <label className='registrationformlabel'>Mail:</label>
                                    <input type='email' className='registrationforminput' onChange={(e)=>setEmail(e.target.value)} value={email} required/>
                                </div>
                                <div className='registrationformblocks'>
                                    <label className='registrationformlabel'>Login</label>
                                    <input type="text" className='registrationforminput' onChange={(e)=>setLogin(e.target.value)} value={login} required/>
                                    <label className='registrationformlabel'>Hasło:</label>
                                    <input type='password' className='registrationforminput' onChange={(e)=>setPassword(e.target.value)} value={password} required/>
                                    <label className='registrationformlabel'>Powtórz Hasło:</label>
                                    <input type="password" className='registrationforminput' onChange={(e)=>setPasswordRepeat(e.target.value)} value={passwordRepeat} required style={{backgroundColor:passwordchangestyle.backgroundcolor,border:passwordchangestyle.border}}/>
                                </div>
                            </div>
                        </div>
                        <div id="registrationformbuttondiv"><button id="registrationformbuttonmove" onClick={CheckPasswords}>Przejdź dalej</button></div>
                </form>
            </div>
        </div>
     );}
     if(page===2){return ( 
        <div>
            <div id='registrationformmain'>
                <form id="registrationformform">
                    <label id="registrationformtitle"><b>Rejestracja</b></label>
                        <div id="registrationformstart">
                            <label id="registrationformlabelinfo">Stwórz konto</label>
                            <div id="registrationforminformation">
                                <div className='registrationformblocks'>
                                    <label className='registrationformlabel'>Data urodzenia:</label>
                                    <input type="date" className='registrationforminput' onChange={(e)=>setBirthday(e.target.value)} value={birthday} required/>
                                    <label className='registrationformlabel'>Wzrost:</label>
                                    <input type="number" className='registrationforminput' onChange={(e)=>setHeight(e.target.value)} value={height} required/>
                                    <label className='registrationformlabel'>Waga:</label>
                                    <input type="number" className='registrationforminput' onChange={(e)=>setWeight(e.target.value)} value={weight} required/>
                                </div>
                                <div className='registrationformblocks'>
                                    <label className='registrationformlabel'>Numer buta:</label>
                                    <input type='number' className='registrationforminput' onChange={(e)=>setBootNumber(e.target.value)} value={bootnumber} required/>
                                   <div>
                                    <label className='registrationformlabel' >Wgraj zdjęcie</label>
                                    <input type="file" id="registrationformimage"/>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div id="registrationformbuttondivsecond">
                            <div className='registrationformbuttonblock'>
                                <button id="registrationformbuttonmove" onClick={gotoFirstPageRegistration}>Wstecz</button>
                            </div>
                            <div className='registrationformbuttonblock'>
                                <button id="registrationformbuttonreg" onClick={sendRegistrationPage}>Rejestracja</button>
                            </div>
                        </div>
                </form>
            </div>
        </div>
     );}
}
 
export default RegistrationForm;