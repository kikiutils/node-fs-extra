# @kikiutils/fs-extra

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

Wraps `node:fs`, `node:fs/promises`, and `fs-extra` functions with try-catch, returning success/failure indicators. Includes additional file and path utilities.

- [✨ Release Notes](./CHANGELOG.md)

## Features

- 🛡️ Wraps `node:fs`, `node:fs/promises`, and `fs-extra` functions with try-catch for error prevention
- ✔️ Returns `true` on success and `false` on failure for functions that originally return void
- 📊 Returns data on success and `undefined` on failure for functions that originally return data
- 🌐 Provides support for most `node:fs`, `node:fs/promises`, and `fs-extra` functions
- 🔧 Additional utility functions for file and path operations

## Environmental Requirements

- Node.js version 18 or higher

## Installation

Add dependency (example using pnpm).

```bash
pnpm add @kikiutils/fs-extra
```

You can also use yarn, npm, or bun to add the dependency.

That's it! You're ready to use this package in your project. Check out the [usage instructions](#usage) below ✨.

## Usage

When using `node:fs`, `node:fs/promises`, or `fs-extra` functions, you may only care about whether the operation succeeds, not the reason for any errors.

This package wraps these functions with try-catch to prevent errors from stopping the entire program.

Functions that originally return void now return `true` on success and `false` on failure.

Functions that originally return data now return the data on success and `undefined` on failure.

> [!IMPORTANT]
> If the function you are executing does not have a corresponding feature in the runtime, it will throw a `ToWrapFunctionIsUndefinedError` error.

```typescript
import kFse, { rename } from '@kikiutils/fs-extra';

const data = await kFse.readJson(path);
// Any json data - successfully read
// undefined - an error occurred

const result = await rename(oldPath, newPath);
// true - successfully renamed
// false - an error occurred
```

See the description below to find out which functions are available.

## Available Functions

You can use most of the functions provided by `node:fs`, `node:fs/promises`, and `fs-extra`, but all functions that do not end with "Sync" will return a Promise.

All functions do not have a callback parameter because errors are passed to the callback if used.

If you need to use the callback functionality, please import and use the functions directly from the original package.

- [node:fs-promises-api](https://nodejs.org/api/fs.html#promises-api)
- [node:fs-synchronous-api](https://nodejs.org/api/fs.html#synchronous-api)
- [fs-extra](https://www.npmjs.com/package/fs-extra)

### Additional Functions

The following functions have corresponding sync versions.

- getFileSize - Uses `stat` to get the file size.
- pathIsBlockDevice - Uses `stat` to check if a path is a block device.
- pathIsCharacterDevice - Uses `stat` to check if a path is a character device.
- pathIsDirectory, pathIsDir - Uses `stat` to check if a path is a directory.
- pathIsFIFO - Uses `stat` to check if a path is a FIFO (named pipe).
- pathIsFile - Uses `stat` to check if a path is a file.
- pathIsSocket - Uses `stat` to check if a path is a socket.
- pathIsSymbolicLink - Uses `stat` to check if a path is a symbolic link.
- readFileToBlob - Reads a file and returns its contents as a Blob.

### Unexported Functions

Deprecated functions are not exported.

The following functions do not need to be wrapped with try-catch. If you need to use them, please import them directly from `node:fs` or `node:fs/promises`:

- fs.watch
- fs.watchFile
- fs.promise.watch

## License

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@kikiutils/fs-extra/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@kikiutils/fs-extra

[npm-downloads-src]: https://img.shields.io/npm/dm/@kikiutils/fs-extra.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@kikiutils/fs-extra

[license-src]: https://img.shields.io/npm/l/@kikiutils/fs-extra.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://github.com/kiki-kanri/kikiutils-node-fs-extra/blob/main/LICENSE
