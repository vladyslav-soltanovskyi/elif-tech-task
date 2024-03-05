import { Coupon, CouponTypes } from '@prisma/client';
import { faker } from '@faker-js/faker';

export const fakeCoupons = () => {
	const coupons: Omit<Coupon, 'id'>[] = [];
	const nowDate = new Date();

	for (let i = 0; i < 5; i++) {
		const newCoupon: Omit<Coupon, 'id'> = {
			code: faker.string.alphanumeric(12),
			amount: +faker.commerce.price(5, 30),
			isPercent: true,
			type: CouponTypes.ALL,
			shopId: null,
			dateStart: nowDate,
			dateEnd: new Date(new Date(nowDate).setDate(nowDate.getDate() + 5)),
			createdAt: faker.date.past(),
			updatedAt: faker.date.recent(),
		};

		coupons.push(newCoupon);
	}

	return coupons;
};
