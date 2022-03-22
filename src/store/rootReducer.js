import { combineReducers } from '@reduxjs/toolkit';
import authReducer from 'store/auth/auth.reducer';
import errorsReducer from 'store/errors/errors.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorsReducer,
});

export default rootReducer;
