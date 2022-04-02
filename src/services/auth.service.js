import axios from 'axios';
import localStorageService from 'services/localStorage.service';
import configKeys from 'config.json';

const authHttp = axios.create({
  baseURL: configKeys.useFirebase ? configKeys.firebaseAuthApiEndpoint : '',
  params: {
    key: process.env.REACT_APP_FIREBASE_API_KEY,
  },
});

const signUp = async ({ email, password }) => {
  const { data } = await authHttp.post('accounts:signUp', { email, password, returnSecureToken: true });
  return data;
};

const logIn = async ({ email, password }) => {
  const { data } = await authHttp.post('accounts:signInWithPassword', { email, password, returnSecureToken: true });
  return data;
};

const exchangeRefreshToken = async () => {
  const refreshToken = localStorageService.getJwtRefreshToken();
  const { data } = await authHttp.post('token', {
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
  });
  return data;
};

const authService = {
  signUp,
  logIn,
  exchangeRefreshToken,
};

export default authService;
