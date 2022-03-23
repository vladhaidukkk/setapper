import { createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    data: null,
    isLoading: false,
  },
  reducers: {
    requested: (state) => {
      state.isLoading = true;
    },
    received: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    creationRequested: (state) => {
      state.isLoading = true;
    },
    created: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    dataRemoved: (state) => {
      state.data = null;
    },
  },
});

export default accountSlice;
