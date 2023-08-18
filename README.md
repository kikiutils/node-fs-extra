# @kikiutils/fs-extra

[![npm version](https://img.shields.io/npm/v/%40kikiutils%2Ffs-extra)](https://www.npmjs.com/package/@kikiutils/fs-extra)
[![license](https://img.shields.io/npm/l/%40kikiutils%2Ffs-extra)](https://www.npmjs.com/package/@kikiutils/fs-extra)

## Table of contents

- [@kikiutils/fs-extra](#kikiutilsfs-extra)
  - [Table of contents](#table-of-contents)
  - [Description](#description)
  - [Examples](#examples)
    - [readJson](#readjson)
    - [rename](#rename)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Methods](#methods)
    - [Functions not exported](#functions-not-exported)
    - [Overloads types](#overloads-types)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)

## Description

When using native fs or fs-extra functions, often you're more concerned with whether the operation succeeded than with the specifics of any error.

This package wraps the native fs and fs-extra functions without using try/catch blocks to prevent errors from stopping execution.

The function that originally returned void will return boolean, true means the execution is successful, and vice versa.

The rest of the functions will return the value they should have returned, or return undefined in case of an error.

## Examples

You can simplify your code using this package as follows:

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

## Prerequisites

This package requires NodeJS (version 16 or later) and NPM, though other package managers can also be used.

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

For full type hinting and checking in a development environment, ensure the @types/fs-extra package is installed:

```bash
$ npm i -D @types/fs-extra    # Npm
$ pnpm add -D @types/fs-extra # Pnpm
$ yarn add -D @types/fs-extra # Yarn
```

## Methods

You can use most of the functions exported from native fs, fs/promises, and fs-extra.

- [node:fs-promises-api](https://nodejs.org/api/fs.html#promises-api)
- [node:fs-synchronous-api](https://nodejs.org/api/fs.html#synchronous-api)
- [fs-extra](https://www.npmjs.com/package/fs-extra)

### Functions not exported

Deprecated functions have no export.

These methods don't require wrapping. For clarity, directly import them from fs or fs/promises:

- fs.watch
- fs.watchFile
- fs.promise.watch

### Overloads types

The overloaded types for these functions have been overridden. Note that the current type hints may not be entirely accurate; corrections will be made in future updates.

- fstat
- fstatSync
- lstat
- lstatSync
- mkdir
- mkdirSync
- mkdtemp
- mkdtempSync
- read
- readFile
- readFileSync
- readSync
- readdir
- readdirSync
- readlink
- readlinkSync
- realpath
- realpathSync
- stat
- statSync
- statfs
- statfsSync
- write
- writeSync

## Versioning
We adhere to [Semantic Versioning](http://semver.org) for this project.

For the versions available, see the [versions on npm](https://www.npmjs.com/package/@kikiutils/fs-extra?activeTab=versions).

## Authors

- **kiki-kanri** - [kiki-kanri](https://github.com/kiki-kanri)

## License

[MIT License](LICENSE) © kiki-kanri
