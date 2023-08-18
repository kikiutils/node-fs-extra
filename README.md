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
  - [Functions](#functions)
    - [Not exported](#not-exported)
    - [Overloads types](#overloads-types)
    - [Will be affected by the node version](#will-be-affected-by-the-node-version)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)

## Description

When using native fs or fs-extra functions, you often care more about the operation's success than the specifics of any error.

This package wraps the native fs and fs-extra functions without using try/catch blocks to prevent errors from stopping execution.

The function that originally returned void will return boolean, true indicates successful execution, and false indicates failure.

The rest of the functions will return the value they should have returned, or return undefined in case of an error.

## Examples

You can simplify your code using this package as follows:

### readJson

Original approach:

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

Using this package:

```typescript
import kFse from '@kikiutils/fs-extra';

const result = await kFse.readJson(path);
// Any json data - successfully read
// undefined - an error occurred
```

### rename

Original approach:

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

Using this package:

```typescript
import kFse from '@kikiutils/fs-extra';

const result = await kFse.rename(oldPath, newPath);
// true - successfully renamed
// false - an error occurred
```

## Prerequisites

This package requires Node v16 or later and NPM, although other package managers can also be used.

**However, please be aware that [some functions may be affected](#will-be-affected-by-the-node-version) by the Node version.**

[Node](http://nodejs.org/) are really easy to install.

To check your installed versions, run the following command.

```bash
$ node -v && npm -v
v20.5.1
9.8.1
```

## Installation

**Before installing,** please read the [prerequisites](#prerequisites).

To install and use this package, run:

```bash
$ npm i @kikiutils/fs-extra     # Npm
$ pnpm add @kikiutils/fs-extra  # Pnpm
$ yarn add @kikiutils/fs-extra  # Yarn
```

For full type hinting and checking in a development environment, install the @types/fs-extra package:

```bash
$ npm i -D @types/fs-extra    # Npm
$ pnpm add -D @types/fs-extra # Pnpm
$ yarn add -D @types/fs-extra # Yarn
```

## Functions

You can use most of the functions exported from native fs, fs/promises and fs-extra.

- [node:fs-promises-api](https://nodejs.org/api/fs.html#promises-api)
- [node:fs-synchronous-api](https://nodejs.org/api/fs.html#synchronous-api)
- [fs-extra](https://www.npmjs.com/package/fs-extra)

### Not exported

Deprecated functions are not exported.

These functions don't need wrapping. For clarity, directly import them from fs or fs/promises:

- fs.watch
- fs.watchFile
- fs.promise.watch

### Overloads types

The overloaded types for these functions have been overridden.

Please note that the current type hints may not be entirely accurate. Corrections will be made in future updates.

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

### Will be affected by the node version

`fs.cpSync` and `fsp.cp` are available starting from Node v16.7.0.

`fs.statfsSync` and `fsp.statfs` are available starting from Node v18.15.0 up to but not including v19, as well as v19.6.0 and later.

Avoid using these functions if your Node version falls outside the specified ranges.

## Versioning

We adhere to [Semantic Versioning](http://semver.org) for this project.

For the versions available, see the [versions on npm](https://www.npmjs.com/package/@kikiutils/fs-extra?activeTab=versions).

## Authors

- **kiki-kanri** - [kiki-kanri](https://github.com/kiki-kanri)

## License

[MIT License](LICENSE) © kiki-kanri
