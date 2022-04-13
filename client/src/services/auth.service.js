import axios from 'axios';
import localStorageService from './localStorage.service';
import configKeys from '../config.json';

const authHttp = axios.create({
  baseURL: configKeys.useFirebase ? configKeys.firebaseAuthApiEndpoint : `${configKeys.apiEndpoint}auth/`,
  params: {
    key: configKeys.useFirebase ? process.env.REACT_APP_FIREBASE_API_KEY : undefined,
  },
});

const signUp = async (payload) => {
  const requestUrl = configKeys.useFirebase ? 'accounts:signUp' : 'signUp';
  const requestBody = configKeys.useFirebase ? { ...payload, returnSecureToken: true } : payload;
  const { data } = await authHttp.post(requestUrl, requestBody);
  return data;
};

const logIn = async ({ email, password }) => {
  const requestUrl = configKeys.useFirebase ? 'accounts:signInWithPassword' : 'signInWithPassword';
  const { data } = await authHttp.post(requestUrl, { email, password, returnSecureToken: true });
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
