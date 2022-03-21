import { localStorageConstants } from 'utils/constants';

const set = (key, value, stringify = false) => {
  const data = stringify ? JSON.stringify(value) : value;
  localStorage.setItem(key, data);
};

const get = (key, parse = false) => {
  const data = localStorage.getItem(key);
  return parse ? JSON.parse(data) : data;
};

const remove = (key) => {
  localStorage.removeItem(key);
};

// JwtData
const setJwtData = ({ idToken, refreshToken, expiresIn = 3600 }) => {
  const data = {
    accessToken: idToken,
    refreshToken,
    expiresDate: Date.now() + expiresIn * 1000,
  };
  set(localStorageConstants.keys.JWT_DATA, data, true);
};

const getJwtData = () => {
  console.log(typeof get(localStorageConstants.keys.JWT_DATA, true));
  return get(localStorageConstants.keys.JWT_DATA, true);
};

const getJwtAccessToken = () => {
  return getJwtData()?.accessToken;
};

const getJwtRefreshToken = () => {
  return getJwtData()?.refreshToken;
};

const getJwtExpiresDate = () => {
  return getJwtData()?.expiresDate;
};

const removeJwtData = () => {
  remove(localStorageConstants.keys.JWT_DATA);
};

// AccountId
const setAccountId = (id) => {
  set(localStorageConstants.keys.ACCOUNT_ID, id);
};

const getAccountId = () => {
  return get(localStorageConstants.keys.ACCOUNT_ID);
};

const removeAccountId = () => {
  remove(localStorageConstants.keys.ACCOUNT_ID);
};

const localStorageService = {
  set,
  get,
  remove,
  setJwtData,
  getJwtData,
  getJwtAccessToken,
  getJwtRefreshToken,
  getJwtExpiresDate,
  removeJwtData,
  setAccountId,
  getAccountId,
  removeAccountId,
};

export default localStorageService;
