import '../Style/NavBar.css'
import HomeIcon from '../Icons/home.png'

const NavBar = () => {

    const goToMain = () =>
    {
        window.location.href = '/main/';
    }
    const goToTeamStatistic =() =>{
        window.location.href = '/team-statistic/';
    }

    return (
        <div>
            <div id="navPane">
                <div className="buttons" onClick={goToMain}>
                    <img src={HomeIcon} width="70%"  alt="1"/>
                </div>
                <div className="buttons" onClick={goToTeamStatistic}>
                    <img  src={HomeIcon} width="70%" alt="2"/>
                </div>
                <div className="buttons">
                    <img src={HomeIcon} width="70%"alt="3"/>
                </div>
                <div className="buttons">
                    <img src={HomeIcon} width="70%" alt="4"/>
                </div>
            </div>
        </div>
    );
}

export default NavBar