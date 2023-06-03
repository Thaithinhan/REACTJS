import { createSlice } from "@reduxjs/toolkit";

const cartsSlice = createSlice({
  name: "carts",
  initialState: JSON.parse(localStorage.getItem("carts")) || [],

  reducers: {
    addCart: (state, action) => {
      const addCart = state.find((item) => item.id === action.payload.id);
      const newState = addCart
        ? state.map((item) => {
            if (item.id === addCart.id) {
              item.quantity += 1;
            }
            return item;
          })
        : state.push({
            ...action.payload,
            quantity: action.payload.quantity + 1,
          });
    },
    removeCart: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload);
      return newState;
    },

    increaseCart: (state, action) => {
      console.log("state =========>", state);
      const newState = state.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity += 1;
        }
        return item;
      });
      // return newState;
    },

    decreaseCart: (state, action) => {
      const newState = state.map((item) => {
        if (item.id === action.payload.id && item.quantity > 0) {
          item.quantity -= 1;
        }
        return item;
      });
      // return newState;
    },
  },
});

const { actions, reducer } = cartsSlice;

export const { addCart, removeCart, increaseCart, decreaseCart } = actions;

export default reducer;
