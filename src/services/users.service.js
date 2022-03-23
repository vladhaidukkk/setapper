import httpService from 'services/http.service';

const usersEndpoint = 'users/';

const createUser = async (id, payload) => {
  const { data } = await httpService.put(usersEndpoint + id, payload);
  return data;
};

const getUserById = async (id) => {
  const { data } = await httpService.get(usersEndpoint + id);
  return data;
};

const usersService = {
  createUser,
  getUserById,
};

export default usersService;
