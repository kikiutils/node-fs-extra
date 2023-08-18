import { tryAndGetBoolean, tryAndGetData } from '@kikiutils/wrappers';
import fse from 'fs-extra';

import { FseParameters } from './types';

// Get boolean
export const copy = tryAndGetBoolean(async (...args: [src: string, dest: string, options?: fse.CopyOptions]) => await fse.copy(...args));
export const emptyDir = tryAndGetBoolean(async (path: string) => await fse.emptyDir(path));
export const ensureFile = tryAndGetBoolean(async (file: string) => await fse.ensureFile(file));
export const ensureDir = tryAndGetBoolean(async (...args: FseParameters['ensureDirSync']) => await fse.ensureDir(...args));
export const mkdirp = ensureDir;
export const mkdirs = ensureDir;
export const ensureLink = tryAndGetBoolean(async (...args: FseParameters['ensureLinkSync']) => await fse.ensureLink(...args));
export const ensureSymlink = tryAndGetBoolean(async (...args: FseParameters['ensureSymlinkSync']) => await fse.ensureSymlink(...args));
export const move = tryAndGetBoolean(async (...args: FseParameters['moveSync']) => await fse.move(...args));
export const outputFile = tryAndGetBoolean(async (...args: FseParameters['outputFileSync']) => await fse.outputFile(...args));
export const outputJson = tryAndGetBoolean(async (...args: FseParameters['outputJsonSync']) => await fse.outputJson(...args));
export const pathExists = fse.pathExists;
export const remove = tryAndGetBoolean(async (dir: string) => await fse.remove(dir));
export const writeJson = tryAndGetBoolean(async (...args: FseParameters['writeJsonSync']) => await fse.writeJson(...args));

// Get data
export const readJson = tryAndGetData(async (...args: FseParameters['readJsonSync']) => await fse.readJson(...args));
