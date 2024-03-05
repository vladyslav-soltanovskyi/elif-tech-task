import axios from '@services/api/axios'
import { Coupon } from '@types-app/coupon';

export const CouponsService = {
	async getCoupons() {
		return axios.get<Coupon[]>('/coupons');
	},

	async getByCode(code: string) {
		return axios.get<Coupon>(`/coupons/code/${code}`)
	}
}
