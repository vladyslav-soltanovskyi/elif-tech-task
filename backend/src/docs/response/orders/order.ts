/**
 * @openapi
 * definitions:
 *   OrderResponse:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *       address:
 *         type: string
 *       email:
 *         type: string
 *       phone:
 *         type: string
 *       name:
 *         type: string
 *       spent:
 *         type: number
 *       shopId:
 *         type: string
 *       status:
 *         "$ref": "#/definitions/OrderStatus"
 *       updatedAt:
 *         type: string
 *         format: date-time
 *       createdAt:
 *         type: string
 *         format: date-time
 *       shop:
 *         type: object
 *         properties:
 *           name:
 *             type: string
 *       products:
 *         type: array
 *         items:
 *           properties:
 *             id:
 *               type: string
 *             qty:
 *               type: integer
 *             product:
 *               "$ref": "#/definitions/ProductResponse"
 */
