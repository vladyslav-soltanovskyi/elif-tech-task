import type { ShopService } from '@services/index';

class ShopController {
	private _shopService: ShopService;

	constructor(shopService: ShopService) {
		this._shopService = shopService;
	}

	public getAll = async () => {
		return await this._shopService.getAll();
	};
}

export { ShopController };
