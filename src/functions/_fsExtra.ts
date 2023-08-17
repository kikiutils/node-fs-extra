import { tryAndGetBoolean, tryAndGetData } from '@kikiutils/wrappers';
import fse from 'fs-extra';

// copy
type CopyParameters = [src: string, dest: string, options?: fse.CopyOptions];
export const copy = tryAndGetBoolean(async (...args: CopyParameters) => await fse.copy(...args));
export const copySync  = tryAndGetBoolean(fse.copySync);

// emptyDir
export const emptyDir = tryAndGetBoolean(async (path: string) => await fse.emptyDir(path));
export const emptyDirSync = tryAndGetBoolean(fse.emptyDirSync);

// ensureFile
export const ensureFile = tryAndGetBoolean(async (file: string) => await fse.ensureFile(file));
export const ensureFileSync = tryAndGetBoolean(fse.ensureFileSync);

// ensureDir, mkdirp, mkdirs
type EnsureDirParameters = Parameters<typeof fse.ensureDirSync>;
export const ensureDir = tryAndGetBoolean(async (...args: EnsureDirParameters) => await fse.ensureDir(...args));
export const ensureDirSync = tryAndGetBoolean(fse.ensureDirSync);

export const mkdirp = ensureDir;
export const mkdirpSync = ensureDirSync;

export const mkdirs = ensureDir;
export const mkdirsSync = ensureDirSync;

// ensureLink
export const ensureLink = tryAndGetBoolean(async (...args: Parameters<typeof fse.ensureLinkSync>) => await fse.ensureLink(...args));
export const ensureLinkSync = tryAndGetBoolean(fse.ensureLinkSync);

// ensureSymlink
export const ensureSymlink = tryAndGetBoolean(async (...args: Parameters<typeof fse.ensureSymlinkSync>) => await fse.ensureSymlink(...args));
export const ensureSymlinkSync = tryAndGetBoolean(fse.ensureSymlinkSync);

// move
export const move = tryAndGetBoolean(async (...args: Parameters<typeof fse.moveSync>) => await fse.move(...args));
export const moveSync = tryAndGetBoolean(fse.moveSync);

// outputFile
export const outputFile = tryAndGetBoolean(async (...args: Parameters<typeof fse.outputFileSync>) => await fse.outputFile(...args));
export const outputFileSync = tryAndGetBoolean(fse.outputFileSync);

// outputJson
export const outputJson = tryAndGetBoolean(async (...args: Parameters<typeof fse.outputJsonSync>) => await fse.outputJson(...args));
export const outputJsonSync = tryAndGetBoolean(fse.outputJsonSync);

// pathExists
export const pathExists = fse.pathExists;
export const pathExistsSync = fse.pathExistsSync;

// readJson
type ReadJsonParameters = Parameters<typeof fse.readJsonSync>;
export const readJson = tryAndGetData(async (...args: ReadJsonParameters) => await fse.readJson(...args));
export const readJsonSync = tryAndGetData(fse.readJsonSync);

// remove
export const remove = tryAndGetBoolean(async (dir: string) => await fse.remove(dir));
export const removeSync = tryAndGetBoolean(fse.removeSync);

// readJson
export const writeJson = tryAndGetBoolean(async (...args: Parameters<typeof fse.writeJsonSync>) => await fse.writeJson(...args));
export const writeJsonSync = tryAndGetBoolean(fse.writeJsonSync);
