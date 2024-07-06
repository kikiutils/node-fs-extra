import type fse from 'fs-extra';

type FunctionName = 'ensureDir' | 'ensureLink' | 'ensureSymlink' | 'move' | 'outputFile' | 'outputJson' | 'readJson' | 'writeJson';
export type FseParameters = { [K in `${FunctionName}Sync`]: Parameters<(typeof fse)[K]> };
