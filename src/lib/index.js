import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import got from 'got';
import homedir from 'homedir';

import options from './options';
import config from './config';

export default function init(input, flags) {
  const opts = options(input, flags);
  const conf = config('.traktor', { homedir, path, fs });

  console.log(opts);
}
