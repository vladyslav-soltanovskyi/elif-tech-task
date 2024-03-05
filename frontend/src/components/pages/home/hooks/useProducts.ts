import { ProductsService } from '@services/products/products'
import { AllProductsDto } from '@types-app/product'
import { useState, useEffect } from 'react'

export const useProducts = (shopId?: string) => {

	const [products, setProducts] = useState<AllProductsDto>()
	const [isLoading, setIsLoading] = useState<boolean>()
	
	const fetchData = async () => {
		try {
			setIsLoading(false);
			const data = await ProductsService.getProducts(shopId);
			setProducts(data.data);
		}
		catch (err) {
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchData();
	}, [shopId]);

	return {
		isProductsLoading: isLoading,
		products: products?.products,
		countProducts: products?.count
	}
}
