class Api {
    constructor({url, headers}) {
        this._url = url;
        this._headers = headers;
    }

    _getResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            Promise.reject(`Ошибка ${res.status} ${res.statusText}`);
        }
    }

    getInitialCards() {
        return fetch(`${this._url}cards`, {
            method: 'GET',
            headers: this._headers
        })
            .then(this._getResponse)
    }

    getProfileInformation() {
        return fetch(`${this._url}users/me`, {
            method: 'GET',
            headers: this._headers
        })
            .then(this._getResponse)
    }

    patchUserInfo(userData) {
        return fetch(`${this._url}users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(userData)
        })
            .then(this._getResponse);
    }

    postNewCard(newCardData) {
        return fetch(`${this._url}cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(newCardData)
        })
            .then(this._getResponse);
    }

    deleteCard(id) {
        return fetch(`${this._url}cards/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._getResponse);
    }

    putCardLike(id) {
        return fetch(`${this._url}cards/${id}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
            .then(this._getResponse);
    }

    deleteCardLike(id) {
        return fetch(`${this._url}cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._getResponse);
    }

    patchNewAvatar(avatar) {
        return fetch(`${this._url}users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({avatar: avatar})
        })
            .then(this._getResponse);
    }
}

const apiConfig = {
    url: "https://mesto.nomoreparties.co/v1/cohort-55/",
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        authorization: "eb0039d3-e6aa-4ad7-aa59-39dc515af41e"
    }
}
export const api = new Api(apiConfig);