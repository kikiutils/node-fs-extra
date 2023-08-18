import fse from 'fs-extra';

import { tB, tD } from '../../wrappers';
import { FseParameters } from './types';

// Get boolean
export const copy = tB(async (...args: [src: string, dest: string, options?: fse.CopyOptions]) => await fse.copy(...args));
export const emptyDir = tB(async (path: string) => await fse.emptyDir(path));
export const ensureDir = tB(async (...args: FseParameters['ensureDirSync']) => await fse.ensureDir(...args));
export const ensureFile = tB(async (file: string) => await fse.ensureFile(file));
export const ensureLink = tB(async (...args: FseParameters['ensureLinkSync']) => await fse.ensureLink(...args));
export const ensureSymlink = tB(async (...args: FseParameters['ensureSymlinkSync']) => await fse.ensureSymlink(...args));
export const mkdirp = ensureDir;
export const mkdirs = ensureDir;
export const move = tB(async (...args: FseParameters['moveSync']) => await fse.move(...args));
export const outputFile = tB(async (...args: FseParameters['outputFileSync']) => await fse.outputFile(...args));
export const outputJSON = tB(async (...args: FseParameters['outputJSONSync']) => await fse.outputJSON(...args));
export const outputJson = tB(async (...args: FseParameters['outputJsonSync']) => await fse.outputJson(...args));
export const remove = tB(async (dir: string) => await fse.remove(dir));
export const writeJson = tB(async (...args: FseParameters['writeJsonSync']) => await fse.writeJson(...args));

// Get data
export const readJson = tD(async (...args: FseParameters['readJsonSync']) => await fse.readJson(...args));

// Original functions
export { pathExists } from 'fs-extra';
