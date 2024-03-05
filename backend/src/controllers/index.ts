import { Services } from '@services/index';
import { CouponController } from './coupon';
import { ProductController } from './product';
import { ShopController } from './shop';
import { OrderController } from './order';

export const initControllers = (services: Services) => {
	const productController = new ProductController(services.productService);
	const couponController = new CouponController(services.couponService);
	const shopController = new ShopController(services.shopService);
	const orderController = new OrderController(services.orderService);

	return {
		productController,
		couponController,
		shopController,
		orderController,
	};
};

export type Controllers = ReturnType<typeof initControllers>;

export type { CouponController, ProductController, ShopController, OrderController };
