import { Controllers } from '@controllers/index';
import { apiPath, wrap } from '@helpers/index';
import { ApiRoutes, ShopsApiRoutes } from '@enums/index';
import { Router } from 'express';

export const initShopsRoutes = ({ shopController }: Controllers, path: ApiRoutes): Router => {
	const router = Router();

	/**
	 * @openapi
	 * /shops:
	 *   get:
	 *     tags: [Shops]
	 *     produces:
	 *       - application/json
	 *     responses:
	 *       200:
	 *         description: Ok
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: array
	 *               items:
	 *                 $ref: "#/definitions/Shop"
	 *       4**:
	 *         description: Something went wrong
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: "#/definitions/Response400"
	 */

	router.get(apiPath(path, ShopsApiRoutes.SHOPS), wrap(shopController.getAll));

	return router;
};
