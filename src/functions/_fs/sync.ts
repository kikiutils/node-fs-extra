import { tryAndGetBoolean, tryAndGetData } from '@kikiutils/wrappers';
import fs from 'fs';

// Get boolean
export const accessSync = tryAndGetBoolean(fs.accessSync);
export const appendFileSync = tryAndGetBoolean(fs.appendFileSync);
export const chmodSync = tryAndGetBoolean(fs.chmodSync);
export const chownSync = tryAndGetBoolean(fs.chownSync);
export const copyFileSync = tryAndGetBoolean(fs.copyFileSync);
export const lchownSync = tryAndGetBoolean(fs.lchownSync);
export const linkSync = tryAndGetBoolean(fs.linkSync);
export const renameSync = tryAndGetBoolean(fs.renameSync);
export const rmSync = tryAndGetBoolean(fs.rmSync);
export const rmdirSync = tryAndGetBoolean(fs.rmdirSync);
export const symlinkSync = tryAndGetBoolean(fs.symlinkSync);
export const truncateSync = tryAndGetBoolean(fs.truncateSync);
export const unlinkSync = tryAndGetBoolean(fs.unlinkSync);
export const utimesSync = tryAndGetBoolean(fs.utimesSync);
export const writeFileSync = tryAndGetBoolean(fs.writeFileSync);

// Get Data
// export const lstatSync = tryAndGetData(fs.lstatSync);
// export const mkdirSync = tryAndGetData(fs.mkdirSync);
// export const mkdtempSync = tryAndGetData(fs.mkdtempSync);
export const openSync = tryAndGetData(fs.openSync);
export const opendirSync = tryAndGetData(fs.opendirSync);
// export const readdirSync = tryAndGetData(fs.readdirSync);
// export const readFileSync = tryAndGetData(fs.readFileSync);
// export const readlinkSync = tryAndGetData(fs.readlinkSync);
// export const realpathSync = tryAndGetData(fs.realpathSync);
// export const statSync = tryAndGetData(fs.statSync);
