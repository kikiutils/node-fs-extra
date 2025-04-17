// eslint-disable-next-line unused-imports/no-unused-imports
import type * as fse from 'fs-extra';
import {
    copySync as fseCopySync,
    emptyDirSync as fseEmptyDirSync,
    ensureDirSync as fseEnsureDirSync,
    ensureFileSync as fseEnsureFileSync,
    ensureLinkSync as fseEnsureLinkSync,
    ensureSymlinkSync as fseEnsureSymlinkSync,
    moveSync as fseMoveSync,
    outputFileSync as fseOutputFileSync,
    outputJsonSync as fseOutputJsonSync,
    pathExistsSync as fsePathExistsSync,
    readJsonSync as fseReadJsonSync,
    removeSync as fseRemoveSync,
    writeJsonSync as fseWriteJsonSync,
} from 'fs-extra/esm';

import {
    tB,
    tD,
} from '../wrappers';

import type { FseParameters } from './types';

/**
 * @see {@link fse.copySync}
 */
export const copySync = tB(fseCopySync);

/**
 * @see {@link fse.moveSync}
 */
export const moveSync = tB(fseMoveSync);

/**
 * @see {@link fse.ensureFileSync}
 */
export const ensureFileSync = tB(fseEnsureFileSync);

/**
 * @see {@link fse.ensureLinkSync}
 */
export const ensureLinkSync = tB(fseEnsureLinkSync);

/**
 * @see {@link fse.ensureSymlinkSync}
 */
export const ensureSymlinkSync = tB(fseEnsureSymlinkSync);

/**
 * @see {@link fse.ensureDirSync}
 */
export const ensureDirSync = tB(fseEnsureDirSync);

/**
 * @see {@link fse.outputFileSync}
 */
export const outputFileSync = tB(fseOutputFileSync);

/**
 * @see {@link fse.outputJsonSync}
 */
export const outputJsonSync = tB(fseOutputJsonSync);

/**
 * @see {@link fse.removeSync}
 */
export const removeSync = tB(fseRemoveSync);

/**
 * @see {@link fse.emptyDirSync}
 */
export const emptyDirSync = tB(fseEmptyDirSync);

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
export const readJsonSync = tD(<T = any>(...args: FseParameters['readJsonSync']): T => fseReadJsonSync(...args));

/**
 * @see {@link fse.writeJsonSync}
 */
export const writeJsonSync = tB(fseWriteJsonSync);

/**
 * @see {@link fse.emptyDirSync}
 */
export const emptydirSync = emptyDirSync;
export const pathExistsSync = fsePathExistsSync;
