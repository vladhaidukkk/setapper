import { createAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { accessesService } from '../../services';
import { handleError } from '../errors/errors.actions';
import { errorConstants } from '../../utils/constants';
import accessesSlice from './accesses.slice';

const { requested, received, failed, created, removed, updated } = accessesSlice.actions;
const creationRequested = createAction('accesses/creationRequested');
const creationFailed = createAction('accesses/creationFailed');
const removalRequested = createAction('accesses/removalRequested');
const removalFailed = createAction('accesses/removalFailed');
const updateRequested = createAction('accesses/updateRequested');
const updateFailed = createAction('accesses/updateFailed');

const loadAccountAccesses = () => async (dispatch) => {
  dispatch(requested());
  try {
    const data = await accessesService.getAccountAccesses();
    dispatch(received(data));
  } catch (error) {
    dispatch(failed());
    dispatch(handleError({ type: errorConstants.types.ACCESSES, error }));
  }
};

const createAccess = (payload) => async (dispatch) => {
  dispatch(creationRequested());
  try {
    const data = await accessesService.createAccess(payload);
    dispatch(created(data));
    toast.success('User was invited to setup');
  } catch (error) {
    dispatch(creationFailed());
    dispatch(handleError({ type: errorConstants.types.ACCESSES, error }));
  }
};

const removeAccess = (id) => async (dispatch) => {
  dispatch(removalRequested());
  try {
    await accessesService.removeAccess(id);
    dispatch(removed());
  } catch (error) {
    dispatch(removalFailed());
    dispatch(handleError({ type: errorConstants.types.ACCESSES, error }));
  }
};

const updateAccess = (id, payload) => async (dispatch) => {
  dispatch(updateRequested());
  try {
    const data = await accessesService.updateAccess(id, payload);
    dispatch(updated({ id, data }));
  } catch (error) {
    dispatch(updateFailed());
    dispatch(handleError({ type: errorConstants.types.ACCESSES, error }));
  }
};

export { loadAccountAccesses, createAccess, removeAccess, updateAccess };
