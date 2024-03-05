import { createSlice } from "@reduxjs/toolkit";
import { IShopsState } from "./types";
import {
  addProduct,
  changeQtyProduct,
  clearInCart,
  decreaseProduct,
  removeProduct,
} from "./actions";
import {
  addProductInCart,
  decreaseProductInCart,
  getCart,
  getCountProducts,
  removeProductFromCart,
  changeQtyProductInCart,
  clearCart,
} from "@services/cart/cart";

const initialState: IShopsState = {
  cart: getCart(),
  countProducts: getCountProducts(),
};

export const shopsSlice = createSlice({
  name: "events",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addProduct, (state, { payload }) => {
        addProductInCart(payload);
        state.cart = getCart();
        state.countProducts = getCountProducts();
      })
      .addCase(decreaseProduct, (state, { payload }) => {
        decreaseProductInCart(payload);
        state.cart = getCart();
        state.countProducts = getCountProducts();
      })
      .addCase(removeProduct, (state, { payload }) => {
        removeProductFromCart(payload);
        state.cart = getCart();
        state.countProducts = getCountProducts();
      })
      .addCase(changeQtyProduct, (state, { payload }) => {
        changeQtyProductInCart(payload.productId, payload.qty);
        state.cart = getCart();
        state.countProducts = getCountProducts();
      })
      .addCase(clearInCart, (state) => {
        clearCart();
        state.cart.products = [];
        state.cart.shopId = "";
        state.countProducts = 0;
      });
  },
  reducers: {},
});

export const { reducer } = shopsSlice;
