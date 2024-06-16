import '../../Style/BeforeLogin/RegistrationForm.css'
import { useState, useEffect, useRef } from 'react';
import { validEmail } from '../Regex.js';

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
    const[islogin,setIsLogin]=useState(true);
    const[ismail,setIsMail]=useState(true);
    const[ispassword,setIsPassword]=useState(true);
    const[information,setInformation]=useState('');
    const[informationpassword,setInformationPassword]=useState('');
    
    const [image, setImage] = useState("");
  const imageRef = useRef(null);

  function useDisplayImage() {
    const [result, setResult] = useState("");

    function uploader(e) {
      const imageFile = e.target.files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setResult(e.target.result);
      });

      reader.readAsDataURL(imageFile);
    }

    return { result, uploader };
  }

  const { result, uploader } = useDisplayImage();

    const gotoFirstPageRegistration = () =>{
        setPage(1);
    }
    const sendRegistrationPage = () =>{
        setPage(1);
    }
    const CheckPasswords = (e) =>{
        e.preventDefault();
        if(!validEmail.test(email))
            {
                setIsMail(false);
                setInformation("Źle napisany email");
            }
        else{
            setIsMail(true);
            setInformation('');
            if(islogin && ismail)//jak istnieje email lub login niech zwroci true, a jeśli nie ma w bazie to false
            {
                setInformation("Taki login istnieje. Taki email istnieje.");
                setIsLogin(false);
                setIsMail(false);
            }
            else if(islogin && !ismail)
            {
                setInformation("Taki login istnieje.");
                setIsLogin(false);
                setIsMail(true);
            }
            else if(!islogin &&ismail)
            {
                setInformation("Taki email istnieje.");
                setIsLogin(true);
                setIsMail(false);
            }
            else
            {
                setInformation("");
                setIsLogin(true);
                setIsMail(true);
            }
        }
        
        if(password!==passwordRepeat || password.length<5)
        {
            setInformationPassword("Hasła nie są takie same / Brak hasła Hasło jest z krótkie /");
            setIsPassword(false);
        }
        else
        {
            setInformationPassword("");
            setIsPassword(true);
        }
        if(!islogin && !ismail && ispassword && password.length>4)
            {
                setPage(2);
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
                                    {ismail && <input type='email' className='registrationforminput' onChange={(e)=>setEmail(e.target.value)} value={email} required/>}
                                    {!ismail && <input type='email' className='registrationforminputbad' onChange={(e)=>setEmail(e.target.value)} value={email} required/>}
                                </div>
                                <div className='registrationformblocks'>
                                    <label className='registrationformlabel'>Login</label>
                                    {islogin && <input type="text" className='registrationforminput' onChange={(e)=>setLogin(e.target.value)} value={login} required/>}
                                    {!islogin && <input type="text" className='registrationforminputbad' onChange={(e)=>setLogin(e.target.value)} value={login} required/>}
                                    <label className='registrationformlabel'>Hasło:</label>
                                    {ispassword && <input type='password' className='registrationforminput' id="pass" onChange={(e)=>setPassword(e.target.value)} value={password} required/>}
                                    {!ispassword && <input type='password' className='registrationforminputbad' id="pass" onChange={(e)=>setPassword(e.target.value)} value={password} required/>}
                                    <label className='registrationformlabel'>Powtórz Hasło:</label>
                                    {ispassword && <input type="password" id="pass" className='registrationforminput' onChange={(e)=>setPasswordRepeat(e.target.value)} value={passwordRepeat} required/>}
                                    {!ispassword && <input type="password" id="pass" className='registrationforminputbad' onChange={(e)=>setPasswordRepeat(e.target.value)} value={passwordRepeat} required/>}
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
                                   
                                    <label className='registrationformlabel' >Wgraj zdjęcie</label>
                                    <div id="imgregisterform">
                                        <input type="file" id="registrationformimage" onChange={(e)=>{setImage(e.target.files[0]);uploader(e);}} accept="image/jpeg,image/png"/><br/>
                                        {result && <img ref={imageRef} src={result} id="registrationformimg"/>}
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