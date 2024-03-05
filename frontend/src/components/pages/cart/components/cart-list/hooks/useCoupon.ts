import { CouponsService } from '@services/coupons/coupons';
import { Coupon } from '@types-app/coupon';
import { useState } from 'react'

export const useCoupon = (couponCode: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [coupon, setCoupon] = useState<Coupon>();
  
  const searchCode = () => {
    setIsLoading(true);
    CouponsService.getByCode(couponCode)
      .then((data) => setCoupon(data.data))
      .finally(() => setIsLoading(false));
  } 

	return {
    isLoading,
    coupon,
    searchCode
	}
}
