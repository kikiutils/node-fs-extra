import type { PathLike, StatOptions, StatSyncOptions } from 'node:fs';

import { stat, statSync } from './fs';

/**
 * Asynchronously retrieves the size of a file at the given path.
 *
 * This function returns a promise that resolves to the size of the file in bytes. Depending on the provided options,
 * the size can be returned as either a number or a BigInt.
 *
 * @param {PathLike} path - The path to the file.
 * @param {StatOptions & { bigint?: false }} [opts] - Options to pass to stat. If bigint is set to false or omitted, the size is returned as a number.
 * @param {StatOptions & { bigint: true }} [opts] - Options to pass to stat. If bigint is set to true, the size is returned as a BigInt.
 * @returns {Promise<number | bigint | undefined>} A promise that resolves to the size of the file in bytes, or undefined if the file does not exist or an error occurs.
 */
export async function getFileSize(path: PathLike, opts?: StatOptions & { bigint?: false }): Promise<number | undefined>;
// @ts-ignore
export async function getFileSize(path: PathLike, opts: StatOptions & { bigint: true }): Promise<bigint | undefined>;
export async function getFileSize(path: PathLike, opts?: StatOptions): Promise<number | bigint | undefined>;
export async function getFileSize(path: PathLike, opts: any) {
	return (await stat(path, opts))?.size;
}

/**
 * Synchronously retrieves the size of a file at the given path.
 *
 * This function returns the size of the file in bytes. Depending on the provided options,
 * the size can be returned as either a number or a BigInt.
 *
 * @param {PathLike} path - The path to the file.
 * @param {StatSyncOptions & { bigint?: false }} [options] - Options to pass to statSync. If bigint is set to false or omitted, the size is returned as a number.
 * @param {StatSyncOptions & { bigint: true }} [options] - Options to pass to statSync. If bigint is set to true, the size is returned as a BigInt.
 * @returns {number | bigint | undefined} The size of the file in bytes, or undefined if the file does not exist or an error occurs.
 */
export function getFileSizeSync(path: PathLike, options?: StatSyncOptions & { bigint?: false }): number | undefined;
// @ts-ignore
export function getFileSizeSync(path: PathLike, options: StatSyncOptions & { bigint: true }): bigint | undefined;
export function getFileSizeSync(path: PathLike, options?: StatSyncOptions): number | bigint | undefined;
export function getFileSizeSync(path: PathLike, options?: any) {
	return statSync(path, options)?.size;
}
