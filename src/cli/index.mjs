#!/usr/bin/env node

import _ from 'lodash';

// Load environment variables.
import dotenv from 'dotenv';
dotenv.config();

// Import package exports.
import dirtree from '../export';

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

// program.option('-b, --debug', 'Log internals.');

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

program.option('-v, --version', 'Display package version.');

// Parse CLI options from command line.
program.parse();
const { attribute, debug, depth, dir, exclude, version } = program.opts();

// Execute CLI logic.
if (version) console.log(process.env.NODE_PACKAGE_VERSION);
else {
  const output = dirtree({ attribute, debug, depth, dir, exclude });

  if (!debug) console.log(output);
}
