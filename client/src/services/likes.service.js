import httpService from './http.service';

const likesEndpoint = 'likes/';

// todo: no firebase logic
const getAccountLikes = async () => {
  const { data } = await httpService.get(likesEndpoint);
  return data;
};

const createLike = async (payload) => {
  const { data } = await httpService.post(likesEndpoint, payload);
  return data;
};

const removeLike = async (id) => {
  const { data } = await httpService.delete(likesEndpoint + id);
  return data;
};

const likesService = {
  getAccountLikes,
  createLike,
  removeLike,
};

export default likesService;
