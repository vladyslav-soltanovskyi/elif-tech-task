import type { NextFunction, Request, Response } from 'express';

export const wrap =
	<P extends ParamsDictionary, ResBody = unknown, ReqBody = unknown, ReqQuery = Query>(
		handler: (req?: Request<P, ResBody, ReqBody, ReqQuery>) => Promise<ResBody>,
	) =>
	(
		req: Request<P, ResBody, ReqBody, ReqQuery>,
		res: Response,
		next: NextFunction,
		// eslint-disable-next-line
  ): Promise<void | Response<any, Record<string, any>>> =>
		handler(req)
			.then((result) => {
				if (!result) {
					return res.status(200).json({
						success: true,
					});
				}

				return res.status(200).json(result);
			})
			.catch(next);
