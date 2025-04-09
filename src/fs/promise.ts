import type { Buffer } from 'node:buffer';
import type { Abortable } from 'node:events';
import {
    close as fsClose,
    fchmod as fsFchmod,
    fchown as fsFchown,
    fdatasync as fsFdatasync,
    fstat as fsFstat,
    fsync as fsFsync,
    ftruncate as fsFtruncate,
    futimes as fsFutimes,
    read as fsRead,
    readv as fsReadv,
    write as fsWrite,
    writev as fsWritev,
} from 'node:fs';
import type fs from 'node:fs';
import {
    access as fspAccess,
    appendFile as fspAppendFile,
    chmod as fspChmod,
    chown as fspChown,
    copyFile as fspCopyFile,
    cp as fspCp,
    lchmod as fspLchmod,
    lchown as fspLchown,
    link as fspLink,
    lstat as fspLstat,
    lutimes as fspLutimes,
    mkdir as fspMkdir,
    mkdtemp as fspMkdtemp,
    open as fspOpen,
    opendir as fspOpendir,
    readdir as fspReaddir,
    readFile as fspReadFile,
    readlink as fspReadlink,
    realpath as fspRealpath,
    rename as fspRename,
    rm as fspRm,
    rmdir as fspRmdir,
    stat as fspStat,
    statfs as fspStatfs,
    symlink as fspSymlink,
    truncate as fspTruncate,
    unlink as fspUnlink,
    utimes as fspUtimes,
    writeFile as fspWriteFile,
} from 'node:fs/promises';
import type fsp from 'node:fs/promises';

import { noop } from '../_internals';
import {
    pTB,
    pTD,
    toWrapFunctionIsUndefinedError,
} from '../wrappers';

/**
 * @see {@link fsp.access}
 */
export const access = pTB(fspAccess);

/**
 * @see {@link fsp.copyFile}
 */
export const copyFile = pTB(fspCopyFile);

/**
 * @see {@link fsp.open}
 */
export const open = pTD(fspOpen);

/**
 * @see {@link fsp.rename}
 */
export const rename = pTB(fspRename);

/**
 * @see {@link fsp.truncate}
 */
export const truncate = pTB(fspTruncate);

/**
 * @see {@link fsp.rmdir}
 */
export const rmdir = pTB(fspRmdir);

/**
 * @see {@link fsp.rm}
 */
export const rm = pTB(fspRm);

/**
 * @see {@link fsp.symlink}
 */
export const symlink = pTB(fspSymlink);

/**
 * @see {@link fsp.link}
 */
export const link = pTB(fspLink);

/**
 * @see {@link fsp.unlink}
 */
export const unlink = pTB(fspUnlink);

/**
 * @see {@link fsp.chmod}
 */
export const chmod = pTB(fspChmod);

/**
 * @see {@link fsp.lchmod}
 */
export const lchmod = pTB(fspLchmod);

/**
 * @see {@link fsp.lchown}
 */
export const lchown = pTB(fspLchown);

/**
 * @see {@link fsp.lutimes}
 */
export const lutimes = pTB(fspLutimes);

/**
 * @see {@link fsp.chown}
 */
export const chown = pTB(fspChown);

/**
 * @see {@link fsp.utimes}
 */
export const utimes = pTB(fspUtimes);

/**
 * @see {@link fsp.writeFile}
 */
export const writeFile = pTB(fspWriteFile);

/**
 * @see {@link fsp.appendFile}
 */
export const appendFile = pTB(fspAppendFile);

/**
 * @see {@link fsp.opendir}
 */
export const opendir = pTD(fspOpendir);

/**
 * @see {@link fsp.cp}
 */
export const cp = pTB(fspCp);

/**
 * @see {@link fs.ftruncate.__promisify__}
 */
export const ftruncate = pTB(fsFtruncate?.__promisify__);

/**
 * @see {@link fs.fchown.__promisify__}
 */
export const fchown = pTB(fsFchown?.__promisify__);

/**
 * @see {@link fs.fchmod.__promisify__}
 */
export const fchmod = pTB(fsFchmod?.__promisify__);

/**
 * @see {@link fs.close.__promisify__}
 */
export const close = pTB(fsClose?.__promisify__);

/**
 * @see {@link fs.futimes.__promisify__}
 */
export const futimes = pTB(fsFutimes?.__promisify__);

/**
 * @see {@link fs.fsync.__promisify__}
 */
export const fsync = pTB(fsFsync?.__promisify__);

/**
 * @see {@link fs.fdatasync.__promisify__}
 */
export const fdatasync = pTB(fsFdatasync?.__promisify__);

/**
 * @see {@link fs.writev.__promisify__}
 */
export const writev = pTD(fsWritev?.__promisify__);

/**
 * @see {@link fs.readv.__promisify__}
 */
