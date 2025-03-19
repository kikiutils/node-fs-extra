import type { Buffer } from 'node:buffer';
import type { Abortable } from 'node:events';
import fs from 'node:fs';
import type { PathLike } from 'node:fs';
import fsp from 'node:fs/promises';

import { noop } from '../_internals';
import {
    pTB,
    pTD,
    toWrapFunctionIsUndefinedError,
} from '../wrappers';

/**
 * @see {@link fsp.access}
 */
export const access = pTB(fsp.access);

/**
 * @see {@link fsp.copyFile}
 */
export const copyFile = pTB(fsp.copyFile);

/**
 * @see {@link fsp.open}
 */
export const open = pTD(fsp.open);

/**
 * @see {@link fsp.rename}
 */
export const rename = pTB(fsp.rename);

/**
 * @see {@link fsp.truncate}
 */
export const truncate = pTB(fsp.truncate);

/**
 * @see {@link fsp.rmdir}
 */
export const rmdir = pTB(fsp.rmdir);

/**
 * @see {@link fsp.rm}
 */
export const rm = pTB(fsp.rm);

/**
 * @see {@link fsp.symlink}
 */
export const symlink = pTB(fsp.symlink);

/**
 * @see {@link fsp.link}
 */
export const link = pTB(fsp.link);

/**
 * @see {@link fsp.unlink}
 */
export const unlink = pTB(fsp.unlink);

/**
 * @see {@link fsp.chmod}
 */
export const chmod = pTB(fsp.chmod);

/**
 * @see {@link fsp.lchmod}
 */
export const lchmod = pTB(fsp.lchmod);

/**
 * @see {@link fsp.lchown}
 */
export const lchown = pTB(fsp.lchown);

/**
 * @see {@link fsp.lutimes}
 */
export const lutimes = pTB(fsp.lutimes);

/**
 * @see {@link fsp.chown}
 */
export const chown = pTB(fsp.chown);

/**
 * @see {@link fsp.utimes}
 */
export const utimes = pTB(fsp.utimes);

/**
 * @see {@link fsp.writeFile}
 */
export const writeFile = pTB(fsp.writeFile);

/**
 * @see {@link fsp.appendFile}
 */
export const appendFile = pTB(fsp.appendFile);

/**
 * @see {@link fsp.opendir}
 */
export const opendir = pTD(fsp.opendir);

/**
 * @see {@link fsp.cp}
 */
export const cp = pTB(fsp.cp);

/**
 * @see {@link fs.ftruncate.__promisify__}
 */
export const ftruncate = pTB(fs.ftruncate?.__promisify__);

/**
 * @see {@link fs.fchown.__promisify__}
 */
export const fchown = pTB(fs.fchown?.__promisify__);

/**
 * @see {@link fs.fchmod.__promisify__}
 */
export const fchmod = pTB(fs.fchmod?.__promisify__);

/**
 * @see {@link fs.close.__promisify__}
 */
export const close = pTB(fs.close?.__promisify__);

/**
 * @see {@link fs.futimes.__promisify__}
 */
export const futimes = pTB(fs.futimes?.__promisify__);

/**
 * @see {@link fs.fsync.__promisify__}
 */
export const fsync = pTB(fs.fsync?.__promisify__);

/**
 * @see {@link fs.fdatasync.__promisify__}
 */
export const fdatasync = pTB(fs.fdatasync?.__promisify__);

/**
 * @see {@link fs.writev.__promisify__}
 */
export const writev = pTD(fs.writev?.__promisify__);

/**
 * @see {@link fs.readv.__promisify__}
 */
export const readv = pTD(fs.readv?.__promisify__);

// Overload functions

/**
 * @see {@link fsp.mkdir}
 */
export async function mkdir(path: PathLike, options: fs.MakeDirectoryOptions & { recursive: true }): Promise<string | undefined>;
export async function mkdir(path: PathLike, options?: (fs.MakeDirectoryOptions & { recursive?: false }) | fs.Mode | null): Promise<boolean>;
export async function mkdir(path: PathLike, options?: fs.MakeDirectoryOptions | fs.Mode | null): Promise<string | undefined>;
export async function mkdir(path: PathLike, options?: any) {
    if (!fsp.mkdir) throw toWrapFunctionIsUndefinedError;
    try {
        const result = await fsp.mkdir(path, options);
        if (options?.recursive === true) return result;
        return true;
    } catch {
        if (options?.recursive === true) return;
        return false;
    }
}

