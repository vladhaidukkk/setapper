import { createSlice } from '@reduxjs/toolkit';
import localStorageService from 'services/localStorage.service';

const setupsSlice = createSlice({
  name: 'setups',
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
    created: (state, action) => {
      if (!state.entities) state.entities = [];
      state.entities.push(action.payload);
    },
  },
});

export default setupsSlice;
