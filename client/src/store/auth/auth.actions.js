import { createAction } from '@reduxjs/toolkit';
import authSlice from './auth.slice';
import { authService, localStorageService } from '../../services';
import { historyUtil } from '../../utils/core';
import { handleError } from '../errors/errors.actions';
import { errorConstants } from '../../utils/constants';
import { createAccount, loadAccountById, removeAccountData } from '../account/account.actions';
import configKeys from '../../config.json';

const { succeed, loggedOut } = authSlice.actions;
const requested = createAction('auth/requested');
const failed = createAction('auth/failed');

const signUp = (payload) => async (dispatch) => {
  dispatch(requested());
  try {
    const jwtData = await authService.signUp(payload);

    if (configKeys.useFirebase) {
      localStorageService.setJwtData({
        accessToken: jwtData.idToken,
        refreshToken: jwtData.refreshToken,
        expiresIn: jwtData.expiresIn,
      });
      localStorageService.setAccountId(jwtData.localId);
      dispatch(succeed(jwtData.localId));
      // todo: id -> _id
      dispatch(createAccount(jwtData.localId, { id: jwtData.localId, ...payload, password: undefined }));
    } else {
      localStorageService.setJwtData(jwtData);
      localStorageService.setAccountId(jwtData.userId);
      dispatch(succeed(jwtData.userId));
      dispatch(loadAccountById(jwtData.userId));
    }

    historyUtil.push('/');
  } catch (error) {
    dispatch(failed());
    dispatch(handleError({ type: errorConstants.types.AUTH, error }));
  }
};

const logIn = (payload, location) => async (dispatch) => {
  dispatch(requested());
  try {
    const jwtData = await authService.logIn(payload);

    if (configKeys.useFirebase) {
      localStorageService.setJwtData({
        accessToken: jwtData.idToken,
        refreshToken: jwtData.refreshToken,
        expiresIn: jwtData.expiresIn,
      });
      localStorageService.setAccountId(jwtData.localId);
      dispatch(succeed(jwtData.localId));
      dispatch(loadAccountById(jwtData.localId));
    } else {
      localStorageService.setJwtData(jwtData);
      localStorageService.setAccountId(jwtData.userId);
      dispatch(succeed(jwtData.userId));
      dispatch(loadAccountById(jwtData.userId));
    }

    historyUtil.push(location?.state?.from?.pathname || '/');
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
  historyUtil.push('/auth/login');
};

export { signUp, logIn, logOut };
