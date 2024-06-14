import '../../Style/SurveyPane.css'
import { useState, React, useEffect} from "react"
const surveyPhoto = require('../../Icons/surveyIcon.png')

const SurveyPane = () => {

    const [visibility, setVisibility] = useState({visibility: "hidden"});
    const [injuries, setInjuries] = useState();
    const [mentalCon, setMentalCon] = useState();
    const [physicalCon, setPhysicalCon] = useState();
    const [desireToPlay, setDesireToPlay] = useState();

    const visibilityOn = () =>
      {
          window.scrollTo(0, 0);
          document.body.style.overflow = 'hidden';
          setVisibility({visibility: "visible"});
      }
    const visibilityOff = () =>
      {
        document.body.style.overflow = 'auto';
        setVisibility({visibility: "hidden"});
      }

     return (
        <div id="survPane" className='paneShadow'>
          <div id="upperSurvBox">
            <div className="sBoxes sLeft">
              <div id="sLogo">
                <img src="" alt="logo klubu" />
              </div>
              <div id="sTitle">FC Barcelona</div>
            </div>
            <div className="sBoxes sRight">
              21.04.2024
              <br/>
              19:11
            </div>
          </div>
          <div id="downSurvBox">
            <div className="sBoxes sLeft">
              <div id="redBtn" onClick={visibilityOn}>Nieuzupełniono</div>
            </div>
            <div className="sBoxes sRight">
              <div id="sCount">1/16</div>
            </div>
          </div>
          <div id="survBox" style={visibility} >
      <div id="survWindow">
          <div id="survTitle">
              Ankieta Przedmeczowa
          </div>
          <div id="survInputs">
              <div className="survOption">
                  Kondycja Mentalna:
                  <input type="number" name="" id="" min="0" value={mentalCon} onChange={(e)=>setMentalCon(e.target.value)}/>
              </div>
              <div className="survOption">
                  Kondycja Fizyczna:
                  <input type="number" name="" id="" min="0" value={physicalCon} onChange={(e)=>setPhysicalCon(e.target.value)}/>
              </div>
              <div className="survOption">
                  Chęci Do Grania:
                  <input type="number" name="" id="" min="0" value={desireToPlay} onChange={(e)=>setDesireToPlay(e.target.value)}/>
              </div>
              <div className="survOption txtOpt">
                  Kontuzje:
                  <input type="text" name="" id="" value={injuries} onChange={(e)=>setInjuries(e.target.value)} />
              </div>
          </div>
          <div id="survButtons">
              <div class="survBtn" id="exitBtn" onClick={visibilityOff}>X</div>
              <div class="survBtn" id="okBtn">OK</div>
          </div>
      </div>
      </div>  
    </div>  
    );
}

export default SurveyPane