import "../Style/Main.css"
import NavBar from "./NavBar"
import ProfilePane from "./ProfilePane"
import NoticesPane from "./NoticesPane"
import SurveyPane from "./SurveyPane"
import CalendarPane from "./CalendarPane"
import StatisticsPane from "./StatisticsPane"

const Main = () => {

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