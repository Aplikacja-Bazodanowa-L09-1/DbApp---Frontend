import '../Style/UserView.css'
import NavBar from "./NavBar"
import ProfilePane from "./ProfilePane"
import PlayerDataPane from "./PlayerDataPane"
import PlayerStatisticsPane from "./PlayerStatisticsPane"
import RentedEquipmentPane from "./RentedEquipmentPane"


const UserView = () => {

    return (
        <div>
        <div id="box">
            <div id="bar">
                 <NavBar/>
            </div>
            <div id="leftSide">
                <ProfilePane/>
                <div className="headers">Dane Zawodnika:</div>
                <PlayerDataPane/>
            </div>
            <div id="rightSide">
                <div className="headers statHeader">Statystyki Zawodnika</div>
                <PlayerStatisticsPane/>
                <div className="headers">Wypożyczony Sprzęt</div>
                <RentedEquipmentPane/>
                <div id="bottom"></div>
            </div>
        </div>
    </div> 
   );
}

export default UserView