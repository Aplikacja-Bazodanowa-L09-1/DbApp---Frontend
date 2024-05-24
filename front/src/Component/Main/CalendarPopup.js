import '../../Style/CalendarPopup.css';

const CalendarPopup = props => {
    return (
        <div className="calendar_popup">
            <div className="button">
                <button className="close" onClick={props.handleClose}><img src={require('../../Icons/arrow.png')} alt='spinned arrow icon'/></button>
            </div>
            <div className="contents">
                {props.content}     
            </div>
        </div>
    )
}

export default CalendarPopup;