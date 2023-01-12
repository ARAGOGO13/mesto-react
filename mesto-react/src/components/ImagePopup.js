export default function ImagePopup({card, onClose, isOpen}) {
    return (
        <div className={`popup popup_type_card popup_type_with-img ${isOpen ? 'popup_opened' : ''}`} onClick={onClose}>
            <div className="popup__container popup__container_type_card">
                <img className="popup__card-img"
                     src={card ? card.link : ''}
                     alt={card ? card.name : ''}
                />
                <p className="popup__card-heading">{ card ? card.name : '' }</p>
                <button arial-label="Close" className="popup__close-btn" id="close-btn_type_card"
                        type="button"></button>
            </div>
        </div>
    );
}