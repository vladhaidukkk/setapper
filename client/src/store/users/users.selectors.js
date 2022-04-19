const getAllUsers = () => (state) => {
  return state.users.entities;
};

const getUserById = (id) => (state) => {
  return state.users.entities && state.users.entities.find((user) => user._id === id);
};

const getUsersLoadingStatus = () => (state) => {
  return state.users.isLoading;
};

export { getAllUsers, getUsersLoadingStatus, getUserById };
