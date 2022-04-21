import { createAction } from '@reduxjs/toolkit';
import setupsSlice from './setups.slice';
import { handleError } from '../errors/errors.actions';
import { setupsService } from '../../services';
import { errorConstants } from '../../utils/constants';
import { historyUtil } from '../../utils/core';
import { removeSetupAccesses } from '../accesses/accesses.actions';

const { requested, received, failed, created, removed, updated } = setupsSlice.actions;
const creationRequested = createAction('setups/creationRequested');
const creationFailed = createAction('setups/creationFailed');
const removalRequested = createAction('setups/removalRequested');
const removalFailed = createAction('setups/removalFailed');
const updateRequested = createAction('setups/updateRequested');
const updateFailed = createAction('setups/updateFailed');

const loadAccountSetups = () => async (dispatch) => {
  dispatch(requested());
  try {
    const data = await setupsService.getAccountSetups();
    dispatch(received(data));
  } catch (error) {
    dispatch(failed());
    dispatch(handleError({ type: errorConstants.types.SETUPS, error }));
  }
};

const createSetup = (payload) => async (dispatch) => {
  dispatch(creationRequested());
  try {
    const data = await setupsService.createSetup(payload);
    dispatch(created(data));
    historyUtil.push(`/builder/${data.tool}/${data._id}`);
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
    dispatch(removeSetupAccesses(id));
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
    historyUtil.push(`/builder/${data.tool}/${id}`);
  } catch (error) {
    dispatch(updateFailed());
    dispatch(handleError({ type: errorConstants.types.SETUPS, error }));
  }
};

export { loadAccountSetups, createSetup, removeSetup, updateSetup };
