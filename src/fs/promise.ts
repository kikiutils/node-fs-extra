import type { Buffer } from 'node:buffer';
import type { Abortable } from 'node:events';
import fs from 'node:fs';
import type { PathLike } from 'node:fs';
import fsp from 'node:fs/promises';

import { pTB, pTD, toWrapFunctionIsUndefinedError } from '../wrappers';

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
export async function mkdir(path: PathLike, options: { recursive: true } & fs.MakeDirectoryOptions): Promise<string | undefined>;
export async function mkdir(path: PathLike, options?: ({ recursive?: false } & fs.MakeDirectoryOptions) | fs.Mode | null): Promise<boolean>;
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
export async function readdir(path: PathLike, options?: ({ recursive?: boolean; withFileTypes?: false } & fs.ObjectEncodingOptions) | BufferEncoding | null): Promise<string[] | undefined>;
// @ts-expect-error Ignore this error.
export async function readdir(path: PathLike, options: 'buffer' | { encoding: 'buffer'; recursive?: boolean; withFileTypes?: false }): Promise<Buffer[] | undefined>;
export async function readdir(path: PathLike, options?: ({ recursive?: boolean; withFileTypes?: false } & fs.ObjectEncodingOptions) | BufferEncoding | null): Promise<Buffer[] | string[] | undefined>;
export async function readdir(path: PathLike, options: { recursive?: boolean; withFileTypes: true } & fs.ObjectEncodingOptions): Promise<fs.Dirent[] | undefined>;
export async function readdir(path: PathLike, options?: any) {
    if (!fsp.readdir) throw toWrapFunctionIsUndefinedError;
    try {
        return await fsp.readdir(path, options);
    } catch {}
}

/**
 * @see {@link fsp.readlink}
 */
export async function readlink(path: PathLike, options?: BufferEncoding | fs.ObjectEncodingOptions | null): Promise<string | undefined>;
// @ts-expect-error Ignore this error.
export async function readlink(path: PathLike, options: fs.BufferEncodingOption): Promise<Buffer | undefined>;
export async function readlink(path: PathLike, options?: fs.ObjectEncodingOptions | null | string): Promise<Buffer | string | undefined>;
export async function readlink(path: PathLike, options?: any) {
    if (!readlink) throw toWrapFunctionIsUndefinedError;
    try {
        return await fsp.readlink(path, options);
    } catch {}
}

/**
 * @see {@link fsp.lstat}
 */
export async function lstat(path: PathLike, opts?: { bigint?: false } & fs.StatOptions): Promise<fs.Stats | undefined>;
// @ts-expect-error Ignore this error.
export async function lstat(path: PathLike, opts: { bigint: true } & fs.StatOptions): Promise<fs.BigIntStats | undefined>;
export async function lstat(path: PathLike, opts?: fs.StatOptions): Promise<fs.BigIntStats | fs.Stats | undefined>;
export async function lstat(path: PathLike, opts?: any) {
    if (!fsp.lstat) throw toWrapFunctionIsUndefinedError;
    try {
        return await fsp.lstat(path, opts);
    } catch {}
}

/**
 * @see {@link fsp.stat}
 */
export async function stat(path: PathLike, opts?: { bigint?: false } & fs.StatOptions): Promise<fs.Stats | undefined>;
// @ts-expect-error Ignore this error.
export async function stat(path: PathLike, opts: { bigint: true } & fs.StatOptions): Promise<fs.BigIntStats | undefined>;
export async function stat(path: PathLike, opts?: fs.StatOptions): Promise<fs.BigIntStats | fs.Stats | undefined>;
export async function stat(path: PathLike, opts?: any) {
    if (!fsp.stat) throw toWrapFunctionIsUndefinedError;
    try {
        return await fsp.stat(path, opts);
    } catch {}
}

/**
 * @see {@link fsp.statfs}
 */
export async function statfs(path: PathLike, opts?: { bigint?: false } & fs.StatFsOptions): Promise<fs.StatsFs | undefined>;
// @ts-expect-error Ignore this error.
export async function statfs(path: PathLike, opts: { bigint: true } & fs.StatFsOptions): Promise<fs.BigIntStatsFs | undefined>;
export async function statfs(path: PathLike, opts?: fs.StatFsOptions): Promise<fs.BigIntStatsFs | fs.StatsFs | undefined>;
export async function statfs(path: PathLike, opts?: any) {
    if (!fsp.statfs) throw toWrapFunctionIsUndefinedError;
    try {
        return await fsp.statfs(path, opts);
    } catch {}
}

/**
 * @see {@link fsp.realpath}
 */
