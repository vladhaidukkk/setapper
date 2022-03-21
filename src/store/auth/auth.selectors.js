const getAccountId = () => (state) => {
  return state.auth.accountId;
};

const getLoggedInStatus = () => (state) => {
  return state.auth.isLoggedIn;
};

const getAuthError = () => (state) => {
  return state.auth.error;
};

export { getAccountId, getLoggedInStatus, getAuthError };
