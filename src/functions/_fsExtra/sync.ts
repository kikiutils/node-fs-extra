import fse from 'fs-extra';

import { tB, tD } from '../../wrappers';

// Get boolean
export const copySync  = tB(fse.copySync);
export const emptyDirSync = tB(fse.emptyDirSync);
export const ensureDirSync = tB(fse.ensureDirSync);
export const ensureFileSync = tB(fse.ensureFileSync);
export const ensureLinkSync = tB(fse.ensureLinkSync);
export const ensureSymlinkSync = tB(fse.ensureSymlinkSync);
export const mkdirpSync = ensureDirSync;
export const mkdirsSync = ensureDirSync;
export const moveSync = tB(fse.moveSync);
export const outputFileSync = tB(fse.outputFileSync);
export const outputJSONSync = tB(fse.outputJSONSync);
export const outputJsonSync = tB(fse.outputJsonSync);
export const removeSync = tB(fse.removeSync);
export const writeJsonSync = tB(fse.writeJsonSync);

// Get data
export const readJsonSync = tD(fse.readJsonSync);

// Original functions
export { pathExistsSync } from 'fs-extra';
