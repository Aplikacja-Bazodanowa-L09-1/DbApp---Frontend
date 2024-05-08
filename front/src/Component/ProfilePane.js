import '../Style/ProfilePane.css'

const ProfilePane = () => {
    const logoutHandler = (event) => {
        const refrsh_token = localStorage.getItem('refresh_token')
        const data = {"refresh": refrsh_token}

        fetch('https://dbapp.pythonanywhere.com/logout/',{
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

     return (
        <div id="profPane">
            <div id="profBox">
                <img id="profPhoto" alt="Tu będzie profilowe"/>
                <div id="profInfo">
                    <p id="playerName" className="info">Marek Mostkowiak</p>
                    <p id="playerPosition" className="info">Bramkarz</p>
                    <p id="playerClub" className="info">Stal Rzeszów</p>
                </div>
                <div id="buttonBox">
                    <div id="logoutButton" onClick={logoutHandler}>Wyloguj</div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePane