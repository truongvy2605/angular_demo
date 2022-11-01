export interface Sneaker {
  // thiếu id
  id: string;
  name: string;
  size: number;
  priceOrigin: number;
  priceSale: number;
  description: string;
  stock: number;
  quantity: number;
  URL: string;
}

export interface CartItem {
  item: Sneaker;
  quantity: number;
}
