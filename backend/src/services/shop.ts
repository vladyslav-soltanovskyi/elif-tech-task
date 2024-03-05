import { PrismaClient } from '@prisma/client';

class ShopService {
	private _dbClient: PrismaClient;

	constructor(dbClient: PrismaClient) {
		this._dbClient = dbClient;
	}

	public getAll() {
		return this._dbClient.shop.findMany();
	}
}

export { ShopService };
