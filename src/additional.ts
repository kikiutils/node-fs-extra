import type { Abortable } from 'node:events';
import type {
    ObjectEncodingOptions,
    OpenMode,
    PathLike,
    PathOrFileDescriptor,
    StatOptions,
    StatSyncOptions,
} from 'node:fs';
import type fsp from 'node:fs/promises';

import {
    readFile,
    readFileSync,
    stat,
    statSync,
} from './fs';

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
// @ts-expect-error Ignore this error.
export async function getFileSize(path: PathLike, opts: StatOptions & { bigint: true }): Promise<bigint | undefined>;
export async function getFileSize(path: PathLike, opts?: StatOptions): Promise<bigint | number | undefined>;
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
// @ts-expect-error Ignore this error.
export function getFileSizeSync(path: PathLike, options: StatSyncOptions & { bigint: true }): bigint | undefined;
export function getFileSizeSync(path: PathLike, options?: StatSyncOptions): bigint | number | undefined;
export function getFileSizeSync(path: PathLike, options?: any) {
    return statSync(path, options)?.size;
}

/**
 * Asynchronously checks if the given path is a block device.
 *
 * @param {PathLike} path - The path to check.
 * @returns {Promise<boolean | undefined>} - A promise that resolves to true if the path is a block device, otherwise false, or undefined if the path does not exist or an error occurs.
 */
export const pathIsBlockDevice = async (path: PathLike) => (await stat(path))?.isBlockDevice();

/**
 * Synchronously checks if the given path is a block device.
 *
 * @param {PathLike} path - The path to check.
 * @returns {boolean | undefined} - Returns true if the path is a block device, otherwise false, or undefined if the path does not exist or an error occurs.
 */
export const pathIsBlockDeviceSync = (path: PathLike) => statSync(path)?.isBlockDevice();

/**
 * Asynchronously checks if the given path is a character device.
 *
 * @param {PathLike} path - The path to check.
 * @returns {Promise<boolean | undefined>} - A promise that resolves to true if the path is a character device, otherwise false, or undefined if the path does not exist or an error occurs.
 */
export const pathIsCharacterDevice = async (path: PathLike) => (await stat(path))?.isCharacterDevice();

/**
 * Synchronously checks if the given path is a character device.
 *
 * @param {PathLike} path - The path to check.
 * @returns {boolean | undefined} - Returns true if the path is a character device, otherwise false, or undefined if the path does not exist or an error occurs.
 */
export const pathIsCharacterDeviceSync = (path: PathLike) => statSync(path)?.isCharacterDevice();

/**
 * Asynchronously checks if the given path is a directory.
 *
 * @param {PathLike} path - The path to check.
 * @returns {Promise<boolean | undefined>} - A promise that resolves to true if the path is a directory, otherwise false, or undefined if the path does not exist or an error occurs.
 */
export const pathIsDirectory = async (path: PathLike) => (await stat(path))?.isDirectory();

/**
 * Synchronously checks if the given path is a directory.
 *
 * @param {PathLike} path - The path to check.
 * @returns {boolean | undefined} - Returns true if the path is a directory, otherwise false, or undefined if the path does not exist or an error occurs.
 */
export const pathIsDirectorySync = (path: PathLike) => statSync(path)?.isDirectory();

/**
 * @see {@link isDirectory}
 */
export const pathIsDir = pathIsDirectory;

/**
 * @see {@link isDirectorySync}
 */
export const pathIsDirSync = pathIsDirectorySync;

/**
 * Asynchronously checks if the given path is a FIFO (named pipe).
 *
 * @param {PathLike} path - The path to check.
 * @returns {Promise<boolean | undefined>} - A promise that resolves to true if the path is a FIFO, otherwise false, or undefined if the path does not exist or an error occurs.
 */
export const pathIsFIFO = async (path: PathLike) => (await stat(path))?.isFIFO();

/**
 * Synchronously checks if the given path is a FIFO (named pipe).
 *
 * @param {PathLike} path - The path to check.
 * @returns {boolean | undefined} - Returns true if the path is a FIFO, otherwise false, or undefined if the path does not exist or an error occurs.
 */
export const pathIsFIFOSync = (path: PathLike) => statSync(path)?.isFIFO();

