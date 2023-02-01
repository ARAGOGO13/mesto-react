import { useState, useContext, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser, onOutsideClickClose }) {
    const currentUser = useContext(CurrentUserContext);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [isOpen, currentUser]);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        console.log('dsa');
        e.preventDefault();
        onUpdateUser({
            name: name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            buttonName={'Сохранить'}
            isOpen={isOpen}
            onClose={onClose}
            onOutsideClickClose={onOutsideClickClose}
            onSubmit={handleSubmit}
        >
            <input
                className="form__input form__input_type_profile-name"
                type="text"
                id="form__input_type_profile-name"
                name="profileName"
                required
                minLength="2"
                maxLength="40"
                onChange={handleNameChange}
                value={name}
            />
            <span className="form__input-error form__input-error_type_profile-name"></span>
            <input
                className="form__input form__input_type_profile-description"
                type="text"
                id="form__input_type_profile-description"
                name="profileDescription"
                required
                minLength="2"
                maxLength="200"
                onChange={handleDescriptionChange}
                value={description}
            />
            <span className="form__input-error form__input-error_type_profile-description"></span>
        </PopupWithForm>
    );
}
