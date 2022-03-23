import axios from 'axios';
import configKeys from 'config.json';
import { formatUrlForFirebaseHelper, isErrorExpectedHelper } from 'utils/helpers';
import localStorageService from 'services/localStorage.service';
import authService from 'services/auth.service';

const http = axios.create({
  baseURL: configKeys.apiEndpoint,
});
// todo: make request auth checked (rules in rtdb + here push something(token mb))

http.interceptors.request.use(
  async (config) => {
    if (configKeys.useFirebase) {
      config.url = formatUrlForFirebaseHelper(config.url);
    }

    const jwtRefreshToken = localStorageService.getJwtRefreshToken();
    const jwtExpiresDate = localStorageService.getJwtExpiresDate();

    if (jwtRefreshToken && jwtExpiresDate < Date.now()) {
      const jwtData = await authService.exchangeRefreshToken();
      localStorageService.setJwtData({
        idToken: jwtData.id_token,
        refreshToken: jwtData.refresh_token,
        expiresIn: jwtData.expires_in,
      });
    }

    return config;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (resp) => resp,
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
