import fs from 'node:fs';
import type {
	BigIntStats,
	BigIntStatsFs,
	BufferEncodingOption,
	Dirent,
	EncodingOption,
	MakeDirectoryOptions,
	Mode,
	ObjectEncodingOptions,
	PathLike,
	PathOrFileDescriptor,
	ReadPosition,
	ReadSyncOptions,
	StatsFs,
	StatFsOptions,
	StatOptions,
	Stats,
	StatSyncOptions
} from 'node:fs';

import { tB, tD } from '../wrappers';

export { existsSync } from 'fs';

/**
 * @see {@link fs.appendFileSync}
 */
export const appendFileSync = tB(fs.appendFileSync);

/**
 * @see {@link fs.closeSync}
 */
export const closeSync = tB(fs.closeSync);

/**
 * @see {@link fs.renameSync}
 */
export const renameSync = tB(fs.renameSync);

/**
 * @see {@link fs.truncateSync}
 */
export const truncateSync = tB(fs.truncateSync);

/**
 * @see {@link fs.ftruncateSync}
 */
export const ftruncateSync = tB(fs.ftruncateSync);

/**
 * @see {@link fs.chownSync}
 */
export const chownSync = tB(fs.chownSync);

/**
 * @see {@link fs.fchownSync}
 */
export const fchownSync = tB(fs.fchownSync);

/**
 * @see {@link fs.lchownSync}
 */
export const lchownSync = tB(fs.lchownSync);

/**
 * @see {@link fs.lutimesSync}
 */
export const lutimesSync = tB(fs.lutimesSync);

/**
 * @see {@link fs.chmodSync}
 */
export const chmodSync = tB(fs.chmodSync);

/**
 * @see {@link fs.fchmodSync}
 */
export const fchmodSync = tB(fs.fchmodSync);

/**
 * @see {@link fs.lchmodSync}
 */
export const lchmodSync = tB(fs.lchmodSync);

/**
 * @see {@link fs.linkSync}
 */
export const linkSync = tB(fs.linkSync);

/**
 * @see {@link fs.symlinkSync}
 */
export const symlinkSync = tB(fs.symlinkSync);

/**
 * @see {@link fs.unlinkSync}
 */
export const unlinkSync = tB(fs.unlinkSync);

/**
 * @see {@link fs.rmdirSync}
 */
export const rmdirSync = tB(fs.rmdirSync);

/**
 * @see {@link fs.rmSync}
 */
export const rmSync = tB(fs.rmSync);

/**
 * @see {@link fs.utimesSync}
 */
export const utimesSync = tB(fs.utimesSync);

/**
 * @see {@link fs.futimesSync}
 */
export const futimesSync = tB(fs.futimesSync);

/**
 * @see {@link fs.fsyncSync}
 */
export const fsyncSync = tB(fs.fsyncSync);

/**
 * @see {@link fs.accessSync}
 */
export const accessSync = tB(fs.accessSync);

/**
 * @see {@link fs.fdatasyncSync}
 */
export const fdatasyncSync = tB(fs.fdatasyncSync);

/**
 * @see {@link fs.copyFileSync}
 */
export const copyFileSync = tB(fs.copyFileSync);

/**
 * @see {@link fs.cpSync}
 */
export const cpSync = tB(fs.cpSync);

/**
 * @see {@link fs.openSync}
 */
export const openSync = tD(fs.openSync);

/**
 * @see {@link fs.writeFileSync}
 */
export const writeFileSync = tB(fs.writeFileSync);

/**
 * @see {@link fs.writevSync}
 */
export const writevSync = tD(fs.writevSync);

/**
 * @see {@link fs.readvSync}
 */
export const readvSync = tD(fs.readvSync);

/**
 * @see {@link fs.opendirSync}
 */
export const opendirSync = tD(fs.opendirSync);

/**
 * @see {@link fs.fstatSync}
 */
export function fstatSync(fd: number, options?: StatOptions & { bigint?: false }): Stats | undefined;
// @ts-ignore
export function fstatSync(fd: number, options: StatOptions & { bigint: true }): BigIntStats | undefined;
export function fstatSync(fd: number, options?: StatOptions): Stats | BigIntStats | undefined;
export function fstatSync(fd: number, options?: any) {
	try {
		return fs.fstatSync(fd, options);
	} catch (error) {}
}

/**
 * @see {@link fs.statfsSync}
 */
export function statfsSync(path: PathLike, options?: StatFsOptions & { bigint?: false }): StatsFs | undefined;
// @ts-ignore
export function statfsSync(path: PathLike, options: StatFsOptions & { bigint: true }): BigIntStatsFs | undefined;
export function statfsSync(path: PathLike, options?: StatFsOptions): StatsFs | BigIntStatsFs | undefined;
export function statfsSync(path: PathLike, options?: any) {
	try {
		return fs.statfsSync(path, options);
	} catch (error) {}
}

/**
 * @see {@link fs.readlinkSync}
 */
