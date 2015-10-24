import fs from 'fs';
import path from 'path';
import proq from 'proq';
import chalk from 'chalk';
import axios from 'axios';
import homedir from 'homedir';
import indentString from 'indent-string';

import options from './options';
import * as config from './config';

import Messages from './messages';
import chooseCommands from './choose-command';
import normalizeFlags from './normalize-flags';

import YandexDictApi from './api/yandex-dict';
import YandexTranslateApi from './api/yandex-translate';

import dict from './commands/dict';
import setup from './commands/setup';
import translate from './commands/translate';
import detectLang from './commands/detect-lang';

import formatterDict from './formatters/dict';
import formatterTranslate from './formatters/translate';
import formatterDetectedLang from './formatters/detected-lang';

const yandexDictApi = new YandexDictApi({ request: axios });
const yandexTranslateApi = new YandexTranslateApi({ request: axios });

const enabledCommands = [setup, detectLang, translate, dict];
const messages = new Messages({ chalk, log: ::console.log }); // eslint-disable-line
const imports = {
  chalk,
  fs,
  path,
  config,
  require,
  homedir,
  messages,
  indentString,
  yandexDictApi,
  yandexTranslateApi,
  request: axios,
  formatters: {
    dict: formatterDict,
    translate: formatterTranslate,
    detectedLang: formatterDetectedLang
  }
};

/**
 * Runs traktor.
 *
 * @param {Array} input
 * @param {Object} flags
 */
export default function run(input, flags) {
  flags = normalizeFlags(flags);
  config
    .read(imports)
    .then(conf => options(input, flags, conf, imports))
    .then(opts => { return { opts, commands: chooseCommands(flags, opts, enabledCommands) }; })
    .then(({ opts, commands }) => proq(commands.map(c => c.run.bind(null, { opts, imports, flags }))))
    .catch(err => console.error(err.stack || err)); // eslint-disable-line
}
