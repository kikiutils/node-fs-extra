import type fse from 'fs-extra';
import {
    copy as fseCopy,
    emptyDir as fseEmptyDir,
    ensureDir as fseEnsureDir,
    ensureFile as fseEnsureFile,
    ensureLink as fseEnsureLink,
    ensureSymlink as fseEnsureSymlink,
    move as fseMove,
    outputFile as fseOutputFile,
    outputJson as fseOutputJson,
    pathExists as fsePathExists,
    readJson as fseReadJson,
    remove as fseRemove,
    writeJson as fseWriteJson,
} from 'fs-extra/esm';

import {
    pTB,
    pTD,
} from '../wrappers';

import type { FseParameters } from './types';

/**
 * @see {@link fse.copy}
 */
export const copy = pTB((...args: [src: string, dest: string, options?: fse.CopyOptions]) => fseCopy(...args));

/**
 * @see {@link fse.move}
 */
export const move = pTB((...args: FseParameters['moveSync']) => fseMove(...args));

/**
 * @see {@link fse.ensureFile}
 */
export const ensureFile = pTB((file: string) => fseEnsureFile(file));

/**
 * @see {@link fse.ensureFile}
 */
export const createFile = ensureFile;

/**
 * @see {@link fse.ensureLink}
 */
export const ensureLink = pTB((...args: FseParameters['ensureLinkSync']) => fseEnsureLink(...args));

/**
 * @see {@link fse.ensureLink}
 */
export const createLink = ensureLink;

/**
 * @see {@link fse.ensureSymlink}
 */
export const ensureSymlink = pTB((...args: FseParameters['ensureSymlinkSync']) => fseEnsureSymlink(...args));

/**
 * @see {@link fse.ensureSymlink}
 */
export const createSymlink = ensureSymlink;

/**
 * @see {@link fse.ensureDir}
 */
export const ensureDir = pTB((...args: FseParameters['ensureDirSync']) => fseEnsureDir(...args));

/**
 * @see {@link fse.ensureDir}
 */
export const mkdirp = ensureDir;

/**
 * @see {@link fse.ensureDir}
 */
export const mkdirs = ensureDir;

/**
 * @see {@link fse.outputFile}
 */
export const outputFile = pTB((...args: FseParameters['outputFileSync']) => fseOutputFile(...args));

/**
 * @see {@link fse.readJson}
 */
export const readJson = pTD(<T = any>(...args: FseParameters['readJsonSync']): Promise<T> => fseReadJson(...args));

/**
 * @see {@link fse.writeJson}
 */
export const writeJson = pTB((...args: FseParameters['writeJsonSync']) => fseWriteJson(...args));

/**
 * @see {@link fse.outputJson}
 */
export const outputJson = pTB((...args: FseParameters['outputJsonSync']) => fseOutputJson(...args));

/**
 * @see {@link fse.remove}
 */
export const remove = pTB((dir: string) => fseRemove(dir));

/**
 * @see {@link fse.emptyDir}
 */
export const emptyDir = pTB((path: string) => fseEmptyDir(path));

/**
 * @see {@link fse.emptyDir}
 */
export const emptydir = emptyDir;
export const pathExists = fsePathExists;
