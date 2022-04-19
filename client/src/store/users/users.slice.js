import { createSlice } from '@reduxjs/toolkit';
import { localStorageService } from '../../services';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    entities: null,
    isLoading: !!localStorageService.getJwtAccessToken(),
  },
  reducers: {
    requested: (state) => {
      state.isLoading = true;
    },
    received: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    failed: (state) => {
      state.isLoading = false;
    },
  },
});

export default usersSlice;
