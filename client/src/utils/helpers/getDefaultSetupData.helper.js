import { builderConstants } from '../constants';

const getDefaultSetupDataHelper = (tool) => {
  const initialOptions = builderConstants[tool].OPTIONS;

  return {
    title: '',
    description: '',
    version: '',
    options: Object.keys(initialOptions).reduce((acc, optionKey) => {
      const option = initialOptions[optionKey];
      acc[optionKey] = option.defaultValue;

      return acc;
    }, {}),
  };
};

export default getDefaultSetupDataHelper;
