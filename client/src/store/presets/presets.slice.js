import { createSlice } from '@reduxjs/toolkit';

const presetsSlice = createSlice({
  name: 'presets',
  initialState: {
    entities: null,
    isLoading: true,
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

export default presetsSlice;
