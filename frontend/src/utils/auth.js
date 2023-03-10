export const BASE_URL = 'https://api.amam.mesto.nomoredomains.rocks';

export function getResponseData(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
}

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin': 'http://amam.mesto.nomoredomains.rocks'
    },
    body: JSON.stringify({email, password})
  })
        .then(getResponseData);
};

export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin': 'http://amam.mesto.nomoredomains.rocks'
      },
      body: JSON.stringify({email, password})
    })
          .then(getResponseData);
  };

  export const tokenCheck = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${token}`
        },
      })
            .then(getResponseData);
  }