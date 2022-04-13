import httpService from './http.service';
import configKeys from '../config.json';

const usersEndpoint = 'users/';

const createUser = async (id, payload) => {
  const requestMethod = configKeys.useFirebase ? 'put' : 'post';
  const requestUrl = configKeys.useFirebase ? usersEndpoint + id : usersEndpoint;
  const requestBody = configKeys.useFirebase
    ? {
        ...payload,
        avatarLink:
          'https://firebasestorage.googleapis.com/v0/b/setapper-96945.appspot.com/o/avatar-default-1.png?alt=media&token=ea09d78d-b422-4c69-899f-8a44db990064',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      }
    : payload;

  const { data } = await httpService[requestMethod](requestUrl, requestBody);
  return data;
};

const getUserById = async (id) => {
  const { data } = await httpService.get(usersEndpoint + id);
  return data;
};

const updateUser = async (id, payload) => {
  const requestBody = configKeys.useFirebase
    ? {
        ...payload,
        updatedAt: Date.now(),
      }
    : payload;
  const { data } = await httpService.patch(usersEndpoint + id, requestBody);
  return data;
};

const usersService = {
  createUser,
  getUserById,
  updateUser,
};

export default usersService;
