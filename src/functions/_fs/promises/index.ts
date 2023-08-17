import { tryAndGetBoolean, tryAndGetData } from '@kikiutils/wrappers';
import fsp from 'fs/promises';

import { FspFunctionsParameters } from './types';

// Get boolean
export const access = tryAndGetBoolean(async (...args: FspFunctionsParameters['access']) => await fsp.access(...args));
export const appendFile = tryAndGetBoolean(async (...args: FspFunctionsParameters['appendFile']) => await fsp.appendFile(...args));
export const chmod = tryAndGetBoolean(async (...args: FspFunctionsParameters['chmod']) => await fsp.chmod(...args));
export const chown = tryAndGetBoolean(async (...args: FspFunctionsParameters['chown']) => await fsp.chown(...args));
export const copyFile = tryAndGetBoolean(async (...args: FspFunctionsParameters['copyFile']) => await fsp.copyFile(...args));
export const lchown = tryAndGetBoolean(async (...args: FspFunctionsParameters['lchown']) => await fsp.lchown(...args));
export const link = tryAndGetBoolean(async (...args: FspFunctionsParameters['link']) => await fsp.link(...args));
export const rename = tryAndGetBoolean(async (...args: FspFunctionsParameters['rename']) => await fsp.rename(...args));
export const rm = tryAndGetBoolean(async (...args: FspFunctionsParameters['rm']) => await fsp.rm(...args));
export const rmdir = tryAndGetBoolean(async (...args: FspFunctionsParameters['rmdir']) => await fsp.rmdir(...args));
export const symlink = tryAndGetBoolean(async (...args: FspFunctionsParameters['symlink']) => await fsp.symlink(...args));
export const truncate = tryAndGetBoolean(async (...args: FspFunctionsParameters['truncate']) => await fsp.truncate(...args));
export const unlink = tryAndGetBoolean(async (...args: FspFunctionsParameters['unlink']) => await fsp.unlink(...args));
export const utimes = tryAndGetBoolean(async (...args: FspFunctionsParameters['utimes']) => await fsp.utimes(...args));
export const writeFile = tryAndGetBoolean(async (...args: FspFunctionsParameters['writeFile']) => await fsp.writeFile(...args));

// Get Data
export const lstat = tryAndGetData(async (...args: FspFunctionsParameters['lstat']) => await fsp.lstat(...args));
export const mkdir = tryAndGetData(async (...args: FspFunctionsParameters['mkdir']) => await fsp.mkdir(...args));
export const mkdtemp = tryAndGetData(async (...args: FspFunctionsParameters['mkdtemp']) => await fsp.mkdtemp(...args));
export const open = tryAndGetData(async (...args: FspFunctionsParameters['open']) => await fsp.open(...args));
export const opendir = tryAndGetData(async (...args: FspFunctionsParameters['opendir']) => await fsp.opendir(...args));
export const readdir = tryAndGetData(async (...args: FspFunctionsParameters['readdir']) => await fsp.readdir(...args));
export const readFile = tryAndGetData(async (...args: FspFunctionsParameters['readFile']) => await fsp.readFile(...args));
export const readlink = tryAndGetData(async (...args: FspFunctionsParameters['readlink']) => await fsp.readlink(...args));
export const realpath = tryAndGetData(async (...args: FspFunctionsParameters['realpath']) => await fsp.realpath(...args));
export const stat = tryAndGetData(async (...args: FspFunctionsParameters['stat']) => await fsp.stat(...args));
