type AnyFunction = (...args: any[]) => any;

export const tB = <F extends AnyFunction, P extends Parameters<F>, RT extends ReturnType<F> extends Promise<any> ? Promise<boolean> : boolean>(toWrapFunction?: F): ((...args: P) => RT) => {
	if (!toWrapFunction) {
		return () => {
			throw new Error('The funciton passed to the wrapper is not realized, please check if the nodejs/deno/bun version supports this function.');
		};
	}

	return function (...args: P) {
		try {
			const result = toWrapFunction(...args);
			if (result instanceof Promise) return result.then(() => true).catch(() => false) as RT;
			return true as RT;
		} catch (error) {}
		return false as RT;
	};
};

export const tD = <F extends AnyFunction, P extends Parameters<F>, R extends ReturnType<F>, RT extends R extends Promise<any> ? Promise<Awaited<R> | T> : R | T, T = undefined>(toWrapFunction?: F, returnValueOnError?: T): ((...args: P) => RT) => {
	if (!toWrapFunction) {
		return () => {
			throw new Error('The funciton passed to the wrapper is not realized, please check if the nodejs/deno/bun version supports this function.');
		};
	}

	return function (...args: P) {
		try {
			const result = toWrapFunction(...args);
			if (result instanceof Promise) return result.catch(() => returnValueOnError);
			return result;
		} catch (error) {}
		return returnValueOnError;
	};
};
