export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: Rating;
}

export interface CartProductItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: Rating;
  quantity: number;
}

export type Category =
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing";

/* export enum Category {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
} */

export interface Rating {
  rate: number;
  count: number;
}
