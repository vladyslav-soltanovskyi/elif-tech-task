/**
 * @openapi
 * definitions:
 *   CouponResponse:
 *     properties:
 *       id:
 *         type: string
 *       code:
 *         type: string
 *       isPercent:
 *         type: boolean
 *       type:
 *         "$ref": "#/definitions/CouponTypes"
 *       shopId:
 *         type: string
 *       dateStart:
 *         type: string
 *         format: date-time
 *       dateEnd:
 *         type: string
 *         format: date-time
 *       shop:
 *         type: object
 *         properties:
 *           name:
 *             type: string
 */
