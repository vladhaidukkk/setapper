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
const setJwtData = ({ accessToken, refreshToken, expiresIn = 3600 }) => {
  const data = {
    accessToken,
    refreshToken,
    expiresDate: Date.now() + Number(expiresIn) * 1000,
  };
  set(localStorageConstants.keys.JWT_DATA, data, true);
};

const getJwtData = () => {
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
const setAccountId = (value) => {
  set(localStorageConstants.keys.ACCOUNT_ID, value);
};

const getAccountId = () => {
  return get(localStorageConstants.keys.ACCOUNT_ID);
};

const removeAccountId = () => {
  remove(localStorageConstants.keys.ACCOUNT_ID);
};

// Theme
const setTheme = (value) => {
  set(localStorageConstants.keys.THEME, value);
};

const getTheme = () => {
  return get(localStorageConstants.keys.THEME);
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
  setTheme,
  getTheme,
};

export default localStorageService;
