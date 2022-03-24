import { v4 as uuidv4 } from 'uuid';
import httpService from 'services/http.service';
import configKeys from 'config.json';
import localStorageService from 'services/localStorage.service';

const setupsEndpoint = 'setups/';

const getUserSetups = async (userId) => {
  const params = configKeys.useFirebase
    ? {
        orderBy: '"ownerId"',
        equalTo: `"${userId}"`,
      }
    : { ownerId: userId };
  const { data } = await httpService.get(setupsEndpoint, { params });

  return data;
};

const createSetup = async (payload) => {
  const id = uuidv4();
  const accountId = localStorageService.getAccountId();
  const { data } = await httpService.put(setupsEndpoint + id, { id, ...payload, ownerId: accountId });
  return data;
};

const setupsService = {
  getUserSetups,
  createSetup,
};

export default setupsService;
