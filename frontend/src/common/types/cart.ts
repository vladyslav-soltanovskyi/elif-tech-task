import { ProductDto } from "./product";

export interface Cart {
  products: ProductCart[];
  shopId?: string;
  lat?: number;
  lng?: number;
} 

export interface ProductCart {
  product: ProductDto;
  qty: number;
}