export function readlinkSync(path: PathLike, options?: EncodingOption): string | undefined;
// @ts-ignore
export function readlinkSync(path: PathLike, options: BufferEncodingOption): Buffer | undefined;
export function readlinkSync(path: PathLike, options?: EncodingOption): string | Buffer | undefined;
export function readlinkSync(path: PathLike, options?: any) {
	try {
		return fs.readlinkSync(path, options);
	} catch (error) {}
}

/**
 * @see {@link fs.realpathSync}
 */
export function realpathSync(path: PathLike, options?: EncodingOption): string | undefined;
// @ts-ignore
export function realpathSync(path: PathLike, options: BufferEncodingOption): Buffer | undefined;
export function realpathSync(path: PathLike, options?: EncodingOption): string | Buffer | undefined;
export function realpathSync(path: PathLike, options?: any) {
	try {
		return fs.realpathSync(path, options);
	} catch (error) {}
}

/**
 * @see {@link fs.mkdirSync}
 */
export function mkdirSync(path: PathLike, options: MakeDirectoryOptions & { recursive: true }): string | undefined;
export function mkdirSync(path: PathLike, options?: Mode | (MakeDirectoryOptions & { recursive?: false }) | null): boolean;
export function mkdirSync(path: PathLike, options?: Mode | MakeDirectoryOptions | null): string | undefined;
export function mkdirSync(path: PathLike, options?: any) {
	try {
		const result = fs.mkdirSync(path, options);
		if (options?.recursive === true) return result;
		return true;
	} catch (error) {}
	if (options?.recursive === true) return;
	return false;
}

/**
 * @see {@link fs.mkdtempSync}
 */
export function mkdtempSync(prefix: string, options?: EncodingOption): string | undefined;
// @ts-ignore
export function mkdtempSync(prefix: string, options: BufferEncodingOption): Buffer | undefined;
export function mkdtempSync(prefix: string, options?: EncodingOption): string | Buffer | undefined;
export function mkdtempSync(prefix: string, options?: any) {
	try {
		return fs.mkdtempSync(prefix, options);
	} catch (error) {}
}

/**
 * @see {@link fs.readdirSync}
 */
export function readdirSync(path: PathLike, options?: { encoding: BufferEncoding | null; withFileTypes?: false; recursive?: boolean } | BufferEncoding | null): string[] | undefined;
// @ts-ignore
export function readdirSync(path: PathLike, options: { encoding: 'buffer'; withFileTypes?: false; recursive?: boolean } | 'buffer'): Buffer[] | undefined;
export function readdirSync(path: PathLike, options?: (ObjectEncodingOptions & { withFileTypes?: false; recursive?: boolean }) | BufferEncoding | null): string[] | Buffer[] | undefined;
export function readdirSync(path: PathLike, options: ObjectEncodingOptions & { withFileTypes: true; recursive?: boolean }): Dirent[] | undefined;
export function readdirSync(path: PathLike, options?: any) {
	try {
		return fs.readdirSync(path, options);
	} catch (error) {}
}

/**
 * @see {@link fs.writeSync}
 */
export function writeSync(fd: number, buffer: NodeJS.ArrayBufferView, offset?: number | null, length?: number | null, position?: number | null): number | undefined;
export function writeSync(fd: number, string: string, position?: number | null, encoding?: BufferEncoding | null): number | undefined;
export function writeSync(...args: any[]) {
	try {
		// @ts-ignore
		return fs.writeSync(...args);
	} catch (error) {}
}

/**
 * @see {@link fs.readSync}
 */
export function readSync(fd: number, buffer: NodeJS.ArrayBufferView, offset: number, length: number, position: ReadPosition | null): number | undefined;
export function readSync(fd: number, buffer: NodeJS.ArrayBufferView, opts?: ReadSyncOptions): number | undefined;
export function readSync(...args: any[]) {
	try {
		// @ts-ignore
		return fs.readSync(...args);
	} catch (error) {}
}

/**
 * @see {@link fs.readFileSync}
 */
export function readFileSync(path: PathOrFileDescriptor, options?: { encoding?: null; flag?: string } | null): Buffer | undefined;
// @ts-ignore
export function readFileSync(path: PathOrFileDescriptor, options: { encoding: BufferEncoding; flag?: string } | BufferEncoding): string | undefined;
export function readFileSync(path: PathOrFileDescriptor, options?: (ObjectEncodingOptions & { flag?: string }) | BufferEncoding | null): string | Buffer | undefined;
export function readFileSync(path: PathOrFileDescriptor, options?: any) {
	try {
		return fs.readFileSync(path, options);
	} catch (error) {}
}

/**
 * @see {@link fs.statSync}
 */
export function statSync(path: PathLike, options?: StatSyncOptions & { bigint?: false }): Stats | undefined;
// @ts-ignore
export function statSync(path: PathLike, options: StatSyncOptions & { bigint: true }): BigIntStats | undefined;
export function statSync(path: PathLike, options?: StatSyncOptions): Stats | BigIntStats | undefined;
export function statSync(path: PathLike, options?: any) {
	try {
		return fs.statSync(path, options);
	} catch (error) {}
}

/**
 * @see {@link fs.lstatSync}
 */
export const lstatSync = statSync;
