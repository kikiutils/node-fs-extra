# @kikiutils/fs-extra

[![npm version](https://img.shields.io/npm/v/%40kikiutils%2Ffs-extra)](https://www.npmjs.com/package/@kikiutils/fs-extra)
[![license](https://img.shields.io/npm/l/%40kikiutils%2Ffs-extra)](https://www.npmjs.com/package/@kikiutils/fs-extra)

## Table of contents

- [@kikiutils/fs-extra](#kikiutilsfs-extra)
  - [Table of contents](#table-of-contents)
  - [Description](#description)
  - [Examples](#examples)
    - [rename](#rename)
    - [readJson](#readjson)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Methods](#methods)
    - [Native fs promises](#native-fs-promises)
    - [From **fs-extra** package](#from-fs-extra-package)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)

## Description

When using the native fs or fs-extra functions, usually you only need to know if the operation succeeded, not any details about the error.

This package wraps the native fs and fs-extra functions without using try/catch blocks to prevent errors from stopping execution.

The function that originally returned void will return boolean, true means the execution is successful, and vice versa.

The rest of the functions will return the value they should have returned, or return undefined in case of an error.

## Examples

You can use this package to simplify your code like this:

### rename

Originally used operation:
```typescript
import fse from 'fs-extra';

async function r(o: string, n: string) {
  try {
    await fse.rename(o, n);
    return true;
  } catch (error) { }
  return false;
}

const result = await r(oldPath, newPath);
// true - successfully renamed
// false - an error occurred
```

Use this package:
```typescript
import kFse from '@kikiutils/fs-extra';

const result = await kFse.rename(oldPath, newPath);
// true - successfully renamed
// false - an error occurred
```

### readJson
Originally used operation:
```typescript
import fse from 'fs-extra';

async function rJ(path: string) {
  try {
    return await fse.readJson(path);
  } catch (error) { }
}

const result = await rJ(path);
// Any json data - successfully read
// undefined - an error occurred
```

Use this package:
```typescript
import kFse from '@kikiutils/fs-extra';

const result = await kFse.readJson(path);
// Any json data - successfully read
// undefined - an error occurred
```

## Prerequisites

This package requires NodeJS (version 16 or later) and NPM or other package manager.

[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.

To make sure you have them available on your machine,
try running the following command.

```bash
$ node -v && npm -v
v20.5.1
9.8.1
```

## Installation

**Before installing,** please read the [prerequisites](#prerequisites).

To install and set up the library, run:

```bash
$ npm i @kikiutils/fs-extra     # Npm
$ pnpm add @kikiutils/fs-extra  # Pnpm
$ yarn add @kikiutils/fs-extra  # Yarn
```

If you use typescript, the **@types/fs-extra** package must be installed for full type hinting and checking:
```bash
$ npm i -D @types/fs-extra    # Npm
$ pnpm add -D @types/fs-extra # Pnpm
$ yarn add -D @types/fs-extra # Yarn
```

## Methods

Synchronous versions of functions are appended with 'Sync'.

### Native fs promises
- access
- appendFile
- chmod
- chown
- copyFile
- lchown
- link
- open
- opendir
- rename
- rm
- rmdir
- symlink
- truncate
- unlink
- utimes
- writeFile

### From **fs-extra** package
- copy
- emptyDir
- ensureFile
- ensureDir
- ensureLink
- ensureSymlink
- mkdirp
- mkdirs
- move
- outputFile
- outputJson
- pathExists
- readJson
- remove
- writeJson

## Versioning
This project adheres to [Semantic Versioning](http://semver.org).

For the versions available, see the [versions on npm](https://www.npmjs.com/package/@kikiutils/fs-extra?activeTab=versions).

## Authors

- **kiki-kanri** - [kiki-kanri](https://github.com/kiki-kanri)

## License

[MIT License](LICENSE) © kiki-kanri
