import { createSlice } from '@reduxjs/toolkit';
import localStorageService from 'services/localStorage.service';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accountId: localStorageService.getAccountId() || null,
    isLoggedIn: !!localStorageService.getJwtAccessToken(),
  },
  reducers: {
    succeed: (state, action) => {
      state.accountId = action.payload;
      state.isLoggedIn = true;
    },
    loggedOut: (state) => {
      state.accountId = null;
      state.isLoggedIn = false;
    },
  },
});

export default authSlice;
