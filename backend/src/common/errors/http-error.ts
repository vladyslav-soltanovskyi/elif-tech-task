const DEFAULT_MESSAGE = 'Network Error';

class HttpError extends Error {
	status: number;

	constructor(message: string = DEFAULT_MESSAGE, status: number) {
		super(message);
		this.status = status;
	}
}

export { HttpError };
