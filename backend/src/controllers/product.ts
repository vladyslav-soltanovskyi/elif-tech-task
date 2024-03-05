import { ProductService } from '@services/product';
import { TypedRequestQuery } from '@types-app/index';

class ProductController {
	private _productService: ProductService;

	constructor(productService: ProductService) {
		this._productService = productService;
	}

	public getAll = async (req: TypedRequestQuery<{ shopId?: string }>) => {
		const [products, count] = await this._productService.getAll(req.query.shopId);
		return { products, count };
	};
}

export { ProductController };
