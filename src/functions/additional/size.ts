import fs from 'fs';

import { stat } from '../_fs/promises';
import { statSync } from '../_fs/sync';

export async function getFileSize(path: fs.PathLike, options: fs.StatOptions & { bigint: true }): Promise<bigint | undefined>;
export async function getFileSize(path: fs.PathLike, options: fs.StatOptions & { bigint: false }): Promise<number | undefined>;
export async function getFileSize(path: fs.PathLike, options?: fs.StatOptions): Promise<number | undefined>;
export async function getFileSize(path: fs.PathLike, options?: fs.StatOptions) {
	return (await stat(path, options))?.size;
}

// TODO: overloads
export function getFileSizeSync(path: fs.PathLike, options: fs.StatOptions & { bigint: true }): bigint | undefined;
export function getFileSizeSync(path: fs.PathLike, options: fs.StatOptions & { bigint: false }): number | undefined;
export function getFileSizeSync(path: fs.PathLike, options?: fs.StatOptions): number | undefined;
export function getFileSizeSync(path: fs.PathLike, options?: fs.StatOptions) {
	return statSync(path, options)?.size;
}
