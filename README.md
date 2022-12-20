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

# Command Line Interface

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

# API Documentation

```js
import { dirtree } from '@karmaniverous/dirtree`;
```

<a name="dirtree"></a>

## dirtree([options]) ⇒ <code>string</code>
Extracts an ascii tree representing the file structure under a directory path.

**Kind**: global function  
**Returns**: <code>string</code> - ASCII tree.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Options object. |
| [options.attribute] | <code>string</code> | Decorate files with an fs.Stats attribute. https://nodejs.dev/en/api/v19/fs/#fsstats |
| [options.debug] | <code>boolean</code> | Log intermediate steps to console. |
| [options.depth] | <code>number</code> | Limit the tree to this depth. Default is unlimited. |
| [options.dir] | <code>string</code> | Path to starting directory. Defaults to current working directory. |
| [options.exclude] | <code>RegExp</code> | RegExp pattern to exclude paths from tree. |


---

See more great templates and other tools on
[my GitHub Profile](https://github.com/karmaniverous)!
