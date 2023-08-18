import { tryAndGetBoolean, tryAndGetData } from '@kikiutils/wrappers';
import fse from 'fs-extra';

// Get boolean
export const copySync  = tryAndGetBoolean(fse.copySync);
export const emptyDirSync = tryAndGetBoolean(fse.emptyDirSync);
export const ensureDirSync = tryAndGetBoolean(fse.ensureDirSync);
export const ensureFileSync = tryAndGetBoolean(fse.ensureFileSync);
export const ensureLinkSync = tryAndGetBoolean(fse.ensureLinkSync);
export const ensureSymlinkSync = tryAndGetBoolean(fse.ensureSymlinkSync);
export const mkdirpSync = ensureDirSync;
export const mkdirsSync = ensureDirSync;
export const moveSync = tryAndGetBoolean(fse.moveSync);
export const outputFileSync = tryAndGetBoolean(fse.outputFileSync);
export const outputJSONSync = tryAndGetBoolean(fse.outputJSONSync);
export const outputJsonSync = tryAndGetBoolean(fse.outputJsonSync);
export const removeSync = tryAndGetBoolean(fse.removeSync);
export const writeJsonSync = tryAndGetBoolean(fse.writeJsonSync);

// Get data
export const readJsonSync = tryAndGetData(fse.readJsonSync);

// Original functions
export { pathExistsSync } from 'fs-extra';
