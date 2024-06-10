import "../../Style/Main.css"
import NavBar from "../NavBar"
import ProfilePane from "../Main/ProfilePane"
import NoticesPane from "../Main/NoticesPane"
import SurveyPane from "../Main/SurveyPane"
import CalendarPane from "../Main/CalendarPane"
import StatisticsPane from "../Main/StatisticsPane"
import { useState, React, useEffect} from "react"

const Main = () => {

    const [PageContent, setPageContent] = useState('')

    const [visibility, setVisibility] = useState({visibility: "hidden"});

    const visibilityOn = () =>
        {
            setVisibility({visibility: "visible"});
        }
    const visibilityOff = () =>
        {
            setVisibility({visibility: "hidden"});
        }

    const logoutHandler = (event) => {
        const refrsh_token = localStorage.getItem('refresh_token')
        const data = {"token": refrsh_token}

        fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/auth/revoke_token/`,{
            mode: 'cors',
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(response=>{response.json()}).then(data=>{
            console.log(data)
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
            window.location.href='/login/'
        }).catch(err=>{console.log(err)})
    }


    useEffect(() => {

        fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/app/`, {
            mode: 'cors',
            method: 'GET',
            headers: {
                "authorization": `Berear ${localStorage.getItem('access_token')}`
            }
        }).then(response => {

            if (response.status == 403) {
                throw new Error("access_token expired")
            }
            else return response.json()

        }).then(data => {
            setPageContent(data.content)

        }).catch(err => {
            if (err == 'Error: access_token expired') {
                if (window.confirm("Sesja wygasła. Czy chcesz ją odnowić?")) {

                    /// ODNOWIENIE SESJI
                    fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/auth/refresh_token/`, {
                        mode: 'cors',
                        method: 'POST',
                        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "allow" },
                        body: JSON.stringify({ token: `${localStorage.getItem('refresh_token')}` })
                    })
                        .then(response => response.json())
                        .then(data => {
                            localStorage.setItem('access_token', data.accessToken)
                            window.location.reload()
                        })
                        
                } else {
                    logoutHandler()
                }
            }
        })
    })

    return ( 
    <div>
        <div id="box">
            <div id="bar">
                 <NavBar/>
            </div>
            <div id="leftSide">
                <ProfilePane/>
                <div className="headers">Powiadomienia</div>
                <NoticesPane/>
                <div className="headers">Ankieta meczowa</div>
                <SurveyPane/>
            </div>
            <div id="rightSide">
                <div className="headers calHeader">Kalendarz</div>
                <CalendarPane/>
                <div className="headers">Statystyki</div>
                <StatisticsPane/>
                <div id="bottom"></div>
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
                        <input type="number" name="" id="" />
                    </div>
                    <div className="survOption">
                        Kondycja Fizyczna:
                        <input type="number" name="" id="" />
                    </div>
                    <div className="survOption">
                        Chęci Do Grania:
                        <input type="number" name="" id="" />
                    </div>
                    <div className="survOption">
                        Kontuzje:
                        <select name="" id="">
                            <option value="Brak">Brak</option>
                        </select>
                    </div>
                </div>
                <div id="survButtons">
                    <div className="survBtn" id="exitBtn" onClick={visibilityOff}>X</div>
                    <div className="survBtn" id="okBtn">OK</div>
                </div>
            </div>
        </div>
    </div> 
    );
}
 
export default Main;
