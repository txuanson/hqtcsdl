import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducer/cartSlice";
import userSlice from "./reducer/userSlice";

const cartReducer = cartSlice.reducer;
const userReducer = userSlice.reducer;

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer
  }
});

export default store;
