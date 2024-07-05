# @kikiutils/fs-extra

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

Provides `node:fs`, `node:fs/promise` and `fs-extra` functions wrapped in try-catch.

- [✨ Release Notes](/CHANGELOG.md)

## Description

When using native `node:fs` or `fs-extra` functions, you often care more about the operation's success than the specifics of any error.

This package wraps the native `node:fs`, `node:fs/promises`, and `fs-extra` functions so that you don't need to use try-catch to prevent errors from stopping your program.

The original void-returning functions are wrapped to return true if they succeed and false if they fail.

The other functions return the original data if they succeed, or undefined if they fail.

## Installation

```bash
# Using pnpm
pnpm add @kikiutils/fs-extra

# Using yarn
yarn add @kikiutils/fs-extra

# Using npm
npm i @kikiutils/fs-extra

# Using bun
bun add @kikiutils/fs-extra
```

## Environmental Requirements

- ESM only
- NodeJS 18 or higher

## Functions

You can use most of the functions exported from the native `node:fs`, `node:fs/promises`, and `fs-extra` packages.

However, all functions that do not end with "Sync" return a promise and do not accept callback arguments.

This is because with callbacks, errors are passed into the callback, which makes no sense when using wrappers.

If you need to use callbacks, import them from the original package.

- [node:fs-promises-api](https://nodejs.org/api/fs.html#promises-api)
- [node:fs-synchronous-api](https://nodejs.org/api/fs.html#synchronous-api)
- [fs-extra](https://www.npmjs.com/package/fs-extra)

### Additional

The following functions all have corresponding sync versions.

- `getFileSize` - Uses `stat` to get the file size.
- `pathIsBlockDevice` - Uses `stat` to check if a path is a block device.
- `pathIsCharacterDevice` - Uses `stat` to check if a path is a character device.
- `pathIsDirectory`, `pathIsDir` - Uses `stat` to check if a path is a directory.
- `pathIsFIFO` - Uses `stat` to check if a path is a FIFO (named pipe).
- `pathIsFile` - Uses `stat` to check if a path is a file.
- `pathIsSocket` - Uses `stat` to check if a path is a socket.
- `pathIsSymbolicLink` - Uses `stat` to check if a path is a symbolic link.
- `readFileToBlob` - Reads a file and returns its contents as a Blob.

### Not wrapped

Deprecated functions are not wrapped.

These functions do not need to be wrapped and have similar names but different functionalities. To avoid confusion, please import them directly from `node:fs` or `node:fs/promises`:

- fs.watch
- fs.watchFile
- fs.promise.watch

## Usage


**If the function being used does not have a corresponding functionality due to differences in the environment (such as NodeJS version, deno, or bun), a `ToWrapFunctionIsUndefinedError` will be thrown directly when it is used.**

```typescript
import kFse from '@kikiutils/fs-extra';

const data = await kFse.readJson(path);
// Any json data - successfully read
// undefined - an error occurred

const result = await kFse.rename(oldPath, newPath);
// true - successfully renamed
// false - an error occurred
```

## License

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@kikiutils/fs-extra/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@kikiutils/fs-extra

[npm-downloads-src]: https://img.shields.io/npm/dm/@kikiutils/fs-extra.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@kikiutils/fs-extra

[license-src]: https://img.shields.io/npm/l/@kikiutils/fs-extra.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://github.com/kiki-kanri/kikiutils-node-fs-extra/blob/main/LICENSE
