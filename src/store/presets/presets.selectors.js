const getPresetsLoadingStatus = () => (state) => {
  return state.presets.isLoading;
};

const getPresetById = (id) => (state) => {
  return state.presets.entities && state.presets.entities.find((preset) => preset.id === id);
};

const getPresetsByTool = (tool) => (state) => {
  return state.presets.entities && state.presets.entities.filter((preset) => preset.tool === tool);
};

export { getPresetsLoadingStatus, getPresetById, getPresetsByTool };
