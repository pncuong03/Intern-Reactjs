import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "~/redux/cartSlice";
import { productReducer } from "~/redux/productSlice";

const store = configureStore({
  reducer: {
    cartReducer,  
    productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;