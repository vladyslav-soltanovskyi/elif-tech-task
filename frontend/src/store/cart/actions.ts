import { createAction } from '@reduxjs/toolkit'
import { ProductDto } from '@types-app/product';

export const addProduct = createAction<ProductDto>('cart/add-product');

export const removeProduct = createAction<string>('cart/remove-product');

export const decreaseProduct = createAction<string>('cart/decrease-product');

export const changeQtyProduct = createAction<{ productId: string; qty: number }>('cart/change-qty');

export const clearInCart = createAction('cart/clear-cart');