import productDB from "../DB/productDB";
import { combineReducers } from "redux";
import { _ADD_CART, _DELETE_CART, _DOWN, _UP } from "../DB/common";

//Reducer Product
const initialProductsList = [...productDB];
const products = (state = initialProductsList, action) => {
  switch (action.type) {
  }
  return state;
};

//Reducer Cart

const carts = (state = [], action) => {
  switch (action.type) {
    case _ADD_CART: {
      const newCarts = state.find(
        (cart) => cart.id === action.payload.product.id
      )
        ? state.map((cart) => {
            if (cart.id === action.payload.product.id) {
              cart.quantity++;
            }
            return cart;
          })
        : [...state, action.payload.product];
      return [...newCarts];
    }

    case _DOWN: {
      const newCarts = state.map((cart) => {
        if (cart.id === action.payload.id && cart.quantity > 0) {
          cart.quantity--;
        }
        return cart;
      });
      return [...newCarts];
    }

    case _UP: {
      const newCarts = state.map((cart) => {
        if (cart.id === action.payload.id) {
          cart.quantity++;
        }
        return cart;
      });
      return [...newCarts];
    }
    case _DELETE_CART: {
      const newCarts = state.filter((cart) => cart.id !== action.payload.id);
      return [...newCarts];
    }
  }

  return state;
};

export const reducer = combineReducers({
  products,
  carts,
});
