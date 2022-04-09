import httpService from 'services/http.service';

const usersEndpoint = 'users/';

const createUser = async (id, payload) => {
  const { data } = await httpService.put(usersEndpoint + id, {
    ...payload,
    registeredAt: Date.now(),
    avatarLink:
      'https://firebasestorage.googleapis.com/v0/b/setapper-96945.appspot.com/o/avatar-default-1.png?alt=media&token=ea09d78d-b422-4c69-899f-8a44db990064',
  });
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
