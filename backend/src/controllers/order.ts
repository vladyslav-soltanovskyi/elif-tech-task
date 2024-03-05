import { OrderService } from '@services/index';
import { CreateOrderDto } from '@types-app/orders';
import { TypedRequestBody, TypedRequestQuery } from '@types-app/index';

class OrderController {
	private _orderService: OrderService;

	constructor(orderService: OrderService) {
		this._orderService = orderService;
	}

	public getByPhoneAndEmail = async (req: TypedRequestQuery<{ phone: string; email: string }>) => {
		return await this._orderService.getByPhoneAndEmail(req.query.phone, req.query.email);
	};

	public create = async (req: TypedRequestBody<{ data: CreateOrderDto }>) => {
		return await this._orderService.create(req.body.data);
	};
}

export { OrderController };
