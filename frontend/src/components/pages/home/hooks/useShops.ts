import { ShopsService } from '@services/shops/shops'
import { Shop } from '@types-app/shop'
import { useState, useEffect } from 'react'

export const useShops = () => {
	const [selectedShopId, setSelectedShopId] = useState<string>()
	const [shops, setShops] = useState<Shop[]>()
	const [isLoading, setIsLoading] = useState<boolean>()
	
	const fetchData = async () => {
		try {
			setIsLoading(false);
			const data = await ShopsService.getShops();
			setShops(data.data);
		}
		catch (err) {
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	}

  const handleChangeShopId = (shopId: string) => setSelectedShopId(shopId);

	useEffect(() => {
		fetchData();
	}, []);

	return {
    isShopsLoading: isLoading,
    shops: shops,
		selectedShopId,
		handleChangeShopId,
	}
}
