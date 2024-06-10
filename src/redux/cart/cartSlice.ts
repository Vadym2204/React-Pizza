import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem, cartSliceState } from "./types.ts";
import { calcTotalPrice } from "../../utils/calcTotalPrice.ts";
import { getCartFromLS } from "../../utils/getCartFromLS.ts";

const initialState: cartSliceState = getCartFromLS()

const findItem = (state: cartSliceState, itemId: number) =>
  state.items.find((obj) => obj.id === itemId);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action: PayloadAction<CartItem>) {
      const item = findItem(state, action.payload.id)
      if (item) {
        item.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItems(state, action: PayloadAction<number>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItems(state, action: PayloadAction<number>) {
      const item = findItem(state, action.payload)
      if (item) {
        item.count--;        
        state.totalPrice = calcTotalPrice(state.items)
      }
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItems, removeItems, clearItems, minusItems } =
  cartSlice.actions;
export type {CartItem}
export default cartSlice.reducer;
