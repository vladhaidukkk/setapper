import { createSlice } from '@reduxjs/toolkit';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    entities: null,
    isLoading: false,
  },
  reducers: {
    requested: (state) => {
      state.entities = [];
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
      state.entities.push(action.payload);
    },
    removed: (state, action) => {
      state.entities = state.entities.filter((entity) => entity._id !== action.payload);
    },
    incLikes: (state, action) => {
      const entityIndex = state.entities.findIndex((entity) => entity._id === action.payload);
      state.entities[entityIndex].likesAmount += 1;
    },
    decLikes: (state, action) => {
      const entityIndex = state.entities.findIndex((entity) => entity._id === action.payload);
      state.entities[entityIndex].likesAmount -= 1;
    },
  },
});

export default commentsSlice;
