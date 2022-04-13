import { createSlice } from '@reduxjs/toolkit';
import { localStorageService } from '../../services';

const accessesSlice = createSlice({
  name: 'accesses',
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
    removed: (state, action) => {
      // todo: id -> _id
      state.entities = state.entities.filter((entity) => entity.id !== action.payload);
    },
    updated: (state, action) => {
      // todo: id -> _id
      const entityIndex = state.entities.findIndex((entity) => entity.id === action.payload.id);
      state.entities[entityIndex] = action.payload.data;
    },
  },
});

export default accessesSlice;
