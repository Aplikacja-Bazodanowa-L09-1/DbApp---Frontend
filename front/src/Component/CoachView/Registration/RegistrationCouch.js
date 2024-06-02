import '../../../Style/CoachView/Registration/RegistrationCouch.css'
import { validEmail } from '../../Regex';
import { useState, useRef } from 'react';


const RegistrationCouch = () => {
    const[page,setPage]=useState(1);
    const[name,setName]=useState('');
    const[surname,setSurname]=useState('');
    const[email,setEmail]=useState('');
    const[login,setLogin]=useState('');
    const[password,setPassword]=useState('');
    const[passwordRepeat,setPasswordRepeat]=useState('');
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
    const NextPage = () =>{
        setPage(2);
    }
    if(page===1){
        return ( 
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
                        <div id="registrationformbuttondiv"><button id="registrationformbuttonmove" onClick={NextPage}>Przejdź dalej</button></div>
                </form>
            </div>
        </div>
        );
    }
    else if(page===2){
        return(
            <div id="registrationcouch">
                <div id="registrationmaincouch">
                    <div id="registrationcouchtitleblock">
                        <label id="registrationcouchtitle"><b>Rejestracja</b></label>
                    </div><br/>
                    <div id="registrationcouchphoto">
                        <br/>
                        <label id="registrationcouchtext1"><b>Stwórz konto</b></label><br/><br/>
                        <label id="registrationcouchtext2">Dodaj zdjęcie</label><br/><br/>
                        <input type="file" id="registrationformimage" onChange={(e)=>{setImage(e.target.files[0]);uploader(e);}} accept="image/jpeg,image/png"/><br/>
                        <div id="registrationcouchimage">
                            {result && <img ref={imageRef} src={result} id="registrationcouchimg"/>}
                        </div>
                        <br/>
                    </div>
                    <div id="registrationcouchbutton">
                        
                        <button id="registrationcouchbuttonsend">Zatwierdź</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default RegistrationCouch;