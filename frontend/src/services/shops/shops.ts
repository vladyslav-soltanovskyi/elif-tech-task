import axios from '@services/api/axios'
import { Shop } from '@types-app/shop';

export const ShopsService = {
	async getShops() {
		return axios.get<Shop[]>('/shops');
	},
}
