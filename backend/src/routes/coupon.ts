import { Controllers } from '@controllers/index';
import { apiPath, wrap } from '@helpers/index';
import { ApiRoutes, CouponsApiRoutes } from '@enums/index';
import { Router } from 'express';

export const initCouponsRoutes = ({ couponController }: Controllers, path: ApiRoutes): Router => {
	const router = Router();

	/**
	 * @openapi
	 * /coupons:
	 *   get:
	 *     tags: [Coupons]
	 *     produces:
	 *       - application/json
	 *     responses:
	 *       200:
	 *         description: Ok
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               properties:
	 *                  items:
	 *                      type: array
	 *                      items:
	 *                         $ref: "#/definitions/CouponResponse"
	 *       4**:
	 *         description: Something went wrong
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: "#/definitions/Response400"
	 */

	router.get(apiPath(path, CouponsApiRoutes.COUPONS), wrap(couponController.getAll));

	/**
	 * @openapi
	 * /coupons/code/:code:
	 *   get:
	 *     tags: [Coupons]
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - in: path
	 *         name: code
	 *         required: true
	 *         type: string
	 *     responses:
	 *       200:
	 *         description: Ok
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               $ref: "#/definitions/CouponResponse"
	 *       4**:
	 *         description: Something went wrong
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: "#/definitions/Response400"
	 */

	router.get(apiPath(path, CouponsApiRoutes.CODE), wrap(couponController.getByCode));

	return router;
};
