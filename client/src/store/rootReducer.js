import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/auth.reducer';
import errorsReducer from './errors/errors.reducer';
import accountReducer from './account/account.reducer';
import setupsReducer from './setups/setups.reducer';
import presetsReducer from './presets/presets.reducer';
import accessesReducer from './accesses/accesses.reducer';
import commentsReducer from './comments/comments.reducer';
import likesReducer from './likes/likes.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  setups: setupsReducer,
  presets: presetsReducer,
  errors: errorsReducer,
  accesses: accessesReducer,
  comments: commentsReducer,
  likes: likesReducer,
});

export default rootReducer;
