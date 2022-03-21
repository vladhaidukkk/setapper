import authSlice from 'store/auth/auth.slice';
import { authService } from 'services';
import localStorageService from 'services/localStorage.service';
import { history } from 'utils/core';

const { requested, succeed, failed, loggedOut } = authSlice.actions;

const signUp = (payload) => async (dispatch) => {
  dispatch(requested());
  try {
    const jwtData = await authService.signUp(payload);
    localStorageService.setJwtData(jwtData);
    localStorageService.setAccountId(jwtData.localId);
    dispatch(succeed(jwtData.localId));
    history.push('/');
  } catch (error) {
    const errorMessage = error.response?.data.error.message || error.message;
    dispatch(failed(errorMessage));
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
    const errorMessage = error.response?.data.error.message || error.message;
    dispatch(failed(errorMessage));
  }
};

const logOut = () => (dispatch) => {
  localStorageService.removeJwtData();
  localStorageService.removeAccountId();
  dispatch(loggedOut());
  history.push('/auth/login'); // todo: change push when log out + all other
};

export { signUp, logIn, logOut };
