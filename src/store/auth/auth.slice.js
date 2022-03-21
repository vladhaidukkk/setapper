import { createSlice } from '@reduxjs/toolkit';
import localStorageService from 'services/localStorage.service';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accountId: localStorageService.getAccountId() || null,
    isLoggedIn: !!localStorageService.getJwtAccessToken(),
    error: null,
  },
  reducers: {
    requested: (state) => {
      state.error = null;
    },
    succeed: (state, action) => {
      state.accountId = action.payload;
      state.isLoggedIn = true;
    },
    failed: (state, action) => {
      state.error = action.payload;
    },
    loggedOut: (state) => {
      state.accountId = null;
      state.isLoggedIn = false;
      state.error = null;
    },
  },
});

export default authSlice;
