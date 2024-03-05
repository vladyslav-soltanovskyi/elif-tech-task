import axios from '@services/api/axios'
import { AllProductsDto, FavoriteProducts } from '@types-app/product';

export const ProductsService = {
	async getProducts(shopId?: string) {
		return axios.get<AllProductsDto>(`/products`, { params: { shopId: shopId } });
	},
}

export const getFavoriteProducts = (): FavoriteProducts => {
  return JSON.parse(localStorage.getItem('favorite-products') || '[]');
}

export const setFavoriteProducts = (data: FavoriteProducts) => {
  localStorage.setItem('favorite-products', JSON.stringify(data)); 
}

export const toggleFavoriteStatusForProduct = (productId: string) => {
  const products = getFavoriteProducts();
	const index = products.indexOf(productId);
	
	if (index >= 0) {
		products.splice(index, 1);
	} else {
		products.push(productId);
	}
  setFavoriteProducts(products);
}