import { PrismaClient } from '@prisma/client';
import { CreateOrderDto } from '@types-app/orders';

class OrderService {
	private _dbClient: PrismaClient;

	constructor(dbClient: PrismaClient) {
		this._dbClient = dbClient;
	}

	public getByPhoneAndEmail(phone: string, email: string) {
		return this._dbClient.order.findMany({
			where: {
				phone,
				email,
			},
			select: {
				id: true,
				lat: true,
				lng: true,
				address: true,
				email: true,
				phone: true,
				name: true,
				spent: true,
				shopId: true,
				status: true,
				createdAt: true,
				updatedAt: true,
				shop: {
					select: {
						name: true,
					},
				},
				products: {
					select: {
						id: true,
						qty: true,
						product: true,
					},
				},
			},
		});
	}

	public async create(data: CreateOrderDto) {
		const order = await this._dbClient.order.create({
			data: {
				address: data.address,
				lat: data.lat,
				lng: data.lng,
				email: data.email,
				phone: data.phone,
				name: data.name,
				spent: data.spent,
				shopId: data.shopId,
			},
		});

		return this._dbClient.ordered_Product.createMany({
			data: data.products.map((p) => ({
				productId: p.productId,
				qty: p.qty,
				orderId: order.id,
			})),
		});
	}
}

export { OrderService };
