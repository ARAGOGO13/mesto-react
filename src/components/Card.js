import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Card({ card, onCardClick, onCardLikeClick, onCardDeleteClick }) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLikeClick(card);
    }

    function handleDeleteClick() {
        onCardDeleteClick(card);
    }

    return (
        <div className="card">
            <img className="card__photo" src={`${card.link}`} alt="" onClick={handleClick} />
            <div className="card__info">
                <h2 className="card__heading">{card.name}</h2>
                <div className="card__like-section">
                    <button
                        arial-label="Like"
                        className={`card__like-btn ${isLiked && 'card__like-btn_active'}`}
                        type="button"
                        onClick={handleLikeClick}
                    ></button>
                    <p className="card__like-counter">{card.likes.length}</p>
                </div>
            </div>
            {isOwn && (
                <button
                    arial-label="Delete"
                    className="card__delete-btn card__delete-btn_active"
                    type="button"
                    onClick={handleDeleteClick}
                />
            )}
        </div>
    );
}
