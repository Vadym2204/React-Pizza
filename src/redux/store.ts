import { configureStore } from "@reduxjs/toolkit";
import filters from "./filter/filterSlice.ts";
import cart from "./cart/cartSlice.ts"
import pizza from "./pizza/pizzaSlice.ts"
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    filters,
    cart,
    pizza
  },
});

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store