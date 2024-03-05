import { PrismaClient } from '@prisma/client';
import { OrderService } from './order';
import { ProductService } from './product';
import { CouponService } from './coupon';
import { ShopService } from './shop';

export const initServices = (prismaClient: PrismaClient) => {
	const orderService = new OrderService(prismaClient);
	const productService = new ProductService(prismaClient);
	const couponService = new CouponService(prismaClient);
	const shopService = new ShopService(prismaClient);

	return {
		orderService,
		productService,
		couponService,
		shopService,
	};
};

export type Services = ReturnType<typeof initServices>;

export type { OrderService, ProductService, CouponService, ShopService };
