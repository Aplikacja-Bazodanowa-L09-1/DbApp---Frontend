import NavBarAdmin from "./NavBarAdmin.js";
import CreatingForm from "./CreatingForm.js";

import '../../Style/Admin/CreatingTeam.css'
const CreatingTeam = () => {

    return (
        <div id="creatingteamdiv">
            <div id="creatingteammain">
                <div id="creatingteamnavbaradmin"><NavBarAdmin/></div>
                <div id="creatingteamform"><CreatingForm/></div>
            </div>
        </div>
     );
}
 
export default CreatingTeam;