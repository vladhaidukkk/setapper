import { createSlice } from '@reduxjs/toolkit';

const errorsSlice = createSlice({
  name: 'errors',
  initialState: {
    entities: null,
  },
  reducers: {
    handled: (state, action) => {
      if (!state.entities) state.entities = {};
      state.entities[action.payload.type] = action.payload.error;
    },
    cleared: (state) => {
      state.entities = null;
    },
  },
});

export default errorsSlice;
