const getSetupsLoadingStatus = () => (state) => {
  return state.setups.isLoading;
};

const getSetupById = (id) => (state) => {
  return state.setups.entities && state.setups.entities.find((setup) => setup.id === id);
};

const getSetupsByTool = (tool) => (state) => {
  return state.setups.entities && state.setups.entities.filter((setup) => setup.tool === tool);
};

export { getSetupsLoadingStatus, getSetupById, getSetupsByTool };
