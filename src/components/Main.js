import { useContext } from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Main({
    onEditAvatar,
    onEditProfile,
    onAddPlace,
    onCardImg,
    cardHandler,
    onCardLikeClick,
    cards,
    onCardDeleteClick,
}) {
    const currentUser = useContext(CurrentUserContext);

    return (
        <main className="main">
            <section className="profile">
                <img className="profile__avatar" src={currentUser.avatar} alt="Аватар профиля" />
                <div className="profile__avatar-button" onClick={onEditAvatar}></div>
                <div className="profile__intro">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button className="profile__edit-btn" type="button" onClick={onEditProfile}></button>
                    <p className="profile__description">{currentUser.about}</p>
                </div>
                <button arial-label="Add" className="profile__add-btn" type="button" onClick={onAddPlace}></button>
            </section>
            <section className="photos">
                {cards.map((card) => {
                    return (
                        <Card
                            card={card}
                            key={card._id}
                            onCardClick={cardHandler}
                            onClick={onCardImg}
                            onCardLikeClick={onCardLikeClick}
                            onCardDeleteClick={onCardDeleteClick}
                        />
                    );
                })}
            </section>
        </main>
    );
}
