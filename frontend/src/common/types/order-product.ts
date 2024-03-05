import { ProductDto } from "./product"

export interface OrderedProductDto {
  productId: string;
  qty: number;
}

export interface OrderedProduct {
  id: string,
  product: ProductDto;
  qty: number;
}