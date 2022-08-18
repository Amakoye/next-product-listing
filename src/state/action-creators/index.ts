import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";
import { CartProductItem } from "../../../types";

export const addItemToCart = (product: CartProductItem) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_TO_CART,
      payload: product,
    });
  };
};

export const removeItemFromCart = (product: CartProductItem) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVE_FROM_CART,
      payload: product,
    });
  };
};

export const getCartItems = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_CART_ITEMS,
    });
  };
};
