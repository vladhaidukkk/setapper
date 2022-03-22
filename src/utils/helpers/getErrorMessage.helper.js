import errorConstants from 'utils/constants/error.constants';

const getErrorMessageHelper = (error) => {
  const initialMessage = error.response?.data.error.message || error.message;
  return errorConstants.messages[initialMessage] || initialMessage;
};

export default getErrorMessageHelper;
