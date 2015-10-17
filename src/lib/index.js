import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import got from 'got';
import homedir from 'homedir';

import options from './options';
import config from './config';

/**
 * Init traktor.
 *
 * @param {Array} input
 * @param {Object} flags
 */
export default function init(input, flags) {
  const conf = config('.traktor', { homedir, path, fs });
  const opts = options(input, flags, conf);

  console.log(opts, conf);
}
