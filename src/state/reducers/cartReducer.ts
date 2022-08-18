import { CartProductItem } from "../../../types";
import { Action } from "../actions";
import { ActionType } from "../action-types";

interface initialStateInterface {
  cart: CartProductItem[];
}

const initialState: initialStateInterface = {
  cart: [],
};
/* const initialState = {
  cart: [],
}; */

const cartReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_CART_ITEMS:
      //check if cart items exist in localstorage
      /* if (localStorage.getItem("cart") !== null) {
        return {
          ...state,
          cart: JSON.parse(localStorage.getItem("cart") || "[]"),
        };
      } */
      return {
        ...state,
        cart: state.cart,
      };

    case ActionType.ADD_TO_CART:
      // save data to localstorage
      //localStorage.setItem("cart", [...state.cart, action.payload]);
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case ActionType.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default cartReducer;