/**
 * @see {@link fsp.readdir}
 */
export function readdir(path: PathLike, options?: BufferEncoding | (fs.ObjectEncodingOptions & { recursive?: boolean; withFileTypes?: false }) | null): Promise<string[] | undefined>;
// @ts-expect-error Ignore this error.
export function readdir(path: PathLike, options: 'buffer' | { encoding: 'buffer'; recursive?: boolean; withFileTypes?: false }): Promise<Buffer[] | undefined>;
export function readdir(path: PathLike, options?: BufferEncoding | (fs.ObjectEncodingOptions & { recursive?: boolean; withFileTypes?: false }) | null): Promise<Buffer[] | string[] | undefined>;
export function readdir(path: PathLike, options: fs.ObjectEncodingOptions & { recursive?: boolean; withFileTypes: true }): Promise<fs.Dirent[] | undefined>;
export function readdir(path: PathLike, options?: any) {
    if (!fsp.readdir) throw toWrapFunctionIsUndefinedError;
    return fsp.readdir(path, options).catch(noop);
}

/**
 * @see {@link fsp.readlink}
 */
export function readlink(path: PathLike, options?: BufferEncoding | fs.ObjectEncodingOptions | null): Promise<string | undefined>;
// @ts-expect-error Ignore this error.
export function readlink(path: PathLike, options: fs.BufferEncodingOption): Promise<Buffer | undefined>;
export function readlink(path: PathLike, options?: fs.ObjectEncodingOptions | null | string): Promise<Buffer | string | undefined>;
export function readlink(path: PathLike, options?: any) {
    if (!readlink) throw toWrapFunctionIsUndefinedError;
    return fsp.readlink(path, options).catch(noop);
}

/**
 * @see {@link fsp.lstat}
 */
export function lstat(path: PathLike, opts?: fs.StatOptions & { bigint?: false }): Promise<fs.Stats | undefined>;
// @ts-expect-error Ignore this error.
export function lstat(path: PathLike, opts: fs.StatOptions & { bigint: true }): Promise<fs.BigIntStats | undefined>;
export function lstat(path: PathLike, opts?: fs.StatOptions): Promise<fs.BigIntStats | fs.Stats | undefined>;
export function lstat(path: PathLike, opts?: any) {
    if (!fsp.lstat) throw toWrapFunctionIsUndefinedError;
    return fsp.lstat(path, opts).catch(noop);
}

/**
 * @see {@link fsp.stat}
 */
export function stat(path: PathLike, opts?: fs.StatOptions & { bigint?: false }): Promise<fs.Stats | undefined>;
// @ts-expect-error Ignore this error.
export function stat(path: PathLike, opts: fs.StatOptions & { bigint: true }): Promise<fs.BigIntStats | undefined>;
export function stat(path: PathLike, opts?: fs.StatOptions): Promise<fs.BigIntStats | fs.Stats | undefined>;
export function stat(path: PathLike, opts?: any) {
    if (!fsp.stat) throw toWrapFunctionIsUndefinedError;
    return fsp.stat(path, opts).catch(noop);
}

/**
 * @see {@link fsp.statfs}
 */
export function statfs(path: PathLike, opts?: fs.StatFsOptions & { bigint?: false }): Promise<fs.StatsFs | undefined>;
// @ts-expect-error Ignore this error.
export function statfs(path: PathLike, opts: fs.StatFsOptions & { bigint: true }): Promise<fs.BigIntStatsFs | undefined>;
export function statfs(path: PathLike, opts?: fs.StatFsOptions): Promise<fs.BigIntStatsFs | fs.StatsFs | undefined>;
export function statfs(path: PathLike, opts?: any) {
    if (!fsp.statfs) throw toWrapFunctionIsUndefinedError;
    return fsp.statfs(path, opts).catch(noop);
}

/**
 * @see {@link fsp.realpath}
 */
