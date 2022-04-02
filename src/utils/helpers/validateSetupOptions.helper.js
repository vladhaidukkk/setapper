import { builderConstants } from 'utils/constants';

const validateSetupOptionsHelper = (tool, options) => {
  return Object.keys(options).map((optionKey) => {
    const initialOption = builderConstants[tool].OPTIONS[optionKey];

    if (initialOption.required) {
      return options[optionKey] || initialOption.defaultValue;
    }
    return options[optionKey];
  });
};

export default validateSetupOptionsHelper;
