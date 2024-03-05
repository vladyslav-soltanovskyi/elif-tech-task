import { Coupon, PrismaClient } from '@prisma/client';

class CouponService {
	private _dbClient: PrismaClient;

	constructor(dbClient: PrismaClient) {
		this._dbClient = dbClient;
	}

	public getAll() {
		return this._dbClient.coupon.findMany({
			select: {
				id: true,
				amount: true,
				isPercent: true,
				code: true,
				type: true,
				shopId: true,
				dateStart: true,
				dateEnd: true,
				shop: {
					select: {
						name: true,
					},
				},
			},
		});
	}

	public getByCode(code: string) {
		return this._dbClient.coupon.findFirst({
			where: {
				code: code,
			},
			select: {
				id: true,
				amount: true,
				isPercent: true,
				code: true,
				type: true,
				shopId: true,
				dateStart: true,
				dateEnd: true,
				shop: {
					select: {
						name: true,
					},
				},
			},
		});
	}
}

export { CouponService };
