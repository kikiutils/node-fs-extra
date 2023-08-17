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

// ensureDir
type EnsureDirParameters = Parameters<typeof fse.ensureDirSync>;
export const ensureDir = tryAndGetBoolean(async (...args: EnsureDirParameters) => await fse.ensureDir(...args));
export const ensureDirSync = tryAndGetBoolean(fse.ensureDirSync);

// ensureLink
export const ensureLink = tryAndGetBoolean(async (...args: Parameters<typeof fse.ensureLinkSync>) => await fse.ensureLink(...args));
export const ensureLinkSync = tryAndGetBoolean(fse.ensureLinkSync);

// ensureSymlink
export const ensureSymlink = tryAndGetBoolean(async (...args: Parameters<typeof fse.ensureSymlinkSync>) => await fse.ensureSymlink(...args));
export const ensureSymlinkSync = tryAndGetBoolean(fse.ensureSymlinkSync);

// mkdirp
export const mkdirp = tryAndGetBoolean(async (...args: EnsureDirParameters) => await fse.mkdirp(...args));
export const mkdirpSync = tryAndGetBoolean(fse.mkdirpSync);

// mkdirs
export const mkdirs = tryAndGetBoolean(async (...args: EnsureDirParameters) => await fse.mkdirs(...args));
export const mkdirsSync = tryAndGetBoolean(fse.mkdirsSync);

// move
type MoveParameters = Parameters<typeof fse.moveSync>;
export const move = tryAndGetBoolean(async (...args: MoveParameters) => await fse.move(...args));
export const moveSync = tryAndGetBoolean(fse.moveSync);

// outputFile
type OutputFileParameters = Parameters<typeof fse.outputFileSync>;
export const outputFile = tryAndGetBoolean(async (...args: OutputFileParameters) => await fse.outputFile(...args));
export const outputFileSync = tryAndGetBoolean(fse.outputFileSync);

// outputJson
type OutputJsonParameters = Parameters<typeof fse.outputJsonSync>;
export const outputJson = tryAndGetBoolean(async (...args: OutputJsonParameters) => await fse.outputJson(...args));
export const outputJsonSync = tryAndGetBoolean(fse.outputJsonSync);

// pathExists
export const pathExists = fse.pathExists;
export const pathExistsSync = fse.pathExistsSync;

// readJson
type ReadJsonParameters = Parameters<typeof fse.readJsonSync>;
export const readJson = tryAndGetData(async (...args: ReadJsonParameters) => await fse.readJson(...args));
export const readJsonSync = tryAndGetData(fse.readJsonSync);

// remove
export const remove = tryAndGetData(async (dir: string) => await fse.remove(dir));
export const removeSync = tryAndGetData(fse.removeSync);

// readJson
type WriteJsonParameters = Parameters<typeof fse.writeJsonSync>;
export const writeJson = tryAndGetData(async (...args: WriteJsonParameters) => await fse.writeJson(...args));
export const writeJsonSync = tryAndGetData(fse.writeJsonSync);
