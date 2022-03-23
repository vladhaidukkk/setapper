import accountSlice from 'store/account/account.slice';
import { createAction } from '@reduxjs/toolkit';
import { usersService } from 'services';
import { handleError } from 'store/errors/errors.actions';
import { errorConstants } from 'utils/constants';

const { requested, received, creationRequested, created, dataRemoved } = accountSlice.actions;
const failed = createAction('account/failed');

const createAccount = (id, payload) => async (dispatch) => {
  dispatch(creationRequested());
  try {
    const accountData = await usersService.createUser(id, { ...payload, registeredAt: Date.now() });
    dispatch(created(accountData));
  } catch (error) {
    dispatch(failed());
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

export { createAccount, loadAccountById, removeAccountData };
