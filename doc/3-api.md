# API Documentation

```js
import dirtree from '@karmaniverous/dirtree`;
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

