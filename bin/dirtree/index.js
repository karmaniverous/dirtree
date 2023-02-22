#!/usr/bin/env node

import _ from 'lodash';

// Import package exports.
import { dirtree } from '@karmaniverous/dirtree';

// Create CLI.
import { program } from 'commander';

// CLI description.
program.name('dirtree');
program.description('Parses a directory into a nicely-formatted ASCII tree.');

// Define CLI options.
program.option(
  '-a, --attribute <string>',
  'Decorate files with an fs.Stats attribute. https://nodejs.dev/en/api/v19/fs/#fsstats'
);

program.option(
  '-n, --depth <int>',
  'Limit the tree to this depth. Default is unlimited.',
  (value) => (_.isNil(value) ? value : parseInt(value))
);

program.option(
  '-d, --dir <string>',
  'Path to starting directory. Defaults to current working directory.'
);

program.option(
  '-e, --exclude <string>',
  'RegExp pattern to exclude paths from tree.',
  (value) => (value ? new RegExp(value) : undefined)
);

// Parse CLI options from command line.
program.parse();
const { attribute, debug, depth, dir, exclude } = program.opts();

// Execute CLI logic.
console.log(dirtree({ attribute, debug, depth, dir, exclude }));
