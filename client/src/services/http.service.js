import axios from 'axios';
import configKeys from '../config.json';
import { formatUrlForFirebaseHelper, isErrorExpectedHelper } from '../utils/helpers';
import localStorageService from './localStorage.service';
import authService from './auth.service';

const apiEndpoint = process.env.NODE_ENV === 'production' ? configKeys.apiProdEndpoint : configKeys.apiDevEndpoint;
const http = axios.create({
  baseURL: configKeys.useFirebase ? configKeys.firebaseRDBApiEndpoint : apiEndpoint,
});

http.interceptors.request.use(
  async (config) => {
    if (configKeys.useFirebase) {
      config.url = formatUrlForFirebaseHelper(config.url);
    }

    const jwtRefreshToken = localStorageService.getJwtRefreshToken();
    const jwtExpiresDate = localStorageService.getJwtExpiresDate();

    if (jwtRefreshToken && jwtExpiresDate < Date.now()) {
      const jwtData = await authService.exchangeRefreshToken();

      if (configKeys.useFirebase) {
        localStorageService.setJwtData({
          accessToken: jwtData.id_token,
          refreshToken: jwtData.refresh_token,
          expiresIn: jwtData.expires_in,
        });
      } else {
        localStorageService.setJwtData(jwtData);
      }
    }

    const accessToken = localStorageService.getJwtAccessToken();
    if (accessToken) {
      if (configKeys.useFirebase) {
        config.params = { ...config.params, auth: accessToken };
      } else {
        config.headers = {
          Authorization: `Bearer ${accessToken}`,
        };
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (res) => {
    if (configKeys.useFirebase && res.data) {
      if (Object.keys(res.data).length === 0) {
        res.data = null;
      } else {
        res.data = Object.values(res.data)[0]?.id ? Object.values(res.data) : res.data;
      }
    }

    return res;
  },
  (error) => {
    if (!isErrorExpectedHelper(error)) {
      // todo: here can be logger
      error.message = 'Something went wrong:( Try it later.';
    }

    return Promise.reject(error);
  }
);

const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  patch: http.patch,
  delete: http.delete,
};

export default httpService;
