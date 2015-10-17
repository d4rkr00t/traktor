#! /usr/bin/env node

import meow from 'meow';
import traktor from './lib/';

const cli = meow({
  help: [
    'Usage',
    '  $ trk <input> <options>',
    '  $ trk --help  shows help',
    '',
    'Options',
    '  -d --dest <lang> [Default: ru]',
    '  -s --source <lang> [Default: auto]',
    '  --en  Translate to English',
    '  --ru  Translate to Russian',
    '  --setup <yandex-api-key>  setup api key for Yandex.Translate'
  ]
});

if (!cli.input.length) {
  console.log(cli.help);
} else {
  const input = cli.input || [];
  const flags = cli.flags || {};

  traktor(input, flags);
}
