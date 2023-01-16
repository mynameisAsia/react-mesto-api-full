class Api {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
      
    }

    _getResponseData(res) {
        if (res.ok) {
            return res.json(); 
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUserInfo() {
        return fetch ('http://api.amam.mesto.nomoredomains.rocks/users/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then (this._getResponseData)
    }
  
    getInitialCards() {
        return fetch ('http://api.amam.mesto.nomoredomains.rocks/cards', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then (this._getResponseData)
    }

    updateUserInfo(data) {
        return fetch ('http://api.amam.mesto.nomoredomains.rocks/users/me', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
            .then (this._getResponseData)
    }

    addNewCard(data) {
        return fetch ('http://api.amam.mesto.nomoredomains.rocks/cards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then (this._getResponseData)
    }

    likeCards(cardId) {
        return fetch(`http://api.amam.mesto.nomoredomains.rocks/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then (this._getResponseData)
    }

    removeLike(cardId) {
        return fetch(`http://api.amam.mesto.nomoredomains.rocks/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then (this._getResponseData)
    }

    deleteCard(cardId) {
        return fetch(`http://api.amam.mesto.nomoredomains.rocks/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then (this._getResponseData)
    }

    changeAvatar(data) {
        return fetch('http://api.amam.mesto.nomoredomains.rocks/users/me/avatar', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
            .then (this._getResponseData)
    }
  }

export const api = new Api ({
    baseUrl: 'http://api.amam.mesto.nomoredomains.rocks',
    headers: {
      'Content-Type': 'application/json'
    }
  })
