import '../Style/NavBar.css'
import '../Icons/fontello-9508f5a5/css/fontello.css'
import HomeIcon from '../Icons/home.png'
import { useState, React, useEffect} from "react"

const NavBar = () => {
    const [role, setRole] = useState('Coach')

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/app/user/profile`, {
            mode: 'cors',
            method: 'GET',
            headers: {"Content-Type": "application/json", "authorization": `Berear ${localStorage.getItem('access_token')}`},
        }).then(response=>response.json()).then(data=>{
            //console.log(data.user_cred.first_name)
            setRole(data.user_cred.role)

            localStorage.setItem('user.role', data.user_cred.role)
        })
    })

    const goToMain = () =>
    {
        window.location.href = '/main/';
    }
    const goToTeamStatistic =() =>{
        window.location.href = '/team-statistic/';
    }
    const goToUserView = () =>
    {
        window.location.href = '/user-view/'
    }
    const goToEquipmentView = () =>
        {
            window.location.href = '/equipment-view/'
        }
    const goToManageTeam = () =>
        {
            window.location.href = '/manageteam'
        }
    const goToManageEquipmentView = () =>
        {
            window.location.href = '/manage-equipment'
        }
    return (
        <div>
            <div id="navPane">
                <div className="buttons" onClick={goToMain}>
                    {/* <img src={HomeIcon} width="70%"  alt="1"/> */}
                    <i className="icon-home"/>
                </div>
                <div className="buttons" onClick={goToTeamStatistic}>
                    {/* <img  src={HomeIcon} width="70%" alt="2"/> */}
                    <i className="icon-users"/>
                </div>
                {role === 'Coach'? <div className="buttons" onClick={goToManageTeam}><i className="icon-user"/>
                </div>: <div className="buttons" onClick={goToUserView}><i className="icon-user"/>
                </div>}
                    {/* <img src={HomeIcon} width="70%"alt="3"/> */}
                    
                    {role === 'Coach'? <div className="buttons" onClick={goToManageEquipmentView}><i className="icon-soccer-ball"/>
                </div>: <div className="buttons" onClick={goToEquipmentView}><i className="icon-soccer-ball"/>
                </div>}
                    {/* <img src={HomeIcon} width="70%" alt="4"/> */}
            </div>
        </div>
    );
}

export default NavBar