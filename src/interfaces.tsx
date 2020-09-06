export interface IPrice {
  label: string;
  price: number;
}

export interface IProduct {
  type: string;
  label: string;
  description: string;
  prices: Array<IPrice>;
}

export interface ICategory {
  type: string;
  name: string;
  categories: Array<ICategory>;
  products: Array<IProduct>;
}
