export interface CartItem {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    type: string;
    size: string;
    count: number;
  }
  
  export interface cartSliceState {
    totalPrice: number;
    items: CartItem[]
  }