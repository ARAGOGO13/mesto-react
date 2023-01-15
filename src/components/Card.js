import React from "react";

export default function Card({card, onCardClick}) {

    function handleClick() {
       onCardClick(card);
    }

    return (<div className="card">
            <img className="card__photo"
                 src={`${card.link}`} alt="" onClick={handleClick}/>
            <div className="card__info">
                <h2 className="card__heading">{card.name}</h2>
                <div className="card__like-section">
                    <button arial-label="Like" className="card__like-btn" type="button"></button>
                    <p className="card__like-counter">{card.likes.length}</p>
                </div>
            </div>
            <button arial-label="Delete" className="card__delete-btn" type="button"></button>
        </div>
    );
}