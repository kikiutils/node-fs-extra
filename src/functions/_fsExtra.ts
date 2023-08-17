import { tryAndGetBoolean, tryAndGetData } from '@kikiutils/wrappers';
import fse from 'fs-extra';

// copy
type CopyParameters = [src: string, dest: string, options?: fse.CopyOptions];
type CopySyncParameters = [src: string, dest: string, options?: fse.CopyOptionsSync];
export const copy = tryAndGetBoolean(async (...args: CopyParameters) => await fse.copy(...args));
export const copySync  = tryAndGetBoolean((...args: CopySyncParameters) => fse.copySync(...args));

// emptyDir
export const emptyDir = tryAndGetBoolean(async (path: string) => await fse.emptyDir(path));
export const emptyDirSync = tryAndGetBoolean((path: string) => fse.emptyDirSync(path));

// ensureFile
export const ensureFile = tryAndGetBoolean(async (file: string) => await fse.ensureFile(file));
export const ensureFileSync = tryAndGetBoolean((file: string) => fse.ensureFileSync(file));

// ensureDir
type EnsureDirParameters = Parameters<typeof fse.ensureDirSync>;
export const ensureDir = tryAndGetBoolean(async (...args: EnsureDirParameters) => await fse.ensureDir(...args));
export const ensureDirSync = tryAndGetBoolean((...args: EnsureDirParameters) => fse.ensureDirSync(...args));

// ensureLink
type EnsureLinkParameters = Parameters<typeof fse.ensureLinkSync>;
export const ensureLink = tryAndGetBoolean(async (...args: EnsureLinkParameters) => await fse.ensureLink(...args));
export const ensureLinkSync = tryAndGetBoolean((...args: EnsureLinkParameters) => fse.ensureLinkSync(...args));

// ensureSymlink
type EnsureSymlinkParameters = Parameters<typeof fse.ensureSymlinkSync>;
export const ensureSymlink = tryAndGetBoolean(async (...args: EnsureSymlinkParameters) => await fse.ensureSymlink(...args));
export const ensureSymlinkSync = tryAndGetBoolean((...args: EnsureSymlinkParameters) => fse.ensureSymlinkSync(...args));

// mkdirp
export const mkdirp = tryAndGetBoolean(async (...args: EnsureDirParameters) => await fse.mkdirp(...args));
export const mkdirpSync = tryAndGetBoolean((...args: EnsureDirParameters) => fse.mkdirpSync(...args));

// mkdirs
export const mkdirs = tryAndGetBoolean(async (...args: EnsureDirParameters) => await fse.mkdirs(...args));
export const mkdirsSync = tryAndGetBoolean((...args: EnsureDirParameters) => fse.mkdirsSync(...args));

// move
type MoveParameters = Parameters<typeof fse.moveSync>;
export const move = tryAndGetBoolean(async (...args: MoveParameters) => await fse.move(...args));
export const moveSync = tryAndGetBoolean((...args: MoveParameters) => fse.moveSync(...args));

// outputFile
type OutputFileParameters = Parameters<typeof fse.outputFileSync>;
export const outputFile = tryAndGetBoolean(async (...args: OutputFileParameters) => await fse.outputFile(...args));
export const outputFileSync = tryAndGetBoolean((...args: OutputFileParameters) => fse.outputFileSync(...args));

// outputJson
type OutputJsonParameters = Parameters<typeof fse.outputJsonSync>;
export const outputJson = tryAndGetBoolean(async (...args: OutputJsonParameters) => await fse.outputJson(...args));
export const outputJsonSync = tryAndGetBoolean((...args: OutputJsonParameters) => fse.outputJsonSync(...args));

// pathExists
export const pathExists = fse.pathExists;
export const pathExistsSync = fse.pathExistsSync;

// readJson
type ReadJsonParameters = Parameters<typeof fse.readJsonSync>;
export const readJson = tryAndGetData(async (...args: ReadJsonParameters) => await fse.readJson(...args));
export const readJsonSync = tryAndGetData((...args: ReadJsonParameters) => fse.readJsonSync(...args));

// remove
export const remove = tryAndGetData(async (dir: string) => await fse.remove(dir));
export const removeSync = tryAndGetData((dir: string) => fse.removeSync(dir));

// readJson
type WriteJsonParameters = Parameters<typeof fse.writeJsonSync>;
export const writeJson = tryAndGetData(async (...args: WriteJsonParameters) => await fse.writeJson(...args));
export const writeJsonSync = tryAndGetData((...args: WriteJsonParameters) => fse.writeJsonSync(...args));
