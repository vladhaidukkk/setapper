import authSlice from 'store/auth/auth.slice';
import { authService } from 'services';
import localStorageService from 'services/localStorage.service';
import { history } from 'utils/core';
import { handleError } from 'store/errors/errors.actions';
import { errorConstants } from 'utils/constants';
import { createAction } from '@reduxjs/toolkit';

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
    history.push('/');
  } catch (error) {
    dispatch(failed());
    dispatch(handleError({ key: errorConstants.keys.AUTH, error }));
  }
};

const logIn = (payload) => async (dispatch) => {
  dispatch(requested());
  try {
    const jwtData = await authService.logIn(payload);
    localStorageService.setJwtData(jwtData);
    localStorageService.setAccountId(jwtData.localId);
    dispatch(succeed(jwtData.localId));
    history.push('/');
  } catch (error) {
    dispatch(failed());
    dispatch(handleError({ key: errorConstants.keys.AUTH, error }));
  }
};

const logOut = () => (dispatch) => {
  localStorageService.removeJwtData();
  localStorageService.removeAccountId();
  dispatch(loggedOut());
  history.push('/auth/login'); // todo: change push when log out + all other
};

export { signUp, logIn, logOut };
