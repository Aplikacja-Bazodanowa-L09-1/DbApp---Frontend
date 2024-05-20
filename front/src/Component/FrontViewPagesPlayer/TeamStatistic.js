import { useState, React, useEffect} from "react"
import NavBar from '../NavBar.js';
import Club from '../TeamStatistic/Club.js'
import TeamInformation from '../TeamStatistic/TeamInformation.js';
import FormView from '../TeamStatistic/FormView.js';
import TableLig from '../TeamStatistic/TableLig.js';
import Squad from '../TeamStatistic/Squad.js'

import '../../Style/TeamStatistic.css'

const TeamStatistic = () => {

    const [PageContent, setPageContent] = useState('')

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

        fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/team_stats/`, {
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
        <div id="main">
            <div id="bar">
                <NavBar/>
            </div>
            <div id="teamleft">
                <div id="teamclub"><Club/></div>
                <div id="teaminformation"><TeamInformation/></div>
            </div>
            <div id="teamright">
                <div id="formview"><FormView/></div>
                <div id="tablelig"><TableLig/></div>
                <div id="squad"><Squad/></div>
            </div>
            
        </div>
     );
}
 
export default TeamStatistic;