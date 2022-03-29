import httpService from 'services/http.service';
import configKeys from 'config.json';
import { nanoid } from 'nanoid';

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
  const id = nanoid();
  const { data } = await httpService.put(setupsEndpoint + id, {
    id,
    ...payload,
    createdAt: Date.now(),
    modifiedAt: Date.now(),
  });

  return data;
};

const removeSetup = async (id) => {
  const { data } = await httpService.delete(setupsEndpoint + id);
  return data;
};

const setupsService = {
  getUserSetups,
  createSetup,
  removeSetup,
};

export default setupsService;
