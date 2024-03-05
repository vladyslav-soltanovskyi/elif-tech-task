import { CreateOrderedProduct } from '@types-app/ordered-product';

export interface CreateOrderDto {
	address: string;
	lat: number;
	lng: number;
	email: string;
	phone: string;
	name: string;
	spent: number;
	products: CreateOrderedProduct[];
	shopId: string;
}
