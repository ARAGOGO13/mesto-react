export default function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name} popup_type_with-form ${props.isOpen ? `popup_opened` : ''}`} onClick={props.onClose}>
            <div className="popup__container">
                <form className={`form form_type_${props.name}`} name={props.name} noValidate>
                    <h3 className="form__heading">{props.title}</h3>
                    {props.children}
                    <button className="form__submit-btn" type="submit">{props.buttonName}</button>
                </form>
                <button arial-label="Close" className="popup__close-btn" id={`close-btn_type_${props.name}`}
                        type="button"></button>
            </div>
        </div>
    );
}