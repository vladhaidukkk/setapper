import { combineReducers } from '@reduxjs/toolkit';
import authReducer from 'store/auth/auth.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
