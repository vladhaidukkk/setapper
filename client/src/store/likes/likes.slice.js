import { createSlice } from '@reduxjs/toolkit';
import { localStorageService } from '../../services';

const likesSlice = createSlice({
  name: 'likes',
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
  },
});

export default likesSlice;
