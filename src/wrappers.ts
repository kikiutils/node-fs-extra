type AnyFunction<P extends any[], R> = (...args: P) => R;
type AnyPromiseFunction<P extends any[], R> = (...args: P) => Promise<R>;

const throwToWrapFunctionIsUndefinedError = () => {
	throw new Error('The funciton passed to the wrapper is not realized, please check if the nodejs/deno/bun version supports this function.');
};

export const pTB = <P extends any[], R>(toWrapFunction?: AnyPromiseFunction<P, R>): ((...args: P) => Promise<boolean>) => {
	if (!toWrapFunction) return throwToWrapFunctionIsUndefinedError;
	return async (...args: P) => {
		try {
			await toWrapFunction(...args);
			return true;
		} catch (error) {}
		return false;
	};
};

export const pTD = <P extends any[], R>(toWrapFunction?: AnyPromiseFunction<P, R>): ((...args: P) => Promise<R | undefined>) => {
	if (!toWrapFunction) return throwToWrapFunctionIsUndefinedError;
	return async (...args: P) => {
		try {
			return toWrapFunction(...args);
		} catch (error) {}
	};
};

export const tB = <P extends any[], R>(toWrapFunction?: AnyFunction<P, R>): ((...args: P) => boolean) => {
	if (!toWrapFunction) return throwToWrapFunctionIsUndefinedError;
	return (...args: P) => {
		try {
			toWrapFunction(...args);
			return true;
		} catch (error) {}
		return false;
	};
};

export const tD = <P extends any[], R>(toWrapFunction?: AnyFunction<P, R>): ((...args: P) => R | undefined) => {
	if (!toWrapFunction) return throwToWrapFunctionIsUndefinedError;
	return (...args: P) => {
		try {
			return toWrapFunction(...args);
		} catch (error) {}
	};
};
