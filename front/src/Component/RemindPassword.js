import '../Style/RemindPassword.css'

const handlePrzypomnij = () => {
    
}

const RemindPassword = () => {
    return ( 
        <div>
            <div id="divPryzpomnij">
                <form>
                    <div id="text">Przypomnij hasło:</div>
                        <div id="formPrzypomnij">
                            
                                <div className="inputfield">
                                    <label className="topic">Email</label>
                                    <input type="email" className="data" required/>
                                </div>
                                <label id="przypomnij" onSubmit={handlePrzypomnij}>Przypomnij</label>
                            
                        </div>
                </form>
            </div>
        </div>
    );
}
 
export default RemindPassword;