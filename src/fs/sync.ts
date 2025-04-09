import type { Buffer } from 'node:buffer';
import {
    accessSync as fsAccessSync,
    appendFileSync as fsAppendFileSync,
    chmodSync as fsChmodSync,
    chownSync as fsChownSync,
    closeSync as fsCloseSync,
    copyFileSync as fsCopyFileSync,
    cpSync as fsCpSync,
    fchmodSync as fsFchmodSync,
    fchownSync as fsFchownSync,
    fdatasyncSync as fsFdatasyncSync,
    fstatSync as fsFstatSync,
    fsyncSync as fsFsyncSync,
    ftruncateSync as fsFtruncateSync,
    futimesSync as fsFutimesSync,
    lchownSync as fsLchownSync,
    linkSync as fsLinkSync,
    lutimesSync as fsLutimesSync,
    mkdirSync as fsMkdirSync,
    mkdtempSync as fsMkdtempSync,
    opendirSync as fsOpendirSync,
    openSync as fsOpenSync,
    readdirSync as fsReaddirSync,
    readFileSync as fsReadFileSync,
    readlinkSync as fsReadlinkSync,
    readSync as fsReadSync,
    readvSync as fsReadvSync,
    realpathSync as fsRealpathSync,
    renameSync as fsRenameSync,
    rmdirSync as fsRmdirSync,
    rmSync as fsRmSync,
    statfsSync as fsStatfsSync,
    statSync as fsStatSync,
    symlinkSync as fsSymlinkSync,
    truncateSync as fsTruncateSync,
    unlinkSync as fsUnlinkSync,
    utimesSync as fsUtimesSync,
    writeFileSync as fsWriteFileSync,
    writeSync as fsWriteSync,
    writevSync as fsWritevSync,
} from 'node:fs';
import type fs from 'node:fs';

import {
    tB,
    tD,
    toWrapFunctionIsUndefinedError,
} from '../wrappers';

export { existsSync } from 'node:fs';

/**
 * @see {@link fs.appendFileSync}
 */
export const appendFileSync = tB(fsAppendFileSync);

/**
 * @see {@link fs.closeSync}
 */
export const closeSync = tB(fsCloseSync);

/**
 * @see {@link fs.renameSync}
 */
export const renameSync = tB(fsRenameSync);

/**
 * @see {@link fs.truncateSync}
 */
export const truncateSync = tB(fsTruncateSync);

/**
 * @see {@link fs.ftruncateSync}
 */
export const ftruncateSync = tB(fsFtruncateSync);

/**
 * @see {@link fs.chownSync}
 */
export const chownSync = tB(fsChownSync);

/**
 * @see {@link fs.fchownSync}
 */
export const fchownSync = tB(fsFchownSync);

/**
 * @see {@link fs.lchownSync}
 */
export const lchownSync = tB(fsLchownSync);

/**
 * @see {@link fs.lutimesSync}
 */
export const lutimesSync = tB(fsLutimesSync);

/**
 * @see {@link fs.chmodSync}
 */
export const chmodSync = tB(fsChmodSync);

/**
 * @see {@link fs.fchmodSync}
 */
export const fchmodSync = tB(fsFchmodSync);

/**
 * @see {@link fs.linkSync}
 */
export const linkSync = tB(fsLinkSync);

/**
 * @see {@link fs.symlinkSync}
 */
export const symlinkSync = tB(fsSymlinkSync);

/**
 * @see {@link fs.unlinkSync}
 */
export const unlinkSync = tB(fsUnlinkSync);

/**
 * @see {@link fs.rmdirSync}
 */
export const rmdirSync = tB(fsRmdirSync);

/**
 * @see {@link fs.rmSync}
 */
export const rmSync = tB(fsRmSync);

/**
 * @see {@link fs.utimesSync}
 */
export const utimesSync = tB(fsUtimesSync);

/**
 * @see {@link fs.futimesSync}
 */
export const futimesSync = tB(fsFutimesSync);

/**
 * @see {@link fs.fsyncSync}
 */
export const fsyncSync = tB(fsFsyncSync);

/**
 * @see {@link fs.accessSync}
 */
export const accessSync = tB(fsAccessSync);

/**
 * @see {@link fs.fdatasyncSync}
 */
export const fdatasyncSync = tB(fsFdatasyncSync);

/**
 * @see {@link fs.copyFileSync}
 */
