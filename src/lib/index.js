import chalk from 'chalk';
import got from 'got';

import options from './options';

export default function init(input, flags) {
  const opts = options(input, flags);

  console.log(opts);
}