export async function realpath(path: PathLike, options?: BufferEncoding | fs.ObjectEncodingOptions | null): Promise<string | undefined>;
// @ts-expect-error Ignore this error.
export async function realpath(path: PathLike, options: fs.BufferEncodingOption): Promise<Buffer | undefined>;
export async function realpath(path: PathLike, options?: BufferEncoding | fs.ObjectEncodingOptions | null): Promise<Buffer | string | undefined>;
export async function realpath(path: PathLike, options?: any) {
    if (!fsp.realpath) throw toWrapFunctionIsUndefinedError;
    try {
        return await fsp.realpath(path, options);
    } catch {}
}

/**
 * @see {@link fsp.mkdtemp}
 */
export async function mkdtemp(prefix: string, options?: BufferEncoding | fs.ObjectEncodingOptions | null): Promise<string | undefined>;
// @ts-expect-error Ignore this error.
export async function mkdtemp(prefix: string, options: fs.BufferEncodingOption): Promise<Buffer | undefined>;
export async function mkdtemp(prefix: string, options?: BufferEncoding | fs.ObjectEncodingOptions | null): Promise<Buffer | string | undefined>;
export async function mkdtemp(prefix: string, options?: any) {
    if (!fsp.mkdtemp) throw toWrapFunctionIsUndefinedError;
    try {
        return await fsp.mkdtemp(prefix, options);
    } catch {}
}

/**
 * @see {@link fsp.readFile}
 */
export async function readFile(path: PathLike | fsp.FileHandle, options?: ({ encoding?: null; flag?: fs.OpenMode } & Abortable) | null): Promise<Buffer | undefined>;
// @ts-expect-error Ignore this error.
export async function readFile(path: PathLike | fsp.FileHandle, options: ({ encoding: BufferEncoding; flag?: fs.OpenMode } & Abortable) | BufferEncoding): Promise<string | undefined>;
export async function readFile(path: PathLike | fsp.FileHandle, options?: ({ flag?: fs.OpenMode } & Abortable & fs.ObjectEncodingOptions) | BufferEncoding | null): Promise<Buffer | string | undefined>;
export async function readFile(path: PathLike | fsp.FileHandle, options?: any) {
    if (!fsp.readFile) throw toWrapFunctionIsUndefinedError;
    try {
        return await fsp.readFile(path, options);
    } catch {}
}

/**
 * @see {@link fs.fstat.__promisify__}
 */
export async function fstat(fd: number, options?: { bigint?: false } & fs.StatOptions): Promise<fs.Stats | undefined>;
// @ts-expect-error Ignore this error.
export async function fstat(fd: number, options: { bigint: true } & fs.StatOptions): Promise<fs.BigIntStats | undefined>;
export async function fstat(fd: number, options?: fs.StatOptions): Promise<fs.BigIntStats | fs.Stats | undefined>;
export async function fstat(fd: number, options?: any) {
    if (!fs.fstat?.__promisify__) throw toWrapFunctionIsUndefinedError;
    try {
        return await fs.fstat.__promisify__(fd, options);
    } catch {}
}

/**
 * @see {@link fs.write.__promisify__}
 */
export async function write<TBuffer extends NodeJS.ArrayBufferView>(fd: number, buffer?: TBuffer, offset?: number, length?: number, position?: null | number): Promise<{ buffer: TBuffer; bytesWritten: number } | undefined>;
// @ts-expect-error Ignore this error.
export async function write(fd: number, string: string, position?: null | number, encoding?: BufferEncoding | null): Promise<{ buffer: string; bytesWritten: number } | undefined>;
export async function write(...args: any[]) {
    if (!fs.write?.__promisify__) throw toWrapFunctionIsUndefinedError;
    try {
        // @ts-expect-error Ignore this error.
        return await fs.write.__promisify__(...args);
    } catch {}
}

/**
 * @see {@link fs.read.__promisify__}
 */
export async function read<TBuffer extends NodeJS.ArrayBufferView>(fd: number, buffer: TBuffer, offset: number, length: number, position: null | number): Promise<{ buffer: TBuffer; bytesRead: number } | undefined>;
export async function read<TBuffer extends NodeJS.ArrayBufferView>(fd: number, options: fs.ReadAsyncOptions<TBuffer>): Promise<{ buffer: TBuffer; bytesRead: number } | undefined>;
export async function read(fd: number): Promise<{ buffer: NodeJS.ArrayBufferView; bytesRead: number } | undefined>;
export async function read(...args: any[]) {
    if (!fs.read?.__promisify__) throw toWrapFunctionIsUndefinedError;
    try {
        // @ts-expect-error Ignore this error.
        return await fs.read.__promisify__(...args);
    } catch {}
}
