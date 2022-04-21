import { createAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import accountSlice from './account.slice';
import { usersService } from '../../services';
import { handleError } from '../errors/errors.actions';
import { errorConstants } from '../../utils/constants';

const { requested, received, failed, creationRequested, created, creationFailed, dataRemoved, updated } =
  accountSlice.actions;
const updateRequested = createAction('account/updateRequested');
const updateFailed = createAction('account/updateFailed');

const createAccount = (id, payload) => async (dispatch) => {
  dispatch(creationRequested());
  try {
    const accountData = await usersService.createUser(id, payload);
    dispatch(created(accountData));
  } catch (error) {
    dispatch(creationFailed());
    dispatch(handleError({ type: errorConstants.types.ACCOUNT, error }));
  }
};

const loadAccountById = (id) => async (dispatch) => {
  dispatch(requested());
  try {
    const accountData = await usersService.getUserById(id);
    dispatch(received(accountData));
  } catch (error) {
    dispatch(failed());
    dispatch(handleError({ type: errorConstants.types.ACCOUNT, error }));
  }
};

const removeAccountData = () => (dispatch) => {
  dispatch(dataRemoved());
};

const updateAccount = (payload) => async (dispatch, getState) => {
  dispatch(updateRequested());
  try {
    const { accountId } = getState().auth;
    const data = await usersService.updateUser(accountId, payload);
    dispatch(updated(data));
    toast.success('Account was updated');
  } catch (error) {
    dispatch(updateFailed());
    dispatch(handleError({ type: errorConstants.types.ACCOUNT, error }));
  }
};

export { createAccount, loadAccountById, removeAccountData, updateAccount };
