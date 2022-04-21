const getAccountData = () => (state) => {
  return state.account.data;
};

const getAccountLoadingStatus = () => (state) => {
  return state.account.isLoading;
};

export { getAccountData, getAccountLoadingStatus };
