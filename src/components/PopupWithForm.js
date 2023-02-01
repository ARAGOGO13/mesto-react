export default function PopupWithForm({
    name,
    title,
    buttonName,
    isOpen,
    onClose,
    onOutsideClickClose,
    onSubmit,
    children,
}) {
    return (
        <div
            className={`popup popup_type_${name} popup_type_with-form ${isOpen ? `popup_opened` : ''}`}
            onClick={onOutsideClickClose}
        >
            <div className="popup__container">
                <form className={`form form_type_${name}`} name={name} onSubmit={onSubmit}>
                    <h3 className="form__heading">{title}</h3>
                    {children}
                    <button className="form__submit-btn" type="submit">
                        {buttonName}
                    </button>
                </form>
                <button
                    arial-label="Close"
                    className="popup__close-btn"
                    id={`close-btn_type_${name}`}
                    type="button"
                    onClick={onClose}
                ></button>
            </div>
        </div>
    );
}
