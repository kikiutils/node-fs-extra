import { tryAndGetBoolean, tryAndGetData } from '@kikiutils/wrappers';
import fs from 'fs';
import fsp from 'fs/promises';

// Get boolean
export const access = tryAndGetBoolean(fsp.access);
export const appendFile = tryAndGetBoolean(fsp.appendFile);
export const chmod = tryAndGetBoolean(fsp.chmod);
export const chown = tryAndGetBoolean(fsp.chown);
export const close = tryAndGetBoolean(fs.close.__promisify__);
export const copyFile = tryAndGetBoolean(fsp.copyFile);
export const cp = tryAndGetBoolean(fsp.cp);
export const fchmod = tryAndGetBoolean(fs.fchmod.__promisify__);
export const fchown = tryAndGetBoolean(fs.fchown.__promisify__);
export const fdatasync = tryAndGetBoolean(fs.fdatasync.__promisify__);
export const fsync = tryAndGetBoolean(fs.fsync.__promisify__);
export const ftruncate = tryAndGetBoolean(fs.ftruncate.__promisify__);
export const futimes = tryAndGetBoolean(fs.futimes.__promisify__);
export const lchown = tryAndGetBoolean(fsp.lchown);
export const link = tryAndGetBoolean(fsp.link);
export const lutimes = tryAndGetBoolean(fsp.lutimes);
export const rename = tryAndGetBoolean(fsp.rename);
export const rm = tryAndGetBoolean(fsp.rm);
export const rmdir = tryAndGetBoolean(fsp.rmdir);
export const symlink = tryAndGetBoolean(fsp.symlink);
export const truncate = tryAndGetBoolean(fsp.truncate);
export const unlink = tryAndGetBoolean(fsp.unlink);
export const utimes = tryAndGetBoolean(fsp.utimes);
export const writeFile = tryAndGetBoolean(fsp.writeFile);

// Get data
export const open = tryAndGetData(fsp.open);
export const opendir = tryAndGetData(fsp.opendir);
export const readv = tryAndGetData(fs.readv.__promisify__);
export const writev = tryAndGetData(fs.writev.__promisify__);

// Original functions
export { watch } from 'fs/promises';

// TODO: overloads
export const fstat = tryAndGetData(fs.fstat.__promisify__);
export const lstat = tryAndGetData(fsp.lstat);
export const mkdir = tryAndGetData(fsp.mkdir);
export const mkdtemp = tryAndGetData(fsp.mkdtemp);
export const read = tryAndGetData(fs.read.__promisify__);
export const readFile = tryAndGetData(fsp.readFile);
export const readdir = tryAndGetData(fsp.readdir);
export const readlink = tryAndGetData(fsp.readlink);
export const realpath = tryAndGetData(fsp.realpath);
export const stat = tryAndGetData(fsp.stat);
export const statfs = tryAndGetData(fsp.statfs);
export const write = tryAndGetData(fs.write.__promisify__);
