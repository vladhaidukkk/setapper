const getCommentLike = (commentId) => (state) => {
  return state.likes.entities && state.likes.entities.find((entity) => entity.commentId === commentId);
};

const getLikesLoadingStatus = () => (state) => {
  return state.likes.isLoading;
};

export { getCommentLike, getLikesLoadingStatus };
