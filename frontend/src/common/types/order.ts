import { OrderStatus } from "@enums/order";
import { OrderedProduct, OrderedProductDto } from "./order-product";

export interface Order {
  id: string;
  address: string;
  email: string;
  phone: string;
  name: string;
  spent: number;
  shopId: string;
  shop: {
    name: string;
  };
  products: OrderedProduct[];
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateOrderDto {
  address: string;
	lat: number;
	lng: number;
  email: string;
  phone: string;
  name: string;
  spent: number;
  products: OrderedProductDto[];
  shopId: string;
}