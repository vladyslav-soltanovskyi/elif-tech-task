import axios from '@services/api/axios'
import { CreateOrderDto, Order } from '@types-app/order';

export const OrdersService = {
	async getOrdersByPhoneAndEmail(phone: string, email: string) {
		return axios.get<Order[]>('/orders/phone-and-email', { params: { phone, email } });
	},

	async createOrder(data: CreateOrderDto) {
		return axios.post<Order[]>('/orders', { data: data });
	},
}
