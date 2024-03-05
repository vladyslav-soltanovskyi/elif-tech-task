import { Controllers } from '@controllers/index';
import { apiPath, wrap } from '@helpers/index';
import { ApiRoutes, ProductsApiRoutes } from '@enums/index';
import { Router } from 'express';

export const initProductsRoutes = ({ productController }: Controllers, path: ApiRoutes): Router => {
	const router = Router();

	/**
	 * @openapi
	 * /products:
	 *   get:
	 *     tags: [Products]
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - in: query
	 *         name: shopId
	 *         required: false
	 *         type: string
	 *     responses:
	 *       200:
	 *         description: Ok
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               properties:
	 *                 products:
	 *                   type: array
	 *                   items:
	 *                     "$ref": "#/definitions/ProductResponse"
	 *                 count:
	 *                   type: integer
	 *       4**:
	 *         description: Something went wrong
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: "#/definitions/Response400"
	 */

	router.get(apiPath(path, ProductsApiRoutes.PRODUCTS), wrap(productController.getAll));

	return router;
};