export const copyFileSync = tB(fsCopyFileSync);

/**
 * @see {@link fs.cpSync}
 */
export const cpSync = tB(fsCpSync);

/**
 * @see {@link fs.openSync}
 */
export const openSync = tD(fsOpenSync);

/**
 * @see {@link fs.writeFileSync}
 */
export const writeFileSync = tB(fsWriteFileSync);

/**
 * @see {@link fs.writevSync}
 */
export const writevSync = tD(fsWritevSync);

/**
 * @see {@link fs.readvSync}
 */
export const readvSync = tD(fsReadvSync);

/**
 * @see {@link fs.opendirSync}
 */
export const opendirSync = tD(fsOpendirSync);

/**
 * @see {@link fs.fstatSync}
 */
export function fstatSync(fd: number, options?: fs.StatOptions & { bigint?: false }): fs.Stats | undefined;
// @ts-expect-error Ignore this error.
export function fstatSync(fd: number, options: fs.StatOptions & { bigint: true }): fs.BigIntStats | undefined;
export function fstatSync(fd: number, options?: fs.StatOptions): fs.BigIntStats | fs.Stats | undefined;
export function fstatSync(fd: number, options?: any) {
    if (!fsFstatSync) throw toWrapFunctionIsUndefinedError;
    try {
        return fsFstatSync(fd, options);
    } catch {}
}

/**
 * @see {@link fs.statfsSync}
 */
export function statfsSync(path: fs.PathLike, options?: fs.StatFsOptions & { bigint?: false }): fs.StatsFs | undefined;
// @ts-expect-error Ignore this error.
export function statfsSync(path: fs.PathLike, options: fs.StatFsOptions & { bigint: true }): fs.BigIntStatsFs | undefined;
export function statfsSync(path: fs.PathLike, options?: fs.StatFsOptions): fs.BigIntStatsFs | fs.StatsFs | undefined;
export function statfsSync(path: fs.PathLike, options?: any) {
    if (!fsStatfsSync) throw toWrapFunctionIsUndefinedError;
    try {
        return fsStatfsSync(path, options);
    } catch {}
}

/**
 * @see {@link fs.readlinkSync}
 */
export function readlinkSync(path: fs.PathLike, options?: fs.EncodingOption): string | undefined;
// @ts-expect-error Ignore this error.
export function readlinkSync(path: fs.PathLike, options: fs.BufferEncodingOption): Buffer | undefined;
export function readlinkSync(path: fs.PathLike, options?: fs.EncodingOption): Buffer | string | undefined;
export function readlinkSync(path: fs.PathLike, options?: any) {
    if (!fsReadlinkSync) throw toWrapFunctionIsUndefinedError;
    try {
        return fsReadlinkSync(path, options);
    } catch {}
}

/**
 * @see {@link fs.realpathSync}
 */
export function realpathSync(path: fs.PathLike, options?: fs.EncodingOption): string | undefined;
// @ts-expect-error Ignore this error.
export function realpathSync(path: fs.PathLike, options: fs.BufferEncodingOption): Buffer | undefined;
export function realpathSync(path: fs.PathLike, options?: fs.EncodingOption): Buffer | string | undefined;
export function realpathSync(path: fs.PathLike, options?: any) {
    if (!fsRealpathSync) throw toWrapFunctionIsUndefinedError;
    try {
        return fsRealpathSync(path, options);
    } catch {}
}

/**
 * @see {@link fs.mkdirSync}
 */
export function mkdirSync(path: fs.PathLike, options: fs.MakeDirectoryOptions & { recursive: true }): string | undefined;
export function mkdirSync(
    path: fs.PathLike,
    options?: (fs.MakeDirectoryOptions & { recursive?: false }) | fs.Mode | null
): boolean;
export function mkdirSync(path: fs.PathLike, options?: fs.MakeDirectoryOptions | fs.Mode | null): string | undefined;
export function mkdirSync(path: fs.PathLike, options?: any) {
    if (!fsMkdirSync) throw toWrapFunctionIsUndefinedError;
    try {
        const result = fsMkdirSync(path, options);
        if (options?.recursive === true) return result;
        return true;
    } catch {}
    if (options?.recursive === true) return;
    return false;
}

/**
 * @see {@link fs.mkdtempSync}
 */
