import type { PrismaClient } from '@prisma/client';
import { fakeShops, fakeCoupons, fakeProducts } from './data';

export const createData = async (prismaClient: PrismaClient): Promise<void> => {
	const shops = fakeShops();
	await prismaClient.shop.createMany({ data: shops });

	const existingShops = await prismaClient.shop.findMany();

	const products = fakeProducts(existingShops);
	await prismaClient.product.createMany({ data: products });

	const coupons = fakeCoupons();
	await prismaClient.coupon.createMany({ data: coupons });
};
