import fs from 'fs';

import { tB, tD } from '../../wrappers';

// Get boolean
export const accessSync = tB(fs.accessSync);
export const appendFileSync = tB(fs.appendFileSync);
export const chmodSync = tB(fs.chmodSync);
export const chownSync = tB(fs.chownSync);
export const closeSync = tB(fs.closeSync);
export const copyFileSync = tB(fs.copyFileSync);
export const cpSync = tB(fs.cpSync);
export const fchmodSync = tB(fs.fchmodSync);
export const fchownSync = tB(fs.fchownSync);
export const fdatasyncSync = tB(fs.fdatasyncSync);
export const fsyncSync = tB(fs.fsyncSync);
export const ftruncateSync = tB(fs.ftruncateSync);
export const futimesSync = tB(fs.futimesSync);
export const lchownSync = tB(fs.lchownSync);
export const linkSync = tB(fs.linkSync);
export const lutimesSync = tB(fs.lutimesSync);
export const renameSync = tB(fs.renameSync);
export const rmSync = tB(fs.rmSync);
export const rmdirSync = tB(fs.rmdirSync);
export const symlinkSync = tB(fs.symlinkSync);
export const truncateSync = tB(fs.truncateSync);
export const unlinkSync = tB(fs.unlinkSync);
export const utimesSync = tB(fs.utimesSync);
export const writeFileSync = tB(fs.writeFileSync);

// Get data
export const openSync = tD(fs.openSync);
export const opendirSync = tD(fs.opendirSync);
export const readvSync = tD(fs.readvSync);
export const writevSync = tD(fs.writevSync);

// Original functions
export { existsSync } from 'fs';

// TODO: overloads
export const fstatSync = tD(fs.fstatSync);
export const lstatSync = tD(fs.lstatSync);
export const mkdirSync = tD(fs.mkdirSync);
export const mkdtempSync = tD(fs.mkdtempSync);
export const readFileSync = tD(fs.readFileSync);
export const readSync = tD(fs.readSync);
export const readdirSync = tD(fs.readdirSync);
export const readlinkSync = tD(fs.readlinkSync);
export const realpathSync = tD(fs.realpathSync);
export const statSync = tD(fs.statSync);
export const statfsSync = tD(fs.statfsSync);
export const writeSync = tD(fs.writeSync);
