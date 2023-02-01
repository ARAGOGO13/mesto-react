import { useState, useRef, useEffect, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function EditAvatarPopup({ isOpen, onClose, onOutsideClickClose, onUpdateAvatar }) {
    const currentUser = useContext(CurrentUserContext);

    const [avatar, setAvatar] = useState('');
    const avatarRef = useRef('');

    useEffect(() => {
        setAvatar(currentUser.avatar);
    }, [currentUser]);

    useEffect(() => {
        avatarRef.current.value = '';
    }, [isOpen]);

    function handleAvatarChange(e) {
        setAvatar(e.target.value);
    }

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
                onChange={handleAvatarChange}
                ref={avatarRef}
            />
            <span className="form__input-error form__input-error_type_avatar-link"></span>
        </PopupWithForm>
    );
}
