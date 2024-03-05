import { CouponTypes } from "@enums/coupon";

export interface Coupon {
  id: string;
  code: string;
  amount: number;
  isPercent: boolean;
  type: CouponTypes;
  shopId?: string;
  shop?: {
    name: string
  };
  dateStart: string;
  dateEnd: string;
}


