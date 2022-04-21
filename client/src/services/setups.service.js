import { nanoid } from 'nanoid';
import httpService from './http.service';
import configKeys from '../config.json';
import localStorageService from './localStorage.service';

const setupsEndpoint = 'setups/';

const getAccountSetups = async () => {
  const accountId = localStorageService.getAccountId();
  const requestParams = configKeys.useFirebase
    ? {
        orderBy: '"ownerId"',
        equalTo: `"${accountId}"`,
      }
    : undefined;

  const { data } = await httpService.get(setupsEndpoint, { params: requestParams });
  return data;
};

const createSetup = async (payload) => {
  const id = nanoid();
  const accountId = localStorageService.getAccountId();

  const requestMethod = configKeys.useFirebase ? 'put' : 'post';
  const requestUrl = configKeys.useFirebase ? setupsEndpoint + id : setupsEndpoint;
  // todo: id -> _id
  const requestBody = configKeys.useFirebase
    ? {
        id,
        ...payload,
        ownerId: accountId,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      }
    : payload;

  const { data } = await httpService[requestMethod](requestUrl, requestBody);
  return data;
};

const removeSetup = async (id) => {
  const { data } = await httpService.delete(setupsEndpoint + id);
  return data;
};

const updateSetup = async (id, payload) => {
  const requestBody = configKeys.useFirebase
    ? {
        ...payload,
        updatedAt: Date.now(),
      }
    : payload;
  const { data } = await httpService.patch(setupsEndpoint + id, requestBody);
  return data;
};

const setupsService = {
  getAccountSetups,
  createSetup,
  removeSetup,
  updateSetup,
};

export default setupsService;
