import { HttpError } from '@errors/http-error';
import { CouponService } from '@services/index';
import { TypedRequestParams } from '@types-app/index';

class CouponController {
	private _couponService: CouponService;

	constructor(couponService: CouponService) {
		this._couponService = couponService;
	}

	public getAll = async () => {
		return await this._couponService.getAll();
	};

	public getByCode = async (req: TypedRequestParams<{ code: string }>) => {
		const coupon = await this._couponService.getByCode(req.params.code);

		if (!coupon) {
			throw new HttpError('Coupon not Found', 404);
		}

		return coupon;
	};
}

export { CouponController };
