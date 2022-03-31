import httpService from 'services/http.service';

const presetsEndpoint = 'presets/';

const getPresets = async () => {
  const { data } = await httpService.get(presetsEndpoint);
  return data;
};

const presetsService = {
  getPresets,
};

export default presetsService;
