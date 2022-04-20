// todo: no firebase logic
import httpService from './http.service';

const commentsEndpoint = 'comments/';

const getPresetComments = async (id) => {
  const requestParams = {
    orderBy: 'presetId',
    equalTo: id,
  };
  const { data } = await httpService.get(commentsEndpoint, { params: requestParams });
  return data;
};

const getSetupComments = async (id) => {
  const requestParams = {
    orderBy: 'setupId',
    equalTo: id,
  };
  const { data } = await httpService.get(commentsEndpoint, { params: requestParams });
  return data;
};

const createComment = async (payload) => {
  const { data } = await httpService.post(commentsEndpoint, payload);
  return data;
};

const removeComment = async () => {};

const commentsService = {
  getPresetComments,
  getSetupComments,
  createComment,
  removeComment,
};

export default commentsService;
