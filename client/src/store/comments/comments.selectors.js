const getCommentsLoadingStatus = () => (state) => {
  return state.comments.isLoading;
};

const getCommentsList = () => (state) => {
  return state.comments.entities;
};

export { getCommentsLoadingStatus, getCommentsList };
