import { createAction } from '@reduxjs/toolkit';
import commentsSlice from './comments.slice';
import { commentsService } from '../../services';
import { handleError } from '../errors/errors.actions';
import { errorConstants } from '../../utils/constants';

const { received, requested, failed, created, removed, incLikes, decLikes } = commentsSlice.actions;
const creationRequested = createAction('comments/creationRequested');
const creationFailed = createAction('comments/creationFailed');
const removalRequested = createAction('comments/removalRequested');
const removalFailed = createAction('comments/removalFailed');

const loadPresetComments = (presetId) => async (dispatch) => {
  dispatch(requested());
  try {
    const data = await commentsService.getPresetComments(presetId);
    dispatch(received(data));
  } catch (error) {
    dispatch(failed());
    dispatch(handleError({ type: errorConstants.types.COMMENTS, error }));
  }
};

const loadSetupComments = (setupId) => async (dispatch) => {
  dispatch(requested());
  try {
    const data = await commentsService.getSetupComments(setupId);
    dispatch(received(data));
  } catch (error) {
    dispatch(failed());
    dispatch(handleError({ type: errorConstants.types.COMMENTS, error }));
  }
};

const createComment = (payload) => async (dispatch) => {
  dispatch(creationRequested());
  try {
    const data = await commentsService.createComment(payload);
    dispatch(created(data));
  } catch (error) {
    dispatch(creationFailed());
    dispatch(handleError({ type: errorConstants.types.COMMENTS, error }));
  }
};

const removeComment = (id) => async (dispatch) => {
  dispatch(removalRequested());
  try {
    await commentsService.removeComment(id);
    dispatch(removed(id));
  } catch (error) {
    dispatch(removalFailed());
    dispatch(handleError({ type: errorConstants.types.COMMENTS, error }));
  }
};

const incrementCommentLikes = (id) => (dispatch) => {
  dispatch(incLikes(id));
};

const decrementCommentLikes = (id) => (dispatch) => {
  dispatch(decLikes(id));
};

export {
  loadPresetComments,
  loadSetupComments,
  createComment,
  removeComment,
  incrementCommentLikes,
  decrementCommentLikes,
};
