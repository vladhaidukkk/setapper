import { createAction } from '@reduxjs/toolkit';
import likesSlice from './likes.slice';
import { handleError } from '../errors/errors.actions';
import { errorConstants } from '../../utils/constants';
import { likesService } from '../../services';
import { decrementCommentLikes, incrementCommentLikes } from '../comments/comments.actions';

const { requested, received, failed, created, removed } = likesSlice.actions;
const creationRequested = createAction('likes/creationRequested');
const creationFailed = createAction('likes/creationFailed');
const removalRequested = createAction('likes/removalRequested');
const removalFailed = createAction('likes/removalFailed');

const loadAccountLikes = () => async (dispatch) => {
  dispatch(requested());
  try {
    const data = await likesService.getAccountLikes();
    dispatch(received(data));
  } catch (error) {
    dispatch(failed());
    dispatch(handleError({ type: errorConstants.types.LIKES, error }));
  }
};

const createLike = (payload) => async (dispatch) => {
  dispatch(creationRequested());
  try {
    const data = await likesService.createLike(payload);
    dispatch(created(data));
    dispatch(incrementCommentLikes(payload.commentId));
  } catch (error) {
    dispatch(creationFailed());
    dispatch(handleError({ type: errorConstants.types.LIKES, error }));
  }
};

const removeLike = (id, commentId) => async (dispatch) => {
  dispatch(removalRequested());
  try {
    await likesService.removeLike(id);
    dispatch(removed(id));
    dispatch(decrementCommentLikes(commentId));
  } catch (error) {
    dispatch(removalFailed());
    dispatch(handleError({ type: errorConstants.types.LIKES, error }));
  }
};

export { loadAccountLikes, createLike, removeLike };
