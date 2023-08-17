import { tryAndGetBoolean, tryAndGetData } from '@kikiutils/wrappers';
import fs from 'fs';

import { FsFunctionsParameters } from './types';

// Get boolean
export const accessSync = tryAndGetBoolean((...args: FsFunctionsParameters['accessSync']) => fs.accessSync(...args));
export const appendFileSync = tryAndGetBoolean((...args: FsFunctionsParameters['appendFileSync']) => fs.appendFileSync(...args));
export const chmodSync = tryAndGetBoolean((...args: FsFunctionsParameters['chmodSync']) => fs.chmodSync(...args));
export const chownSync = tryAndGetBoolean((...args: FsFunctionsParameters['chownSync']) => fs.chownSync(...args));
export const copyFileSync = tryAndGetBoolean((...args: FsFunctionsParameters['copyFileSync']) => fs.copyFileSync(...args));
export const lchownSync = tryAndGetBoolean((...args: FsFunctionsParameters['lchownSync']) => fs.lchownSync(...args));
export const linkSync = tryAndGetBoolean((...args: FsFunctionsParameters['linkSync']) => fs.linkSync(...args));
export const renameSync = tryAndGetBoolean((...args: FsFunctionsParameters['renameSync']) => fs.renameSync(...args));
export const rmSync = tryAndGetBoolean((...args: FsFunctionsParameters['rmSync']) => fs.rmSync(...args));
export const rmdirSync = tryAndGetBoolean((...args: FsFunctionsParameters['rmdirSync']) => fs.rmdirSync(...args));
export const symlinkSync = tryAndGetBoolean((...args: FsFunctionsParameters['symlinkSync']) => fs.symlinkSync(...args));
export const truncateSync = tryAndGetBoolean((...args: FsFunctionsParameters['truncateSync']) => fs.truncateSync(...args));
export const unlinkSync = tryAndGetBoolean((...args: FsFunctionsParameters['unlinkSync']) => fs.unlinkSync(...args));
export const utimesSync = tryAndGetBoolean((...args: FsFunctionsParameters['utimesSync']) => fs.utimesSync(...args));
export const writeFileSync = tryAndGetBoolean((...args: FsFunctionsParameters['writeFileSync']) => fs.writeFileSync(...args));

// Get Data
export const lstatSync = tryAndGetData((...args: FsFunctionsParameters['lstatSync']) => fs.lstatSync(...args));
export const mkdirSync = tryAndGetData((...args: FsFunctionsParameters['mkdirSync']) => fs.mkdirSync(...args));
export const mkdtempSync = tryAndGetData((...args: FsFunctionsParameters['mkdtempSync']) => fs.mkdtempSync(...args));
export const openSync = tryAndGetData((...args: FsFunctionsParameters['openSync']) => fs.openSync(...args));
export const opendirSync = tryAndGetData((...args: FsFunctionsParameters['opendirSync']) => fs.opendirSync(...args));
export const readdirSync = tryAndGetData((...args: FsFunctionsParameters['readdirSync']) => fs.readdirSync(...args));
export const readFileSync = tryAndGetData((...args: FsFunctionsParameters['readFileSync']) => fs.readFileSync(...args));
export const readlinkSync = tryAndGetData((...args: FsFunctionsParameters['readlinkSync']) => fs.readlinkSync(...args));
export const realpathSync = tryAndGetData((...args: FsFunctionsParameters['realpathSync']) => fs.realpathSync(...args));
export const statSync = tryAndGetData((...args: FsFunctionsParameters['statSync']) => fs.statSync(...args));
