type AnyFunction<P extends any[], R> = (...args: P) => R;
type AnyPromiseFunction<P extends any[], R> = (...args: P) => Promise<R>;

export class ToWrapFunctionIsUndefinedError extends Error {
	constructor() {
		super(`The funciton passed to the wrapper is not realized, please check if the nodejs/deno/bun version supports this function.`);
		this.name = this.constructor.name;
		Error.captureStackTrace?.(this, this.constructor);
	}
}

export const toWrapFunctionIsUndefinedError = new ToWrapFunctionIsUndefinedError();

function throwToWrapFunctionIsUndefinedError() {
	throw toWrapFunctionIsUndefinedError;
}

export function pTB<P extends any[], R>(toWrapFunction?: AnyPromiseFunction<P, R>) {
	if (!toWrapFunction) return throwToWrapFunctionIsUndefinedError;
	return async (...args: P) => {
		try {
			await toWrapFunction(...args);
			return true;
		} catch {}
		return false;
	};
}

export function pTD<P extends any[], R>(toWrapFunction?: AnyPromiseFunction<P, R>) {
	if (!toWrapFunction) return throwToWrapFunctionIsUndefinedError;
	return async (...args: P) => {
		try {
			return await toWrapFunction(...args);
		} catch {}
	};
}

export function tB<P extends any[], R>(toWrapFunction?: AnyFunction<P, R>) {
	if (!toWrapFunction) return throwToWrapFunctionIsUndefinedError;
	return (...args: P) => {
		try {
			toWrapFunction(...args);
			return true;
		} catch {}
		return false;
	};
}

export function tD<P extends any[], R>(toWrapFunction?: AnyFunction<P, R>) {
	if (!toWrapFunction) return throwToWrapFunctionIsUndefinedError;
	return (...args: P) => {
		try {
			return toWrapFunction(...args);
		} catch {}
	};
}
