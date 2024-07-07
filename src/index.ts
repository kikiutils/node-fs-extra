// @ts-ignore
import type fs from 'node:fs';
// @ts-ignore
import type fse from 'fs-extra';

import * as _additional from './additional';
import * as _fs from './fs';
import * as _fsExtra from './fsExtra';
import { ToWrapFunctionIsUndefinedError } from './wrappers';

export * from './additional';
export * from './fs';
export * from './fsExtra';
export { ToWrapFunctionIsUndefinedError } from './wrappers';

export default {
	..._additional,
	..._fs,
	..._fsExtra,
	ToWrapFunctionIsUndefinedError
};
