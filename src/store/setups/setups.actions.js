import setupsSlice from 'store/setups/setups.slice';
import { handleError } from 'store/errors/errors.actions';
import { setupsService } from 'services';
import { errorConstants } from 'utils/constants';
import { createAction } from '@reduxjs/toolkit';
import { historyUtil } from 'utils/core';

const { requested, received, failed, created, removed, updated } = setupsSlice.actions;
const creationRequested = createAction('setups/creationRequested');
const creationFailed = createAction('setups/creationFailed');
const removalRequested = createAction('setups/removalRequested');
const removalFailed = createAction('setups/removalFailed');
const updateRequested = createAction('setups/updateRequested');
const updateFailed = createAction('setups/updateFailed');

const loadUserSetups = (userId) => async (dispatch) => {
  dispatch(requested());
  try {
    const data = await setupsService.getUserSetups(userId);
    dispatch(received(data));
  } catch (error) {
    dispatch(failed());
    dispatch(handleError({ type: errorConstants.types.SETUPS, error }));
  }
};

const createSetup = (payload) => async (dispatch, getState) => {
  dispatch(creationRequested());
  try {
    const { accountId } = getState().auth;
    const data = await setupsService.createSetup({ ...payload, ownerId: accountId });
    dispatch(created(data));
    historyUtil.push(`/builder/${data.tool}/${data.id}`);
  } catch (error) {
    dispatch(creationFailed());
    dispatch(handleError({ type: errorConstants.types.SETUPS, error }));
  }
};

const removeSetup = (id, redirectPath) => async (dispatch) => {
  dispatch(removalRequested());
  try {
    await setupsService.removeSetup(id);
    dispatch(removed(id));
    historyUtil.replace(redirectPath);
  } catch (error) {
    dispatch(removalFailed());
    dispatch(handleError({ type: errorConstants.types.SETUPS, error }));
  }
};

const updateSetup = (id, payload) => async (dispatch) => {
  dispatch(updateRequested());
  try {
    const data = await setupsService.updateSetup(id, payload);
    dispatch(updated({ id, data }));
    historyUtil.push(`/builder/${data.tool}/${data.id}`);
  } catch (error) {
    dispatch(updateFailed());
    dispatch(handleError({ type: errorConstants.types.SETUPS, error }));
  }
};

export { loadUserSetups, createSetup, removeSetup, updateSetup };
