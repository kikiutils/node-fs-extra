import fse from 'fs-extra';

import {
    tB,
    tD,
} from '../wrappers';

import type { FseParameters } from './types';

/**
 * @see {@link fse.copySync}
 */
export const copySync = tB(fse.copySync);

/**
 * @see {@link fse.moveSync}
 */
export const moveSync = tB(fse.moveSync);

/**
 * @see {@link fse.ensureFileSync}
 */
export const ensureFileSync = tB(fse.ensureFileSync);

/**
 * @see {@link fse.ensureLinkSync}
 */
export const ensureLinkSync = tB(fse.ensureLinkSync);

/**
 * @see {@link fse.ensureSymlinkSync}
 */
export const ensureSymlinkSync = tB(fse.ensureSymlinkSync);

/**
 * @see {@link fse.ensureDirSync}
 */
export const ensureDirSync = tB(fse.ensureDirSync);

/**
 * @see {@link fse.outputFileSync}
 */
export const outputFileSync = tB(fse.outputFileSync);

/**
 * @see {@link fse.outputJsonSync}
 */
export const outputJsonSync = tB(fse.outputJsonSync);

/**
 * @see {@link fse.removeSync}
 */
export const removeSync = tB(fse.removeSync);

/**
 * @see {@link fse.emptyDirSync}
 */
export const emptyDirSync = tB(fse.emptyDirSync);

/**
 * @see {@link fse.ensureFileSync}
 */
export const createFileSync = ensureFileSync;

/**
 * @see {@link fse.ensureLinkSync}
 */
export const createLinkSync = ensureLinkSync;

/**
 * @see {@link fse.ensureSymlinkSync}
 */
export const createSymlinkSync = ensureSymlinkSync;

/**
 * @see {@link fse.ensureDirSync}
 */
export const mkdirsSync = ensureDirSync;

/**
 * @see {@link fse.ensureDirSync}
 */
export const mkdirpSync = ensureDirSync;

/**
 * @see {@link fse.readJsonSync}
 */
export const readJsonSync = tD(<T = any>(...args: FseParameters['readJsonSync']) => fse.readJsonSync(...args) as T);

/**
 * @see {@link fse.readJsonSync}
 */
export const readJSONSync = readJsonSync;

/**
 * @see {@link fse.writeJsonSync}
 */
export const writeJsonSync = tB(fse.writeJsonSync);

/**
 * @see {@link fse.writeJsonSync}
 */
export const writeJSONSync = writeJsonSync;

/**
 * @see {@link fse.outputJsonSync}
 */
export const outputJSONSync = outputJsonSync;

/**
 * @see {@link fse.emptyDirSync}
 */
export const emptydirSync = emptyDirSync;
export const pathExistsSync = fse.pathExistsSync;