/**
 * Asynchronously checks if the given path is a file.
 *
 * @param {PathLike} path - The path to check.
 * @returns {Promise<boolean | undefined>} - A promise that resolves to true if the path is a file, otherwise false, or undefined if the path does not exist or an error occurs.
 */
export const pathIsFile = async (path: PathLike) => (await stat(path))?.isFile();

/**
 * Synchronously checks if the given path is a file.
 *
 * @param {PathLike} path - The path to check.
 * @returns {boolean | undefined} - Returns true if the path is a file, otherwise false, or undefined if the path does not exist or an error occurs.
 */
export const pathIsFileSync = (path: PathLike) => statSync(path)?.isFile();

/**
 * Asynchronously checks if the given path is a socket.
 *
 * @param {PathLike} path - The path to check.
 * @returns {Promise<boolean | undefined>} - A promise that resolves to true if the path is a socket, otherwise false, or undefined if the path does not exist or an error occurs.
 */
export const pathIsSocket = async (path: PathLike) => (await stat(path))?.isSocket();

/**
 * Synchronously checks if the given path is a socket.
 *
 * @param {PathLike} path - The path to check.
 * @returns {boolean | undefined} - Returns true if the path is a socket, otherwise false, or undefined if the path does not exist or an error occurs.
 */
export const pathIsSocketSync = (path: PathLike) => statSync(path)?.isSocket();

/**
 * Asynchronously checks if the given path is a symbolic link.
 *
 * @param {PathLike} path - The path to check.
 * @returns {Promise<boolean | undefined>} - A promise that resolves to true if the path is a symbolic link, otherwise false, or undefined if the path does not exist or an error occurs.
 */
export const pathIsSymbolicLink = async (path: PathLike) => (await stat(path))?.isSymbolicLink();

/**
 * Synchronously checks if the given path is a symbolic link.
 *
 * @param {PathLike} path - The path to check.
 * @returns {boolean | undefined} - Returns true if the path is a symbolic link, otherwise false, or undefined if the path does not exist or an error occurs.
 */
export const pathIsSymbolicLinkSync = (path: PathLike) => statSync(path)?.isSymbolicLink();

/**
 * Reads a file and returns its contents as a Blob.
 *
 * @param {PathLike | fsp.FileHandle} path - The path to the file.
 * @param {ObjectEncodingOptions & Abortable & { flag?: OpenMode } | BufferEncoding | null} [options] - The options for reading the file.
 * @returns {Promise<Blob | undefined>} - A promise that resolves to a Blob containing the file contents, or undefined if an error occurs.
 */
// @ts-expect-error Ignore this error.
export async function readFileToBlob(path: fsp.FileHandle | PathLike, options?: (Abortable & { encoding?: null; flag?: OpenMode }) | null): Promise<Blob | undefined>;
export async function readFileToBlob(path: fsp.FileHandle | PathLike, options: (Abortable & { encoding: BufferEncoding; flag?: OpenMode }) | BufferEncoding): Promise<Blob | undefined>;
export async function readFileToBlob(path: fsp.FileHandle | PathLike, options?: (Abortable & ObjectEncodingOptions & { flag?: OpenMode }) | BufferEncoding | null): Promise<Blob | undefined>;
export async function readFileToBlob(path: PathLike, options?: any) {
    const file = await readFile(path, options);
    if (file) return new Blob([file]);
}

/**
 * Synchronously reads a file and returns its contents as a Blob.
 *
 * @param {PathOrFileDescriptor} path - The path to the file.
 * @param {ObjectEncodingOptions & { flag?: string } | BufferEncoding | null} [options] - The options for reading the file.
 * @returns {Blob | undefined} - A Blob containing the file contents, or undefined if an error occurs.
 */
export function readFileToBlobSync(path: PathOrFileDescriptor, options?: null | { encoding?: null; flag?: string }): Blob | undefined;
export function readFileToBlobSync(path: PathOrFileDescriptor, options: BufferEncoding | { encoding: BufferEncoding; flag?: string }): Blob | undefined;
export function readFileToBlobSync(path: PathOrFileDescriptor, options?: BufferEncoding | null | (ObjectEncodingOptions & { flag?: string })): Blob | undefined;
export function readFileToBlobSync(path: PathOrFileDescriptor, options?: any) {
    const file = readFileSync(path, options);
    if (file) return new Blob([file]);
}