export const readv = pTD(fsReadv?.__promisify__);

// Overload functions

/**
 * @see {@link fsp.mkdir}
 */
export async function mkdir(
    path: fs.PathLike,
    options: fs.MakeDirectoryOptions & { recursive: true }
): Promise<string | undefined>;
export async function mkdir(
    path: fs.PathLike,
    options?: (fs.MakeDirectoryOptions & { recursive?: false }) | fs.Mode | null
): Promise<boolean>;
export async function mkdir(
    path: fs.PathLike,
    options?: fs.MakeDirectoryOptions | fs.Mode | null
): Promise<string | undefined>;
export async function mkdir(path: fs.PathLike, options?: any) {
    if (!fspMkdir) throw toWrapFunctionIsUndefinedError;
    try {
        const result = await fspMkdir(path, options);
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
export function readdir(
    path: fs.PathLike,
    options?: BufferEncoding | (fs.ObjectEncodingOptions & { recursive?: boolean; withFileTypes?: false }) | null
): Promise<string[] | undefined>;
// @ts-expect-error Ignore this error.
export function readdir(
    path: fs.PathLike,
    options: 'buffer' | { encoding: 'buffer'; recursive?: boolean; withFileTypes?: false }
): Promise<Buffer[] | undefined>;
export function readdir(
    path: fs.PathLike,
    options?: BufferEncoding | (fs.ObjectEncodingOptions & { recursive?: boolean; withFileTypes?: false }

    ) | null): Promise<Buffer[] | string[] | undefined>;
export function readdir(
    path: fs.PathLike,
    options: fs.ObjectEncodingOptions & { recursive?: boolean; withFileTypes: true }
): Promise<fs.Dirent[] | undefined>;
export function readdir(path: fs.PathLike, options?: any) {
    if (!fspReaddir) throw toWrapFunctionIsUndefinedError;
    return fspReaddir(path, options).catch(noop);
}

/**
 * @see {@link fsp.readlink}
 */
export function readlink(
    path: fs.PathLike,
    options?: BufferEncoding | fs.ObjectEncodingOptions | null
): Promise<string | undefined>;
// @ts-expect-error Ignore this error.
export function readlink(
    path: fs.PathLike,
    options: fs.BufferEncodingOption
): Promise<Buffer | undefined>;
export function readlink(
    path: fs.PathLike,
    options?: fs.ObjectEncodingOptions | null | string
): Promise<Buffer | string | undefined>;
export function readlink(path: fs.PathLike, options?: any) {
    if (!fspReadlink) throw toWrapFunctionIsUndefinedError;
    return fspReadlink(path, options).catch(noop);
}

/**
 * @see {@link fsp.lstat}
 */
export function lstat(path: fs.PathLike, opts?: fs.StatOptions & { bigint?: false }): Promise<fs.Stats | undefined>;
// @ts-expect-error Ignore this error.
export function lstat(path: fs.PathLike, opts: fs.StatOptions & { bigint: true }): Promise<fs.BigIntStats | undefined>;
export function lstat(path: fs.PathLike, opts?: fs.StatOptions): Promise<fs.BigIntStats | fs.Stats | undefined>;
export function lstat(path: fs.PathLike, opts?: any) {
    if (!fspLstat) throw toWrapFunctionIsUndefinedError;
    return fspLstat(path, opts).catch(noop);
}

/**
 * @see {@link fsp.stat}
 */
export function stat(path: fs.PathLike, opts?: fs.StatOptions & { bigint?: false }): Promise<fs.Stats | undefined>;
// @ts-expect-error Ignore this error.
export function stat(path: fs.PathLike, opts: fs.StatOptions & { bigint: true }): Promise<fs.BigIntStats | undefined>;
export function stat(path: fs.PathLike, opts?: fs.StatOptions): Promise<fs.BigIntStats | fs.Stats | undefined>;
export function stat(path: fs.PathLike, opts?: any) {
    if (!fspStat) throw toWrapFunctionIsUndefinedError;
    return fspStat(path, opts).catch(noop);
}

/**
 * @see {@link fsp.statfs}
 */
export function statfs(
    path: fs.PathLike,
    opts?: fs.StatFsOptions & { bigint?: false }
): Promise<fs.StatsFs | undefined>;
// @ts-expect-error Ignore this error.
export function statfs(
    path: fs.PathLike,
    opts: fs.StatFsOptions & { bigint: true }
): Promise<fs.BigIntStatsFs | undefined>;
export function statfs(path: fs.PathLike, opts?: fs.StatFsOptions): Promise<fs.BigIntStatsFs | fs.StatsFs | undefined>;
export function statfs(path: fs.PathLike, opts?: any) {
    if (!fspStatfs) throw toWrapFunctionIsUndefinedError;
    return fspStatfs(path, opts).catch(noop);
}

/**
 * @see {@link fsp.realpath}
 */
export function realpath(
    path: fs.PathLike,
    options?: BufferEncoding | fs.ObjectEncodingOptions | null
): Promise<string | undefined>;
// @ts-expect-error Ignore this error.
export function realpath(
    path: fs.PathLike,
    options: fs.BufferEncodingOption
): Promise<Buffer | undefined>;
export function realpath(
    path: fs.PathLike,
    options?: BufferEncoding | fs.ObjectEncodingOptions | null
): Promise<Buffer | string | undefined>;
export function realpath(path: fs.PathLike, options?: any) {
    if (!fspRealpath) throw toWrapFunctionIsUndefinedError;
    return fspRealpath(path, options).catch(noop);
}

/**
 * @see {@link fsp.mkdtemp}
 */
export function mkdtemp(
    prefix: string,
    options?: BufferEncoding | fs.ObjectEncodingOptions | null
): Promise<string | undefined>;
// @ts-expect-error Ignore this error.
export function mkdtemp(
    prefix: string,
    options: fs.BufferEncodingOption
): Promise<Buffer | undefined>;
export function mkdtemp(
    prefix: string,
    options?: BufferEncoding | fs.ObjectEncodingOptions | null
): Promise<Buffer | string | undefined>;
export function mkdtemp(prefix: string, options?: any) {
    if (!fspMkdtemp) throw toWrapFunctionIsUndefinedError;
    return fspMkdtemp(prefix, options).catch(noop);
}

/**
 * @see {@link fsp.readFile}
 */
export function readFile(
    path: fs.PathLike | fsp.FileHandle,
    options?: (Abortable & { encoding?: null; flag?: fs.OpenMode }) | null
): Promise<Buffer | undefined>;
// @ts-expect-error Ignore this error.
export function readFile(
    path: fs.PathLike | fsp.FileHandle,
    options: (Abortable & { encoding: BufferEncoding; flag?: fs.OpenMode }) | BufferEncoding
): Promise<string | undefined>;
export function readFile(
    path: fs.PathLike | fsp.FileHandle,
    options?: (Abortable & fs.ObjectEncodingOptions & { flag?: fs.OpenMode }) | BufferEncoding | null
): Promise<Buffer | string | undefined>;
export function readFile(path: fs.PathLike | fsp.FileHandle, options?: any) {
    if (!fspReadFile) throw toWrapFunctionIsUndefinedError;
    return fspReadFile(path, options).catch(noop);
}

/**
 * @see {@link fs.fstat.__promisify__}
 */
export function fstat(fd: number, options?: fs.StatOptions & { bigint?: false }): Promise<fs.Stats | undefined>;
// @ts-expect-error Ignore this error.
export function fstat(fd: number, options: fs.StatOptions & { bigint: true }): Promise<fs.BigIntStats | undefined>;
export function fstat(fd: number, options?: fs.StatOptions): Promise<fs.BigIntStats | fs.Stats | undefined>;
export function fstat(fd: number, options?: any) {
    if (!fsFstat?.__promisify__) throw toWrapFunctionIsUndefinedError;
    return fsFstat.__promisify__(fd, options).catch(noop);
}

/**
 * @see {@link fs.write.__promisify__}
 */
export function write<TBuffer extends NodeJS.ArrayBufferView>(
    fd: number,
    buffer?: TBuffer,
    offset?: number,
    length?: number,
    position?: null | number
): Promise<undefined | { buffer: TBuffer; bytesWritten: number }>;
// @ts-expect-error Ignore this error.
export function write(
    fd: number,
    string: string,
    position?: null | number,
    encoding?: BufferEncoding | null
): Promise<undefined | { buffer: string; bytesWritten: number }>;
export function write(...args: any[]) {
    if (!fsWrite?.__promisify__) throw toWrapFunctionIsUndefinedError;
    // @ts-expect-error Ignore this error.
    return fsWrite.__promisify__(...args).catch(noop);
}

/**
 * @see {@link fs.read.__promisify__}
 */
export function read<TBuffer extends NodeJS.ArrayBufferView>(
    fd: number,
    buffer: TBuffer,
    offset: number,
    length: number,
    position: null | number
): Promise<undefined | { buffer: TBuffer; bytesRead: number }>;
export function read<TBuffer extends NodeJS.ArrayBufferView>(
    fd: number,
    options: fs.ReadAsyncOptions<TBuffer>
): Promise<undefined | { buffer: TBuffer; bytesRead: number }>;
export function read(fd: number): Promise<undefined | { buffer: NodeJS.ArrayBufferView; bytesRead: number }>;
export function read(...args: any[]) {
    if (!fsRead?.__promisify__) throw toWrapFunctionIsUndefinedError;
    // @ts-expect-error Ignore this error.
    return fsRead.__promisify__(...args).catch(noop);
}
