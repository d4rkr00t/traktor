#! /usr/bin/env node

import meow from 'meow';
import chalk from 'chalk';
import traktor from './lib/';

const cli = meow({
  pkg: '../package.json',
  help: [
    'Usage',
    '  $ traktor [input]',
    '',
    'Options',
    '  --foo  Lorem ipsum. [Default: false]',
    '',
    'Examples',
    '  $ traktor',
    '  unicorns & rainbows',
    '  $ traktor ponies',
    '  ponies & rainbows'
  ]
});
