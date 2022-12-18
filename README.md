# dirtree

Parses a directory into a nicely-formatted ASCII tree. Includes a CLI.

## An Example

```text
PS C:\Code\dirtree> dirtree -d src -a size
└─ src
   ├─ cli
   │  └─ index.mjs: 1344
   └─ export
      ├─ dirtree
      │  ├─ dirtree.mjs: 2045
      │  └─ dirtree.test.mjs: 303
      └─ index.mjs: 73
```

## CLI Options

```text
Usage: dirtree [options]

Options:
  -a, --attribute <string>  Decorate files with an fs.Stats attribute. https://nodejs.dev/en/api/v19/fs/#fsstats
  -n, --depth <int>         Limit the tree to this depth. Default is unlimited.
  -d, --dir <string>        Path to starting directory. Defaults to current working directory.
  -e, --exclude <string>    RegExp pattern to exclude paths from tree.
  -v, --version             Display package version.
  -h, --help                display help for command
```

## JS API

```js
/**
 * Extracts an ascii tree representing the file structure under a directory path.
 *
 * @function dirtree
 * @param {Object} [options] - Options object.
 * @param {string} [options.attribute] - Decorate files with an fs.Stats attribute. https://nodejs.dev/en/api/v19/fs/#fsstats
 * @param {boolean} [options.debug] - Log intermediate steps to console.
 * @param {number} [options.depth] - Limit the tree to this depth. Default is unlimited.
 * @param {string} [options.dir] - Path to starting directory. Defaults to current working directory.
 * @param {RegExp} [options.exclude] - RegExp pattern to exclude paths from tree.
 * @returns {string} ASCII tree.
 */
```
