import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'cart',
  initialState: [] as any[],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    clearCart: state => {
      state.length = 0;
    }
  }
});
