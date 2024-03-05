export interface ProductDto {
  id: string,
  title: string,
  description: string,
  poster: string,
  price: number,
  shopId: string,
  createdAt: string,
  shop: {
    name: string;
    lat: number;
    lng: number;
  }
}

export interface AllProductsDto {
	products: ProductDto[];
	count: number;
}

export type FavoriteProducts = string[];