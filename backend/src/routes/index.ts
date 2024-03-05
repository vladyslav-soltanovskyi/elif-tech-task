import type { Router } from 'express';
import { ApiRoutes } from '@enums/index';
import { Controllers } from '@controllers/index';
import { initCouponsRoutes } from './coupon';
import { initOrdersRoutes } from './order';
import { initProductsRoutes } from './product';
import { initShopsRoutes } from './shop';

export const initRoutes = (controllers: Controllers): Router[] => [
	initCouponsRoutes(controllers, ApiRoutes.COUPONS),
	initOrdersRoutes(controllers, ApiRoutes.ORDERS),
	initProductsRoutes(controllers, ApiRoutes.PRODUCTS),
	initShopsRoutes(controllers, ApiRoutes.SHOPS),
];
