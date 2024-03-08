import { Cart } from "@types-app/cart";
import { ProductDto } from "@types-app/product";

export const getCart = (): Cart => {
  return JSON.parse(localStorage.getItem('cart') || '{}');
}

export const setCart = (data: Cart) => {
  localStorage.setItem('cart', JSON.stringify(data)); 
}

export const hasProductInCart = (productId: string) => {
  const cart = getCart();
  return cart?.products?.some(product => product.product.id === productId);
}

export const getProductIndex = (productId: string): number => {
  const cart = getCart();
  return cart?.products?.findIndex((product) => product.product.id === productId);
}

export const addProductInCart = (productData: ProductDto) => {
  const cart = getCart();

  if (hasProductInCart(productData.id)) {
    const index = getProductIndex(productData.id);
    const product = cart.products[index];
    cart.products[index].qty = product.qty + 1;
  } else {
    if (!cart?.products?.length) {
      cart.shopId = productData.shopId;
      cart.coordinates = {
        lng: productData.shop.lat,
        lat: productData.shop.lng
      }
      cart.products = [{ product: productData, qty: 1 }];
    } else {
      cart.products?.push({ product: productData, qty: 1 });
    }

  }

  setCart(cart);
}

export const decreaseProductInCart = (productId: string) => {
  const cart = getCart();

  if (!hasProductInCart(productId)) {
    return;
  }
  const index = getProductIndex(productId);
  const product = cart.products[index];
  
  if (product.qty > 1) {
    cart.products[index].qty = product.qty - 1;
  }

  setCart(cart);
}


export const changeQtyProductInCart = (productId: string, qty: number) => {
  const cart = getCart();

  if (!hasProductInCart(productId)) {
    return;
  }

  const index = getProductIndex(productId);
  const product = cart.products[index];
  product.qty = qty;

  setCart(cart);
}


export const removeProductFromCart = (productId: string) => {
  const cart = getCart();
  const newProducts = cart.products.filter(product => product.product.id !== productId);
  cart.products = newProducts;
  
  if(!newProducts.length) {
    delete cart.shopId;
    delete cart.coordinates;
  }

  setCart(cart);
}

export const getCountProducts = () => {
  const cart = getCart();
  return cart?.products?.reduce((total, product) => total + product.qty, 0) ?? 0;
}

export const clearCart = () => {
  localStorage.removeItem('cart'); 
}