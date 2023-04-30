import Signup from "./Signup"

const Popup = ({ handleClose }) => {

    return (
        <div className="popup-wrapper">
            <div className="popup">
                <div className="popup-close" onClick={handleClose}>&#x2715;</div>
                <div className="popup-content">
                    <Signup span={0} />
                </div>
            </div>
        </div>
    )
}

export default Popup