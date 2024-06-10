export interface FetchPizzaParams {
  currentPage: number;
  category: string;
  sortBy: string;
  order: string;
  search: string;
}

export interface Pizza {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
}

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface pizzaSliceState {
  items: Pizza[];
  status: Status;
}
