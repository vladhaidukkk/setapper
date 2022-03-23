import { combineReducers } from '@reduxjs/toolkit';
import authReducer from 'store/auth/auth.reducer';
import errorsReducer from 'store/errors/errors.reducer';
import accountReducer from 'store/account/account.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  errors: errorsReducer,
});

export default rootReducer;
