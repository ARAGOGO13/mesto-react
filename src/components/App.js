import {useEfffect, useState} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm';
import api from '../utils/api.js';
import ImagePopup from "./ImagePopup";

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)
    const [selectedCard, setSelectedCard] = useState(null)

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleImagePopupClick(card) {
        setIsImagePopupOpen(true);
        setSelectedCard(card)
    }

    function closeAllPopups(e) {
        if (e.target.classList.contains('popup_opened') || e.target.classList.contains('popup__close-btn')) {
            setIsEditAvatarPopupOpen(false);
            setIsEditProfilePopupOpen(false);
            setIsAddPlacePopupOpen(false);
            setIsImagePopupOpen(false);
        }
    }

    return (
        <div className="root">
            <Header/>
            <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick}
                  onAddPlace={handleAddPlaceClick} onCardImg={handleImagePopupClick}
                  cardHandler={handleImagePopupClick}/>
            <Footer/>
            <div className="popups">
                <PopupWithForm name={'edit-profile'} title={'Редактировать профиль'} buttonName={'Сохранить'}
                               isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                    <input className="form__input form__input_type_profile-name" type="text"
                           id="form__input_type_profile-name" name="profileName" required minLength="2" maxLength="40"/>
                    <span className="form__input-error form__input-error_type_profile-name"></span>
                    <input className="form__input form__input_type_profile-description" type="text"
                           id="form__input_type_profile-description" name="profileDescription" required
                           minLength="2" maxLength="200"/>
                    <span className="form__input-error form__input-error_type_profile-description"></span>
                </PopupWithForm>
                <PopupWithForm name={'add-card'} title={'Новое место'} buttonName={'Создать'}
                               isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                    <input className="form__input form__input_type_card-heading" type="text"
                           id="form__input_type_card-heading" name="cardName" placeholder="Название" required
                           minLength="2" maxLength="30"/>
                    <span className="form__input-error form__input-error_type_card-heading"></span>
                    <input className="form__input form__input_type_card-link" type="url"
                           id="form__input_type_card-link" name="cardLink" placeholder="Ссылка на картинку"
                           required/>
                    <span className="form__input-error form__input-error_type_card-link"></span>
                </PopupWithForm>
                <PopupWithForm name={'edit-avatar'} title={'Обновить аватар'} buttonName={'Сохранить'}
                               isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                    <input className="form__input form__input_type_avatar-link" type="url"
                           id="form__input_type_avatar-link" name="avatarLink" placeholder="Ссылка на картинку"
                           required/>
                    <span className="form__input-error form__input-error_type_avatar-link"></span>
                </PopupWithForm>
                <ImagePopup onClose={closeAllPopups} card={selectedCard} isOpen={isImagePopupOpen}/>
                <div className="popup popup_type_delete-card popup_type_with-submit">
                    <div className="popup__container">
                        <form className="form" name="cardDeleteForm" noValidate>
                            <h3 className="form__heading form__heading_type_submit-popup">Вы уверены?</h3>
                            <button className="form__submit-btn" type="submit">Да</button>
                        </form>
                        <button arial-label="Close" className="popup__close-btn" id="close-btn_type_card-delete"
                                type="button"></button>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default App;
