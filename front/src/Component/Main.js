import "../Style/Main.css"
import NavBar from "./NavBar"
import ProfilePane from "./ProfilePane"
import NoticesPane from "./NoticesPane"
import SurveyPane from "./SurveyPane"
import CalendarPane from "./CalendarPane"
import StatisticsPane from "./StatisticsPane"
import { useState, React, useEffect} from "react"

const Main = () => {

    const [PageContent, setPageContent] = useState('')


    const logoutHandler = (event) => {
        const refrsh_token = localStorage.getItem('refresh_token')
        const data = {"token": refrsh_token}

        fetch('http://localhost:8184/auth/revoke_token/',{
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

        fetch('http://localhost:8184/app/', {
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
                    fetch('http://localhost:8184/auth/refresh_token/', {
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
                <CalendarPane/>
                <div className="headers">Statystyki</div>
                <StatisticsPane/>
            </div>
        </div>
    </div> 
    );
}
 
export default Main;
