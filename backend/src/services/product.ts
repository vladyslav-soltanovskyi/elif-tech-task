import type { PrismaClient, Product } from '@prisma/client';
import { CreateProductDto } from '@types-app/products';

class ProductService {
	private _dbClient: PrismaClient;

	constructor(dbClient: PrismaClient) {
		this._dbClient = dbClient;
	}

	public getAll(shopId?: string) {
		return Promise.all([
			this._dbClient.product.findMany({
				where: { shopId: shopId },
				select: {
					id: true,
					title: true,
					description: true,
					poster: true,
					price: true,
					shopId: true,
					createdAt: true,
					shop: {
						select: {
							name: true,
							lat: true,
							lng: true,
						},
					},
				},
			}),
			this._dbClient.product.count({ where: { shopId } }),
		]);
	}
}

export { ProductService };
