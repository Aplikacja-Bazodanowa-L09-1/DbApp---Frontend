

const Main = () => {

    

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
    <div>
        <h1>Udało się zalogować</h1>
        <button id="logout-button" onClick={logoutHandler}>Wyloguj</button>
    </div> 
    );
}
 
export default Main;