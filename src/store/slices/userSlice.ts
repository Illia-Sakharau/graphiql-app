import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogged: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.isLogged = action.payload.isLogged;
      console.log(action.payload.isLogged)
    },

  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
