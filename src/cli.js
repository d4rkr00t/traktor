#! /usr/bin/env node

import meow from 'meow';
import traktor from './lib/';

const cli = meow({
  help: [
    'Usage',
    '  $ trk <input> <options>',
    '  $ trk --help  shows help',
    '  $ trk --setup shows configuration information',
    '',
    'Options',
    '  -d --dest <lang> [Default: ru]',
    '  -s --source <lang> [Default: auto]',
    '  --en  Translate to English',
    '  --ru  Translate to Russian',
    '  --setup <yandex-api-key>  setup api key for Yandex.Translate'
  ]
});

const input = cli.input || [];
const flags = cli.flags || {};

if (!input.length && !flags.setup) {
  console.log(cli.help); // eslint-disable-line
} else {
  traktor(input, flags);
}
