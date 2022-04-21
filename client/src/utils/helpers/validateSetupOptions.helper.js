import { builderConstants } from '../constants';

const validateSetupOptionsHelper = (tool, options) => {
  return Object.keys(options).reduce((acc, optionKey) => {
    const initialOption = builderConstants[tool].OPTIONS[optionKey];

    if (initialOption.required) {
      acc[optionKey] = options[optionKey] || initialOption.defaultValue;
    } else {
      acc[optionKey] = options[optionKey];
    }

    return acc;
  }, {});
};

export default validateSetupOptionsHelper;
