import type { PrismaClient } from '@prisma/client';

export const clearData = async (prismaClient: PrismaClient): Promise<void> => {
	await prismaClient.ordered_Product.deleteMany({});
	await prismaClient.order.deleteMany({});
	await prismaClient.coupon.deleteMany({});
	await prismaClient.product.deleteMany({});
	await prismaClient.shop.deleteMany({});
};