export function realpath(path: PathLike, options?: BufferEncoding | fs.ObjectEncodingOptions | null): Promise<string | undefined>;
// @ts-expect-error Ignore this error.
export function realpath(path: PathLike, options: fs.BufferEncodingOption): Promise<Buffer | undefined>;
export function realpath(path: PathLike, options?: BufferEncoding | fs.ObjectEncodingOptions | null): Promise<Buffer | string | undefined>;
export function realpath(path: PathLike, options?: any) {
    if (!fsp.realpath) throw toWrapFunctionIsUndefinedError;
    return fsp.realpath(path, options).catch(noop);
}

/**
 * @see {@link fsp.mkdtemp}
 */
export function mkdtemp(prefix: string, options?: BufferEncoding | fs.ObjectEncodingOptions | null): Promise<string | undefined>;
// @ts-expect-error Ignore this error.
export function mkdtemp(prefix: string, options: fs.BufferEncodingOption): Promise<Buffer | undefined>;
export function mkdtemp(prefix: string, options?: BufferEncoding | fs.ObjectEncodingOptions | null): Promise<Buffer | string | undefined>;
export function mkdtemp(prefix: string, options?: any) {
    if (!fsp.mkdtemp) throw toWrapFunctionIsUndefinedError;
    return fsp.mkdtemp(prefix, options).catch(noop);
}

/**
 * @see {@link fsp.readFile}
 */
export function readFile(path: fsp.FileHandle | PathLike, options?: (Abortable & { encoding?: null; flag?: fs.OpenMode }) | null): Promise<Buffer | undefined>;
// @ts-expect-error Ignore this error.
export function readFile(path: fsp.FileHandle | PathLike, options: (Abortable & { encoding: BufferEncoding; flag?: fs.OpenMode }) | BufferEncoding): Promise<string | undefined>;
export function readFile(path: fsp.FileHandle | PathLike, options?: (Abortable & fs.ObjectEncodingOptions & { flag?: fs.OpenMode }) | BufferEncoding | null): Promise<Buffer | string | undefined>;
export function readFile(path: fsp.FileHandle | PathLike, options?: any) {
    if (!fsp.readFile) throw toWrapFunctionIsUndefinedError;
    return fsp.readFile(path, options).catch(noop);
}

/**
 * @see {@link fs.fstat.__promisify__}
 */
export function fstat(fd: number, options?: fs.StatOptions & { bigint?: false }): Promise<fs.Stats | undefined>;
// @ts-expect-error Ignore this error.
export function fstat(fd: number, options: fs.StatOptions & { bigint: true }): Promise<fs.BigIntStats | undefined>;
export function fstat(fd: number, options?: fs.StatOptions): Promise<fs.BigIntStats | fs.Stats | undefined>;
export function fstat(fd: number, options?: any) {
    if (!fs.fstat?.__promisify__) throw toWrapFunctionIsUndefinedError;
    return fs.fstat.__promisify__(fd, options).catch(noop);
}

/**
 * @see {@link fs.write.__promisify__}
 */
export function write<TBuffer extends NodeJS.ArrayBufferView>(fd: number, buffer?: TBuffer, offset?: number, length?: number, position?: null | number): Promise<undefined | { buffer: TBuffer; bytesWritten: number }>;
// @ts-expect-error Ignore this error.
export function write(fd: number, string: string, position?: null | number, encoding?: BufferEncoding | null): Promise<undefined | { buffer: string; bytesWritten: number }>;
export function write(...args: any[]) {
    if (!fs.write?.__promisify__) throw toWrapFunctionIsUndefinedError;
    // @ts-expect-error Ignore this error.
    return fs.write.__promisify__(...args).catch(noop);
}

/**
 * @see {@link fs.read.__promisify__}
 */
export function read<TBuffer extends NodeJS.ArrayBufferView>(fd: number, buffer: TBuffer, offset: number, length: number, position: null | number): Promise<undefined | { buffer: TBuffer; bytesRead: number }>;
export function read<TBuffer extends NodeJS.ArrayBufferView>(fd: number, options: fs.ReadAsyncOptions<TBuffer>): Promise<undefined | { buffer: TBuffer; bytesRead: number }>;
export function read(fd: number): Promise<undefined | { buffer: NodeJS.ArrayBufferView; bytesRead: number }>;
export function read(...args: any[]) {
    if (!fs.read?.__promisify__) throw toWrapFunctionIsUndefinedError;
    // @ts-expect-error Ignore this error.
    return fs.read.__promisify__(...args).catch(noop);
}
