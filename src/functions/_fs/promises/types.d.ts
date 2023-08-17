import fsp from 'fs/promises';

export type FspFunctionName = 'access' | 'appendFile' | 'chmod' | 'chown' | 'copyFile' | 'lchown' | 'link' | 'lstat' | 'mkdir' | 'mkdtemp' | 'open' | 'opendir' | 'readdir' | 'readFile' | 'readlink' | 'realpath' | 'rename' | 'rm' | 'rmdir' | 'stat' | 'symlink' | 'truncate' | 'unlink' | 'utimes' | 'writeFile';
export type FspFunctionsParameters = {
	[K in FspFunctionName]: Parameters<typeof fsp[K]>;
}
