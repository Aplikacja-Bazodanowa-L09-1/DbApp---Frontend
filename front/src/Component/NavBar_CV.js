import '../Style/NavBar.css'
import '../Icons/fontello-9508f5a5/css/fontello.css'

const NavBar_CV = () => {

    const goToMain = () =>
    {
        window.location.href = '/main/';
    }
    const goToTeamStatistic =() =>{
        window.location.href = '/team-statistic/';
    }
    const goToManageTeam = () =>
    {
        window.location.href = '/manageteam/'
    }
    const goToEquipmentView = () =>
        {
            window.location.href = '/equipment-view/'
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
                <div className="buttons" onClick={goToManageTeam}>
                    {/* <img src={HomeIcon} width="70%"alt="3"/> */}
                    <i className="icon-user"/>
                </div>
                <div className="buttons" onClick={goToEquipmentView}>
                    {/* <img src={HomeIcon} width="70%" alt="4"/> */}
                    <i className="icon-soccer-ball"/>
                </div>
            </div>
        </div>
    );
}

export default NavBar_CV