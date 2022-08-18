import { CartProductItem } from "../../../types";

interface ADD_TO_CART {
  type: "ADD_TO_CART";
  payload: CartProductItem;
}

interface REMOVE_FROM_CART {
  type: "REMOVE_FROM_CART";
  payload: CartProductItem;
}

interface GET_CART_ITEMS {
  type: "GET_CART_ITEMS";
  //payload: CartProductItem[];
}

interface UPDATE_CART_ITEM {
  type: "UPDATE_CART_ITEM";
  payload: CartProductItem;
}

export type Action =
  | ADD_TO_CART
  | REMOVE_FROM_CART
  | GET_CART_ITEMS
  | UPDATE_CART_ITEM;