export function mkdtempSync(prefix: string, options?: fs.EncodingOption): string | undefined;
// @ts-expect-error Ignore this error.
export function mkdtempSync(prefix: string, options: fs.BufferEncodingOption): Buffer | undefined;
export function mkdtempSync(prefix: string, options?: fs.EncodingOption): Buffer | string | undefined;
export function mkdtempSync(prefix: string, options?: any) {
    if (!fsMkdtempSync) throw toWrapFunctionIsUndefinedError;
    try {
        return fsMkdtempSync(prefix, options);
    } catch {}
}

/**
 * @see {@link fs.readdirSync}
 */
export function readdirSync(
    path: fs.PathLike,
    options?: BufferEncoding | null | { encoding: BufferEncoding | null; recursive?: boolean; withFileTypes?: false }
): string[] | undefined;
// @ts-expect-error Ignore this error.
export function readdirSync(
    path: fs.PathLike,
    options: 'buffer' | { encoding: 'buffer'; recursive?: boolean; withFileTypes?: false }
): Buffer[] | undefined;
export function readdirSync(
    path: fs.PathLike,
    options?: BufferEncoding | (fs.ObjectEncodingOptions & { recursive?: boolean; withFileTypes?: false }) | null
): Buffer[] | string[] | undefined;
export function readdirSync(
    path: fs.PathLike,
    options: fs.ObjectEncodingOptions & { recursive?: boolean; withFileTypes: true }
): fs.Dirent[] | undefined;
export function readdirSync(path: fs.PathLike, options?: any) {
    if (!fsReaddirSync) throw toWrapFunctionIsUndefinedError;
    try {
        return fsReaddirSync(path, options);
    } catch {}
}

/**
 * @see {@link fs.writeSync}
 */
export function writeSync(
    fd: number,
    buffer: NodeJS.ArrayBufferView,
    offset?: null | number,
    length?: null | number, position?: null | number
): number | undefined;
export function writeSync(
    fd: number,
    string: string,
    position?: null | number,
    encoding?: BufferEncoding | null
): number | undefined;
export function writeSync(...args: any[]) {
    if (!fsWriteSync) throw toWrapFunctionIsUndefinedError;
    try {
        // @ts-expect-error Ignore this error.
        return fsWriteSync(...args);
    } catch {}
}

/**
 * @see {@link fs.readSync}
 */
export function readSync(
    fd: number,
    buffer: NodeJS.ArrayBufferView,
    offset: number,
    length: number,
    position: fs.ReadPosition | null
): number | undefined;
export function readSync(fd: number, buffer: NodeJS.ArrayBufferView, opts?: fs.ReadSyncOptions): number | undefined;
export function readSync(...args: any[]) {
    if (!fsReadSync) throw toWrapFunctionIsUndefinedError;
    try {
        // @ts-expect-error Ignore this error.
        return fsReadSync(...args);
    } catch {}
}

/**
 * @see {@link fs.readFileSync}
 */
export function readFileSync(
    path: fs.PathOrFileDescriptor,
    options?: null | { encoding?: null; flag?: string }
): Buffer | undefined;
// @ts-expect-error Ignore this error.
export function readFileSync(
    path: fs.PathOrFileDescriptor,
    options: BufferEncoding | { encoding: BufferEncoding; flag?: string }
): string | undefined;
export function readFileSync(
    path: fs.PathOrFileDescriptor,
    options?: BufferEncoding | (fs.ObjectEncodingOptions & { flag?: string }) | null
): Buffer | string | undefined;
export function readFileSync(path: fs.PathOrFileDescriptor, options?: any) {
    if (!fsReadFileSync) throw toWrapFunctionIsUndefinedError;
    try {
        return fsReadFileSync(path, options);
    } catch {}
}

/**
 * @see {@link fs.statSync}
 */
export function statSync(path: fs.PathLike, options?: fs.StatSyncOptions & { bigint?: false }): fs.Stats | undefined;
// @ts-expect-error Ignore this error.
export function statSync(path: fs.PathLike, options: fs.StatSyncOptions & { bigint: true }): fs.BigIntStats | undefined;
export function statSync(path: fs.PathLike, options?: fs.StatSyncOptions): fs.BigIntStats | fs.Stats | undefined;
export function statSync(path: fs.PathLike, options?: any) {
    if (!fsStatSync) throw toWrapFunctionIsUndefinedError;
    try {
        return fsStatSync(path, options);
    } catch {}
}

/**
 * @see {@link fs.lstatSync}
 */
export const lstatSync = statSync;
