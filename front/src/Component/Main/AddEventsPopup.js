import '../../Style/AddEventsPopup.css';

const AddEventsPopup = props => {
    return(
        <div className="popup">
            <div className="button">
                <button className="close" onClick={props.closePopup}><img src={require('../../Icons/arrow.png')} alt="arrow" /></button>
            </div>
            <div className="title">
                <h1>Nowe wydarzenie</h1>
            </div>
            <div className="description">
                <h1>Wprowadź Datę</h1>
                <h1>Wprowadź Godzinę</h1>
                <h1>Nazwa</h1>
            </div>
            <button className="button_date">

            </button>
            <button className="button_hour">
                
            </button>
            <button className="button_name">
                
            </button>

            <button className="button_accept">
                <img src={require('../../Icons/accepted.png')} alt="accept" />
            </button>

            <button className="button_reject">
                <img src={require('../../Icons/denied.png')} alt="reject" />
            </button>

        </div>
    )
}

export default AddEventsPopup;