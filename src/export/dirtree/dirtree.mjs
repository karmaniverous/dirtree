// npm imports
import dtree from 'directory-tree';
import path from 'path';
import treeify from 'treeify';
import { inspect } from 'util';

const extract = ({ attribute, debug, depth, dir = './', exclude }) => {
  const output = [
    dtree(path.resolve(process.env.INIT_CWD ?? './', dir), {
      attributes: ['type', ...(attribute ? [attribute] : [])],
      depth,
      exclude: exclude ? new RegExp(exclude) : undefined,
      normalizePath: true,
    }),
  ];

  if (debug) console.log('extract', inspect(output, false, null));

  return output;
};

const transform = (obj, attribute, debug) => {
  const output = obj.reduce((t, n) => {
    t[n.name + (n.type === 'directory' && !n.children?.length ? '/' : '')] =
      n.children
        ? transform(n.children, attribute)
        : attribute
        ? n[attribute]
        : null;
    return t;
  }, {});

  if (debug) console.log('transform', inspect(output, false, null));

  return output;
};
/**
 * Extracts an ascii tree representing the file structure under a directory path.
 *
 * @function dirtree
 *
 * @param {Object} [options] - Options object.
 * @param {string} [options.attribute] - Decorate files with an fs.Stats attribute. https://nodejs.dev/en/api/v19/fs/#fsstats
 * @param {boolean} [options.debug] - Log intermediate steps to console.
 * @param {number} [options.depth] - Limit the tree to this depth. Default is unlimited.
 * @param {string} [options.dir] - Path to starting directory. Defaults to current working directory.
 * @param {RegExp} [options.exclude] - RegExp pattern to exclude paths from tree.
 *
 * @returns {string} ASCII tree.
 */
export const dirtree = (options = {}) => {
  if (options.debug) console.log('options', inspect(options, false, null));

  const output = treeify.asTree(
    transform(extract(options), options.attribute, options.debug),
    !!options.attribute
  );

  if (options.debug) console.log('output', inspect(output, false, null));

  return output;
};
