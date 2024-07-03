import fse from 'fs-extra';

import { tB, tD } from '../wrappers';

export { pathExistsSync } from 'fs-extra';

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
 * @see {@link fse.createFileSync}
 */
export const createFileSync = tB(fse.createFileSync);

/**
 * @see {@link fse.createLinkSync}
 */
export const createLinkSync = tB(fse.createLinkSync);

/**
 * @see {@link fse.createSymlinkSync}
 */
export const createSymlinkSync = tB(fse.createSymlinkSync);

/**
 * @see {@link fse.mkdirsSync}
 */
export const mkdirsSync = tB(fse.mkdirsSync);

/**
 * @see {@link fse.mkdirpSync}
 */
export const mkdirpSync = tB(fse.mkdirpSync);

/**
 * @see {@link fse.readJsonSync}
 */
export const readJsonSync = tD(fse.readJsonSync);

/**
 * @see {@link fse.readJSONSync}
 */
export const readJSONSync = tD(fse.readJSONSync);

/**
 * @see {@link fse.writeJsonSync}
 */
export const writeJsonSync = tB(fse.writeJsonSync);

/**
 * @see {@link fse.writeJSONSync}
 */
export const writeJSONSync = tB(fse.writeJSONSync);

/**
 * @see {@link fse.outputJSONSync}
 */
export const outputJSONSync = tB(fse.outputJSONSync);

/**
 * @see {@link fse.emptydirSync}
 */
export const emptydirSync = tB(fse.emptydirSync);
