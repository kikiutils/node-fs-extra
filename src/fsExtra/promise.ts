import fse from 'fs-extra';

import { pTB, pTD } from '../wrappers';

import type { FseParameters } from './types';

/**
 * @see {@link fse.copy}
 */
export const copy = pTB((...args: [src: string, dest: string, options?: fse.CopyOptions]) => fse.copy(...args));

/**
 * @see {@link fse.move}
 */
export const move = pTB((...args: FseParameters['moveSync']) => fse.move(...args));

/**
 * @see {@link fse.ensureFile}
 */
export const ensureFile = pTB((file: string) => fse.ensureFile(file));

/**
 * @see {@link fse.ensureFile}
 */
export const createFile = ensureFile;

/**
 * @see {@link fse.ensureLink}
 */
export const ensureLink = pTB((...args: FseParameters['ensureLinkSync']) => fse.ensureLink(...args));

/**
 * @see {@link fse.ensureLink}
 */
export const createLink = ensureLink;

/**
 * @see {@link fse.ensureSymlink}
 */
export const ensureSymlink = pTB((...args: FseParameters['ensureSymlinkSync']) => fse.ensureSymlink(...args));

/**
 * @see {@link fse.ensureSymlink}
 */
export const createSymlink = ensureSymlink;

/**
 * @see {@link fse.ensureDir}
 */
export const ensureDir = pTB((...args: FseParameters['ensureDirSync']) => fse.ensureDir(...args));

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
export const outputFile = pTB((...args: FseParameters['outputFileSync']) => fse.outputFile(...args));

/**
 * @see {@link fse.readJson}
 */
export const readJson = pTD(<T = any>(...args: FseParameters['readJsonSync']): Promise<T> => fse.readJson(...args));

/**
 * @see {@link fse.readJson}
 */
export const readJSON = readJson;

/**
 * @see {@link fse.writeJson}
 */
export const writeJson = pTB((...args: FseParameters['writeJsonSync']) => fse.writeJson(...args));

/**
 * @see {@link fse.writeJson}
 */
export const writeJSON = writeJson;

/**
 * @see {@link fse.outputJson}
 */
export const outputJson = pTB((...args: FseParameters['outputJsonSync']) => fse.outputJson(...args));

/**
 * @see {@link fse.outputJson}
 */
export const outputJSON = outputJson;

/**
 * @see {@link fse.remove}
 */
export const remove = pTB((dir: string) => fse.remove(dir));

/**
 * @see {@link fse.emptyDir}
 */
export const emptyDir = pTB((path: string) => fse.emptyDir(path));

/**
 * @see {@link fse.emptyDir}
 */
export const emptydir = emptyDir;
export const pathExists = fse.pathExists;
