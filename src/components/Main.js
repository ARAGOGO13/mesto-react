import {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {api} from '../utils/api.js';
import Card from './Card.js';

export default function Main(props) {

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getProfileInformation().then((user) => {
                setUserName(user.name);
                setUserDescription(user.about);
                setUserAvatar(user.avatar);
            }).catch((err) => {console.log(err)});
        api.getInitialCards().then((cardArray) => setCards(cardArray))
            .catch((err) => console.log(err));
    })

    return (
        <main className="main">
            <section className="profile">
                <img className="profile__avatar" src={userAvatar} alt="Аватар профиля"/>
                <div className="profile__avatar-button" onClick={props.onEditAvatar}></div>
                <div className="profile__intro">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__edit-btn" type="button" onClick={props.onEditProfile}></button>
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button arial-label="Add" className="profile__add-btn" type="button" onClick={props.onAddPlace}></button>
            </section>
            <section className="photos">
                {cards.map((card) => {
                    return (<Card card={card} key={card._id} onCardClick={props.cardHandler} onClick={props.onCardImg}/>)
                })}
            </section>
        </main>
    )
}