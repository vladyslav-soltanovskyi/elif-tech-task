import { Controllers } from '@controllers/index';
import { apiPath, wrap } from '@helpers/index';
import { ApiRoutes, OrdersApiRoutes } from '@enums/index';
import { Router } from 'express';

export const initOrdersRoutes = ({ orderController }: Controllers, path: ApiRoutes): Router => {
	const router = Router();

	/**
	 * @openapi
	 * /orders/phone-and-email:
	 *   get:
	 *     tags: [Orders]
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - in: query
	 *         name: phone
	 *         type: string
	 *         required: true
	 *       - in: query
	 *         name: email
	 *         type: string
	 *         required: true
	 *     responses:
	 *       200:
	 *         description: Ok
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: array
	 *               items:
	 *                 $ref: "#/definitions/OrderResponse"
	 *       4**:
	 *         description: Something went wrong
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: "#/definitions/Response400"
	 */

	router.get(
		apiPath(path, OrdersApiRoutes.PHONE_AND_EMAIL),
		wrap(orderController.getByPhoneAndEmail),
	);

	/**
	 * @openapi
	 * /orders:
	 *   post:
	 *     tags: [Orders]
	 *     produces:
	 *       - application/json
	 *     requestBody:
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: "#/definitions/CreateOrderBody"
	 *     responses:
	 *       200:
	 *         description: Ok
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               properties:
	 *                 count:
	 *                   type: integer
	 *       4**:
	 *         description: Something went wrong
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: "#/definitions/Response400"
	 */

	router.post(apiPath(path, OrdersApiRoutes.CREATE), wrap(orderController.create));

	return router;
};
