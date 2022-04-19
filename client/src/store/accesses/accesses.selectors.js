const getCreatedByYouNotAcceptedAccesses = () => (state) => {
  return (
    state.accesses.entities &&
    state.accesses.entities.filter((entity) => entity.ownerId === state.auth.accountId && !entity.isAccepted)
  );
};

const getCreatedByYouAcceptedAccesses = () => (state) => {
  return (
    state.accesses.entities &&
    state.accesses.entities.filter((entity) => entity.ownerId === state.auth.accountId && entity.isAccepted)
  );
};

const getGivenNotAcceptedAccesses = () => (state) => {
  return (
    state.accesses.entities &&
    state.accesses.entities.filter((entity) => entity.userId === state.auth.accountId && !entity.isAccepted)
  );
};

const getGivenAcceptedAccesses = () => (state) => {
  return (
    state.accesses.entities &&
    state.accesses.entities.filter((entity) => entity.userId === state.auth.accountId && entity.isAccepted)
  );
};

const getAccessesLoadingStatus = () => (state) => {
  return state.accesses.isLoading;
};

export {
  getCreatedByYouNotAcceptedAccesses,
  getCreatedByYouAcceptedAccesses,
  getGivenNotAcceptedAccesses,
  getGivenAcceptedAccesses,
  getAccessesLoadingStatus,
};
