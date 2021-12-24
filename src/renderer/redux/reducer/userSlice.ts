import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'user',
  initialState: {
    user: null,
    role: -1
  },
  reducers: {
    authenticate: (state, action) => {
      state.user = action.payload.user;
      state.role = action.payload.role;
    },
    logout: state => {
      state.user = null;
      state.role = -1;
    }
  }
});

export type UserState = {
  user: string | null,
  role: number
}
