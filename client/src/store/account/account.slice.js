import { createSlice } from '@reduxjs/toolkit';
import { localStorageService } from '../../services';

const crudRequested = (state) => {
  state.isLoading = true;
};

const crudReceived = (state, action) => {
  state.data = action.payload;
  state.isLoading = false;
};

const crudFailed = (state) => {
  state.isLoading = false;
};

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    data: null,
    isLoading: !!localStorageService.getJwtAccessToken(),
  },
  reducers: {
    requested: crudRequested,
    received: crudReceived,
    failed: crudFailed,
    creationRequested: crudRequested,
    created: crudReceived,
    creationFailed: crudFailed,
    dataRemoved: (state) => {
      state.data = null;
    },
  },
});

export default accountSlice;
