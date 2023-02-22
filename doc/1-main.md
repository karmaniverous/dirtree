# dirtree

Parses a directory into a nicely-formatted ASCII tree. Includes a CLI.

To install:

```bash
npm install @karmaniverous/dirtree
```

To import:

```js
import { dirtree } from '@karmaniverous/dirtree`;
```

## An Example

```text
PS C:\> dirtree -d src -a size
└─ src
   ├─ cli
   │  └─ index.mjs: 1344
   └─ export
      ├─ dirtree
      │  ├─ dirtree.mjs: 2045
      │  └─ dirtree.test.mjs: 303
      └─ index.mjs: 73
```
