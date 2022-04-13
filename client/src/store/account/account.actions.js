import accountSlice from './account.slice';
import { usersService } from '../../services';
import { handleError } from '../errors/errors.actions';
import { errorConstants } from '../../utils/constants';

const { requested, received, failed, creationRequested, created, creationFailed, dataRemoved } = accountSlice.actions;

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

export { createAccount, loadAccountById, removeAccountData };
