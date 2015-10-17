import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import got from 'got';
import homedir from 'homedir';
import _ from 'lodash';

import options from './options';
import * as config from './config';
import chooseCommands from './choose-command';
import Messages from './messages';

import setup from './commands/setup';
import translate from './commands/translate';

const messages = new Messages({ _, chalk, log: ::console.log }); // eslint-disable-line
const imports = { fs, path, got, config, homedir, messages, _ };

/**
 * Runs traktor.
 *
 * @param {Array} input
 * @param {Object} flags
 */
export default function run(input, flags) {
  const conf = config.read(imports);
  const opts = options(input, flags, conf);

  const commands = chooseCommands(flags, opts, [setup, translate]);

  Promise.all(commands.map(c => c.run(opts, imports, flags)))
    .then(::messages.log)
    .catch(::console.error); // eslint-disable-line

  // console.log(opts, flags, conf, commands); // eslint-disable-line
}
