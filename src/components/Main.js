import { useContext } from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Main(props) {
    const currentUser = useContext(CurrentUserContext);

    return (
        <main className="main">
            <section className="profile">
                <img className="profile__avatar" src={currentUser.avatar} alt="Аватар профиля" />
                <div className="profile__avatar-button" onClick={props.onEditAvatar}></div>
                <div className="profile__intro">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button className="profile__edit-btn" type="button" onClick={props.onEditProfile}></button>
                    <p className="profile__description">{currentUser.about}</p>
                </div>
                <button
                    arial-label="Add"
                    className="profile__add-btn"
                    type="button"
                    onClick={props.onAddPlace}
                ></button>
            </section>
            <section className="photos">
                {props.cards.map((card) => {
                    return (
                        <Card
                            card={card}
                            key={card._id}
                            onCardClick={props.cardHandler}
                            onClick={props.onCardImg}
                            onCardLikeClick={props.onCardLikeClick}
                            onCardDeleteClick={props.onCardDeleteClick}
                        />
                    );
                })}
            </section>
        </main>
    );
}
