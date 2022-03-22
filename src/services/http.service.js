import axios from 'axios';
import configKeys from 'config.json';
import { isErrorExpectedHelper } from 'utils/helpers';

const http = axios.create({
  baseURL: configKeys.apiEndpoint,
});
// todo: make request auth checked (rules in rtdb + here push something(token mb))

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
