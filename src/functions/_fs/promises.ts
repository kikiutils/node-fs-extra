import fs from 'fs';
import fsp from 'fs/promises';

import { tB, tD } from '../../wrappers';

// Get boolean
export const access = tB(fsp.access);
export const appendFile = tB(fsp.appendFile);
export const chmod = tB(fsp.chmod);
export const chown = tB(fsp.chown);
export const close = tB(fs.close?.__promisify__);
export const copyFile = tB(fsp.copyFile);

/**
 * This function is supported in Node v16.7.0 and later.
 *
 * If you are using a version prior to 16.7.0, please refrain from using this function.
 */
export const cp = tB(fsp.cp);
export const fchmod = tB(fs.fchmod?.__promisify__);
export const fchown = tB(fs.fchown?.__promisify__);
export const fdatasync = tB(fs.fdatasync?.__promisify__);
export const fsync = tB(fs.fsync?.__promisify__);
export const ftruncate = tB(fs.ftruncate?.__promisify__);
export const futimes = tB(fs.futimes?.__promisify__);
export const lchown = tB(fsp.lchown);
export const link = tB(fsp.link);
export const lutimes = tB(fsp.lutimes);
export const rename = tB(fsp.rename);
export const rm = tB(fsp.rm);
export const rmdir = tB(fsp.rmdir);
export const symlink = tB(fsp.symlink);
export const truncate = tB(fsp.truncate);
export const unlink = tB(fsp.unlink);
export const utimes = tB(fsp.utimes);
export const writeFile = tB(fsp.writeFile);

// Get data
export const open = tD(fsp.open);
export const opendir = tD(fsp.opendir);
export const readv = tD(fs.readv?.__promisify__);
export const writev = tD(fs.writev?.__promisify__);

// TODO: overloads
export const fstat = tD(fs.fstat?.__promisify__);
export const lstat = tD(fsp.lstat);
export const mkdir = tD(fsp.mkdir);
export const mkdtemp = tD(fsp.mkdtemp);
export const read = tD(fs.read?.__promisify__);
export const readFile = tD(fsp.readFile);
export const readdir = tD(fsp.readdir);
export const readlink = tD(fsp.readlink);
export const realpath = tD(fsp.realpath);
export const stat = tD(fsp.stat);

/**
 * This function is supported in Node from v18.15.0 up to, but not including v19, as well as v19.6.0 and later.
 *
 * If you are using a version outside of the specified range, please refrain from using this function.
 */
export const statfs = tD(fsp.statfs);
export const write = tD(fs.write?.__promisify__);
