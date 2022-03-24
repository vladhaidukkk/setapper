import setupsSlice from 'store/setups/setups.slice';
import { handleError } from 'store/errors/errors.actions';
import { setupsService } from 'services';
import { errorConstants } from 'utils/constants';
import { createAction } from '@reduxjs/toolkit';

const { requested, received, failed, created } = setupsSlice.actions;
const creationRequested = createAction('setups/creationRequested');
const creationFailed = createAction('setups/creationFailed');

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

const createSetup = (payload) => async (dispatch) => {
  dispatch(creationRequested());
  try {
    const data = await setupsService.createSetup(payload);
    dispatch(created(data));
  } catch (error) {
    dispatch(creationFailed());
    dispatch(handleError({ type: errorConstants.types.SETUPS, error }));
  }
};

export { loadUserSetups, createSetup };
