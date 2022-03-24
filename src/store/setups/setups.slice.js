import { createSlice } from '@reduxjs/toolkit';

const setupsSlice = createSlice({
  name: 'setups',
  initialState: {
    entities: null,
    isLoading: false,
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
