import { combineReducers } from '@reduxjs/toolkit';
import authReducer from 'store/auth/auth.reducer';
import errorsReducer from 'store/errors/errors.reducer';
import accountReducer from 'store/account/account.reducer';
import setupsReducer from 'store/setups/setups.reducer';
import presetsReducer from 'store/presets/presets.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  setups: setupsReducer,
  presets: presetsReducer,
  errors: errorsReducer,
});

export default rootReducer;
