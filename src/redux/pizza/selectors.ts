import { RootState } from "../store";

export const selectPizzaData = (state: RootState) => state.pizza;
export const selectPizzas = (state: RootState) => selectPizzaData(state).items;
export const selectPizzaStatus = (state: RootState) => selectPizzaData(state).status;