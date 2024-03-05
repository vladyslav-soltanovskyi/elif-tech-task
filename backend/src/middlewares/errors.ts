import type { Request, Response, NextFunction } from 'express';
import { loggerService } from '@helpers/index';
import { HttpError } from '@errors/index';

export const errorsHandler = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction,
	// eslint-disable-next-line
): Response<any, Record<string, any>> => {
	if (!err) {
		next();
	}

	if (err instanceof HttpError) {
		const { method, url } = req;
		const errorResponse = {
			path: url,
			method: method,
			statusCode: err.status,
			message: err.message,
		};

		loggerService.error(errorResponse);

		return res.status(err.status).json({
			message: err.message,
		});
	}

	loggerService.error(err.message);

	return res.status(500).json({
		message: 'Internal error!',
	});
};
