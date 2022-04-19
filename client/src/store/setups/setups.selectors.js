const getSetupsLoadingStatus = () => (state) => {
  return state.setups.isLoading;
};

const getSetupById = (id) => (state) => {
  return state.setups.entities && state.setups.entities.find((setup) => setup._id === id);
};

const getSetupsByTool = (tool) => (state) => {
  return (
    state.setups.entities &&
    state.setups.entities.filter((setup) => {
      if (setup.tool === tool) {
        const access = state.accesses.entities && state.accesses.entities.find((item) => item.setupId === setup._id);
        return setup.ownerId === state.auth.accountId || access?.isAccepted;
      }
      return false;
    })
  );
};

export { getSetupsLoadingStatus, getSetupById, getSetupsByTool };
