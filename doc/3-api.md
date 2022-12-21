# API Documentation

```js
import { dirtree, PACKAGE_INFO } from '@karmaniverous/dirtree`;
```

## Constants

<dl>
<dt><a href="#PACKAGE_INFO">PACKAGE_INFO</a> : <code><a href="#PackageInfo">PackageInfo</a></code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#dirtree">dirtree([options])</a> ⇒ <code>string</code></dt>
<dd><p>Extracts an ascii tree representing the file structure under a directory path.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#PackageInfo">PackageInfo</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="PACKAGE_INFO"></a>

## PACKAGE\_INFO : [<code>PackageInfo</code>](#PackageInfo)
**Kind**: global constant  
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

<a name="PackageInfo"></a>

## PackageInfo : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| version | <code>string</code> | package version |

