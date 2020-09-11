import axios from 'axios';

let userAuth = {};

const persistAuth = () => {
  sessionStorage.setItem('auth', JSON.stringify(userAuth));
};

const getPersistedAuth = () => {
  return JSON.parse(sessionStorage.getItem('auth'));
};

const deletePersistedAuth = () => {
  sessionStorage.removeItem('auth');
};

export const getAuthHeaders = () => {
  return {
    'X-SCB-Username': userAuth.username,
    'X-SCB-Token': userAuth.token,
  };
};

export const login = (username, password) => {
  return axios
    .post('http://localhost:8080/api/v1/auth/login', { username, password })
    .then((response) => {
      if (response.status === 200) {
        const roles = response.data.roles.split(';');
        userAuth = { ...response.data, roles };
        persistAuth();
        return true;
      } else {
        return false;
      }
    });
};

export const logout = () => {
  axios
    .post('http://localhost:8080/api/v1/auth/logout', null, {
      headers: getAuthHeaders(),
    })
    .then((response) => {
      deletePersistedAuth();
    });
};

export const getAuthStatus = () => {
  const auth = getPersistedAuth();
  return auth && auth.username && auth.token;
};

export const isInRole = (role) => {
  const auth = getPersistedAuth();
  return auth && auth.roles.indexOf(role) !== -1;
};
