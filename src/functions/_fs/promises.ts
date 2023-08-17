import { tryAndGetBoolean, tryAndGetData } from '@kikiutils/wrappers';
import fsp from 'fs/promises';

// Get boolean
export const access = tryAndGetBoolean(fsp.access);
export const appendFile = tryAndGetBoolean(fsp.appendFile);
export const chmod = tryAndGetBoolean(fsp.chmod);
export const chown = tryAndGetBoolean(fsp.chown);
export const copyFile = tryAndGetBoolean(fsp.copyFile);
export const lchown = tryAndGetBoolean(fsp.lchown);
export const link = tryAndGetBoolean(fsp.link);
export const rename = tryAndGetBoolean(fsp.rename);
export const rm = tryAndGetBoolean(fsp.rm);
export const rmdir = tryAndGetBoolean(fsp.rmdir);
export const symlink = tryAndGetBoolean(fsp.symlink);
export const truncate = tryAndGetBoolean(fsp.truncate);
export const unlink = tryAndGetBoolean(fsp.unlink);
export const utimes = tryAndGetBoolean(fsp.utimes);
export const writeFile = tryAndGetBoolean(fsp.writeFile);

// Get Data TODO: overloads
// export const lstat = tryAndGetData(fsp.lstat);
// export const mkdir = tryAndGetData(fsp.mkdir);
// export const mkdtemp = tryAndGetData(fsp.mkdtemp);
export const open = tryAndGetData(fsp.open);
export const opendir = tryAndGetData(fsp.opendir);
// export const readdir = tryAndGetData(fsp.readdir);
// export const readFile = tryAndGetData(fsp.readFile);
// export const readlink = tryAndGetData(fsp.readlink);
// export const realpath = tryAndGetData(fsp.realpath);
// export const stat = tryAndGetData(fsp.stat);
