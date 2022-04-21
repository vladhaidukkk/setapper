const isErrorExpectedHelper = (error) => {
  return error.response && error.response.status >= 400 && error.response.status < 500;
};

export default isErrorExpectedHelper;
