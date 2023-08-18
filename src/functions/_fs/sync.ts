import { tryAndGetBoolean, tryAndGetData } from '@kikiutils/wrappers';
import fs from 'fs';

// Get boolean
export const accessSync = tryAndGetBoolean(fs.accessSync);
export const appendFileSync = tryAndGetBoolean(fs.appendFileSync);
export const chmodSync = tryAndGetBoolean(fs.chmodSync);
export const chownSync = tryAndGetBoolean(fs.chownSync);
export const closeSync = tryAndGetBoolean(fs.closeSync);
export const copyFileSync = tryAndGetBoolean(fs.copyFileSync);
export const cpSync = tryAndGetBoolean(fs.cpSync);
export const fchmodSync = tryAndGetBoolean(fs.fchmodSync);
export const fchownSync = tryAndGetBoolean(fs.fchownSync);
export const fdatasyncSync = tryAndGetBoolean(fs.fdatasyncSync);
export const fsyncSync = tryAndGetBoolean(fs.fsyncSync);
export const ftruncateSync = tryAndGetBoolean(fs.ftruncateSync);
export const futimesSync = tryAndGetBoolean(fs.futimesSync);
export const lchownSync = tryAndGetBoolean(fs.lchownSync);
export const linkSync = tryAndGetBoolean(fs.linkSync);
export const lutimesSync = tryAndGetBoolean(fs.lutimesSync);
export const renameSync = tryAndGetBoolean(fs.renameSync);
export const rmSync = tryAndGetBoolean(fs.rmSync);
export const rmdirSync = tryAndGetBoolean(fs.rmdirSync);
export const symlinkSync = tryAndGetBoolean(fs.symlinkSync);
export const truncateSync = tryAndGetBoolean(fs.truncateSync);
export const unlinkSync = tryAndGetBoolean(fs.unlinkSync);
export const utimesSync = tryAndGetBoolean(fs.utimesSync);
export const writeFileSync = tryAndGetBoolean(fs.writeFileSync);

// Get data
export const openSync = tryAndGetData(fs.openSync);
export const opendirSync = tryAndGetData(fs.opendirSync);
export const readvSync = tryAndGetData(fs.readvSync);
export const writevSync = tryAndGetData(fs.writevSync);

// Original functions
export { existsSync } from 'fs';

// TODO: overloads
export const fstatSync = tryAndGetData(fs.fstatSync);
export const lstatSync = tryAndGetData(fs.lstatSync);
export const mkdirSync = tryAndGetData(fs.mkdirSync);
export const mkdtempSync = tryAndGetData(fs.mkdtempSync);
export const readFileSync = tryAndGetData(fs.readFileSync);
export const readSync = tryAndGetData(fs.readSync);
export const readdirSync = tryAndGetData(fs.readdirSync);
export const readlinkSync = tryAndGetData(fs.readlinkSync);
export const realpathSync = tryAndGetData(fs.realpathSync);
export const statSync = tryAndGetData(fs.statSync);
export const statfsSync = tryAndGetData(fs.statfsSync);
export const writeSync = tryAndGetData(fs.writeSync);
