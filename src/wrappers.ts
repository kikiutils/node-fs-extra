import { noop } from './_internals';

type AnyFunction<P extends any[], R> = (...args: P) => R;
type AnyPromiseFunction<P extends any[], R> = (...args: P) => Promise<R>;

export class ToWrapFunctionIsUndefinedError extends Error {
    constructor() {
        // eslint-disable-next-line style/max-len
        super(`The function passed to the wrapper is not realized, please check if the Node.js/deno/bun version supports this function.`);
        this.name = this.constructor.name;
        Error.captureStackTrace?.(this, this.constructor);
    }
}

export const toWrapFunctionIsUndefinedError = new ToWrapFunctionIsUndefinedError();

export function pTB<P extends any[], R>(toWrapFunction?: AnyPromiseFunction<P, R>) {
    if (!toWrapFunction) return throwToWrapFunctionIsUndefinedError;
    return (...args: P) => toWrapFunction(...args).then(() => true).catch(() => false);
}

export function pTD<P extends any[], R>(toWrapFunction?: AnyPromiseFunction<P, R>) {
    if (!toWrapFunction) return throwToWrapFunctionIsUndefinedError;
    return (...args: P) => toWrapFunction(...args).catch(noop);
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

function throwToWrapFunctionIsUndefinedError(): never {
    throw toWrapFunctionIsUndefinedError;
}
