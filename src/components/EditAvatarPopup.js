import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup({ isOpen, onClose, onOutsideClickClose, onUpdateAvatar }) {
    const avatarRef = useRef('');

    useEffect(() => {
        avatarRef.current.value = '';
    }, [isOpen]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    return (
        <PopupWithForm
            name={'edit-avatar'}
            title={'Обновить аватар'}
            buttonName={'Сохранить'}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            onOutsideClickClose={onOutsideClickClose}
        >
            <input
                className="form__input form__input_type_avatar-link"
                type="url"
                id="form__input_type_avatar-link"
                name="avatarLink"
                placeholder="Ссылка на картинку"
                required
                ref={avatarRef}
            />
            <span className="form__input-error form__input-error_type_avatar-link"></span>
        </PopupWithForm>
    );
}
