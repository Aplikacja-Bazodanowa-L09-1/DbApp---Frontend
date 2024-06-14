import '../../Style/Admin/CreatingForm.css';
import { useState,useRef } from 'react';

const CreatingForm = () => {
    const[name,setName]=useState("");
    const[image,setImage]= useState("");
    const imageRef = useRef(null);
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

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
  const createTeam = async() =>{
    try {
      const response = await fetch('YOUR_BACKEND_ENDPOINT');
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Assume the link is returned in the `link` field of the response data
      const link = data.link;

      // Handle copying the link to the stash here (e.g., using the Clipboard API)
      navigator.clipboard.writeText(link).then(() => {
          window.alert('Link copied successfully: ' +{link});
      });
  } catch (error) {
      console.error('Error fetching link:', error);
      setAlertMessage('Failed to copy link.');
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
  }

  }
  const { result, uploader } = useDisplayImage();
    return ( 
        <div id="creatingform">
            <div>
                <div id="creatingforminfo">
                    <div id="creatingformtitlediv"><label id="creatingformtitle"><b>Stwórz drużyne</b></label></div>
                    
                    <div className="creatingformtext">
                           <label className='creatingformlabel'>Nazwa drużyny:</label><br/>
                    </div>
                    <input type='text' id="creatingformteamname" onChange={(e)=>setName(e.target.value)}/>
                    <br/>

                    <div className="creatingformtext">
                        <label className='creatingformlabel'>Logo:</label>
                    </div>
                    <input type='file'  accept="image/jpeg, image/png" onChange={(e)=>{setImage(e.target.files[0]);uploader(e);}}/>
                    <div id="creatingformimage">{result && <img id="createformimg" ref={imageRef} src={result} />}</div>
                    <div id="createformhelp"></div>
                </div>
                <div id="createformbuttonlocation"><button id="createformbutton" onClick={createTeam}>Zatwierdź</button></div>
            </div>
            
        </div>
     );
}
 
export default CreatingForm;