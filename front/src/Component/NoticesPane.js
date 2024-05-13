import '../Style/NoticesPane.css'
const bicepsIcon = require('../Icons/biceps.png')

const NoticesPane = () => {

     return (
        <div id="noticesPane">
            <div id="notification">
                <div id="notifTop">
                    <div id="notifLeft">
                        <img id="notifIcon" src={bicepsIcon} alt="icon" />
                    </div>
                    <div id="notifRight">
                        <div id="notifTitle">
                            Trening
                        </div>
                        <div id="notifDate">
                            21.04.2024
                        </div>
                    </div>
                </div>
                <div id="notifBottom">
                    Dzisiejszy trening o godz 17:00
                </div>
            </div>
        </div>
    );
}

export default NoticesPane