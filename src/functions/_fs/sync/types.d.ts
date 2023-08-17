import fs from 'fs';

import { FspFunctionName } from '../promises/types';

export type FsFunctionName = `${FspFunctionName}Sync`;
export type FsFunctionsParameters = {
	[K in FsFunctionName]: Parameters<typeof fs[K]>;
}
