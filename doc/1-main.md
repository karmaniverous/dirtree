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
