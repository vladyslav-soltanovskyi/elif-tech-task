import { CouponsService } from '@services/coupons/coupons';
import { Coupon } from '@types-app/coupon';
import { useState, useEffect } from 'react'

export const useCoupons = () => {
	const [coupons, setCoupons] = useState<Coupon[]>()
	const [isLoading, setIsLoading] = useState<boolean>()

	const fetchData = async () => {
		try {
			setIsLoading(false);
			const data = await CouponsService.getCoupons();
			setCoupons(data.data);
		}
		catch (err) {
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	return {
    isLoading,
    coupons: coupons
	}
}
