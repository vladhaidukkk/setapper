import httpService from './http.service';

const accessesEndpoint = 'accesses/';

// todo: no firebase logic
const getAccountAccesses = async () => {
  const { data } = await httpService.get(accessesEndpoint);
  return data;
};

const createAccess = async (payload) => {
  const { data } = await httpService.post(accessesEndpoint, payload);
  return data;
};

const removeAccess = async (id) => {
  const { data } = await httpService.delete(accessesEndpoint + id);
  return data;
};

const updateAccess = async (id, payload) => {
  const { data } = httpService.patch(accessesEndpoint + id, payload);
  return data;
};

const accessesService = {
  getAccountAccesses,
  createAccess,
  removeAccess,
  updateAccess,
};

export default accessesService;
