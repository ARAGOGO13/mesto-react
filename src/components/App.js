import { useEffect, useState } from 'react';
import '../App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from './ImagePopup';
import AddPlacePopup from './AddPlacePopup';
import DeleteConfirmationPopup from './DeleteConfirmationPopup';
import { api } from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
    const [currentUser, setCurrentUser] = useState({});

    const [cards, setCards] = useState([]);

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [isDeleteConfirmationPopupOpen, setIsDeleteConfirmationPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        api.getProfileInformation()
            .then((user) => {
                setCurrentUser(user);
            })
            .catch((err) => {
                console.log(err);
            }, []);
    }, []);

    useEffect(() => {
        api.getInitialCards()
            .then((cardArray) => setCards(cardArray))
            .catch((err) => console.log(err));
    }, []);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function closeAllPopups() {
        setIsDeleteConfirmationPopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsImagePopupOpen(false);
    }

    function closePopupsOnOutsideClick(e) {
        console.log('dsa');
        if (e.target.classList.contains('popup_opened') || e.target.classList.contains('popup__close-btn')) {
            closeAllPopups();
        }
    }

    function handleImagePopupClick(card) {
        setIsImagePopupOpen(true);
        setSelectedCard(card);
    }

    function handleDeleteConfirmationClick(card) {
        api.deleteCard(card.card._id)
            .then(() => {
                setCards((state) => state.filter((c) => c._id !== card.card._id));
                setIsDeleteConfirmationPopupOpen(false);
            })
            .catch((err) => console.log(err));
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some((i) => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
            })
            .catch((err) => console.log(err));
    }

    function handleCardDelete(card) {
        setIsDeleteConfirmationPopupOpen(true);
        setSelectedCard(card);
    }

    function handleUpdateUser(newUserInfo) {
        api.patchUserInfo(newUserInfo)
            .then((newUser) => {
                setCurrentUser(newUser);
                closeAllPopups();
            })
            .catch((err) => console.log(err));
    }

    function handleUpdateAvatar(newAvatar) {
        api.patchNewAvatar(newAvatar.avatar)
            .then((avatar) => {
                setCurrentUser(avatar);
                closeAllPopups();
            })
            .catch((err) => console.log(err));
    }

    function handleAddPlaceSubmit(newCardData) {
        api.postNewCard(newCardData)
            .then((newCard) => setCards([newCard, ...cards]))
            .catch((err) => console.log(err));
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="root">
                <Header />
                <Main
                    onEditAvatar={handleEditAvatarClick}
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onCardImg={handleImagePopupClick}
                    cardHandler={handleImagePopupClick}
                    onCardLikeClick={handleCardLike}
                    cards={cards}
                    onCardDeleteClick={handleCardDelete}
                />
                <Footer />
                <div className="popups">
                    <EditProfilePopup
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                        onUpdateUser={handleUpdateUser}
                        onOutsideClickClose={closePopupsOnOutsideClick}
                    />
                    <EditAvatarPopup
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                        onUpdateAvatar={handleUpdateAvatar}
                        onOutsideClickClose={closePopupsOnOutsideClick}
                    />
                    <AddPlacePopup
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                        onAddNewPlace={handleAddPlaceSubmit}
                        onOutsideClickClose={closePopupsOnOutsideClick}
                    />
                    <ImagePopup onClose={closeAllPopups} card={selectedCard} isOpen={isImagePopupOpen} />
                    <DeleteConfirmationPopup
                        onClose={closeAllPopups}
                        card={selectedCard}
                        isOpen={isDeleteConfirmationPopupOpen}
                        onConfirmation={handleDeleteConfirmationClick}
                        onOutsideClickClose={closePopupsOnOutsideClick}
                    />
                </div>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
