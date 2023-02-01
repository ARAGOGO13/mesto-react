import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup({ isOpen, onClose, onAddNewPlace, onOutsideClickClose }) {
    const nameRef = useRef('');
    const linkRef = useRef('');

    useEffect(() => {
        nameRef.current.value = '';
        linkRef.current.value = '';
    }, [isOpen]);

    function handleSubmit(e) {
        e.preventDefault();
        onClose();
        onAddNewPlace({
            name: nameRef.current.value,
            link: linkRef.current.value,
        });
    }

    return (
        <PopupWithForm
            name={'add-card'}
            title={'Новое место'}
            buttonName={'Создать'}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            onOutsideClickClose={onOutsideClickClose}
        >
            <input
                className="form__input form__input_type_card-heading"
                type="text"
                id="form__input_type_card-heading"
                name="cardName"
                placeholder="Название"
                required
                minLength="2"
                maxLength="30"
                ref={nameRef}
            />
            <span className="form__input-error form__input-error_type_card-heading"></span>
            <input
                className="form__input form__input_type_card-link"
                type="url"
                id="form__input_type_card-link"
                name="cardLink"
                placeholder="Ссылка на картинку"
                required
                ref={linkRef}
            />
            <span className="form__input-error form__input-error_type_card-link"></span>
        </PopupWithForm>
    );
}
