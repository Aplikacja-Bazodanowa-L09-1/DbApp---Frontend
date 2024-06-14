import '../../Style/Admin/NavBarAdmin.css'

const NavBarAdmin = () => {
    const gotoCreateTeam =()=>{
        window.location.href='/createteam/'
    }
    return ( 
        <div id="navbaradminmain">
            <div id="navPaneAdmin">
                <div className="navbarbuttons" >
                    <i className="icon-user"/>
                </div>
                <div className="navbarbuttons">
                    <i className="icon-plus" onClick={gotoCreateTeam}/>
                </div>
            </div>
        </div>
     );
}
 
export default NavBarAdmin;