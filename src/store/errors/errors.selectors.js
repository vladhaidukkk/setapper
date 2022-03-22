const getErrors = () => (state) => {
  return state.errors.entities && Object.values(state.errors.entities);
};

export { getErrors };
