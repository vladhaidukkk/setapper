import authSlice from 'store/auth/auth.slice';
import { authService } from 'services';
import localStorageService from 'services/localStorage.service';
import { historyUtil } from 'utils/core';
import { handleError } from 'store/errors/errors.actions';
import { errorConstants } from 'utils/constants';
import { createAction } from '@reduxjs/toolkit';
import { createAccount, loadAccountById, removeAccountData } from 'store/account/account.actions';

const { succeed, loggedOut } = authSlice.actions;
const requested = createAction('auth/requested');
const failed = createAction('auth/failed');

const signUp = (payload) => async (dispatch) => {
  dispatch(requested());
  try {
    const jwtData = await authService.signUp(payload);
    localStorageService.setJwtData(jwtData);
    localStorageService.setAccountId(jwtData.localId);
    dispatch(succeed(jwtData.localId));
    dispatch(createAccount(jwtData.localId, { id: jwtData.localId, ...payload, password: undefined }));
    historyUtil.push('/');
  } catch (error) {
    dispatch(failed());
    dispatch(handleError({ type: errorConstants.types.AUTH, error }));
  }
};

const logIn = (payload) => async (dispatch) => {
  dispatch(requested());
  try {
    const jwtData = await authService.logIn(payload);
    localStorageService.setJwtData(jwtData);
    localStorageService.setAccountId(jwtData.localId);
    dispatch(succeed(jwtData.localId));
    dispatch(loadAccountById(jwtData.localId));
    historyUtil.push('/');
  } catch (error) {
    dispatch(failed());
    dispatch(handleError({ type: errorConstants.types.AUTH, error }));
  }
};

const logOut = () => (dispatch) => {
  localStorageService.removeJwtData();
  localStorageService.removeAccountId();
  dispatch(loggedOut());
  dispatch(removeAccountData());
  historyUtil.push('/auth/login'); // todo: change push when log out + all other
};

export { signUp, logIn, logOut };
