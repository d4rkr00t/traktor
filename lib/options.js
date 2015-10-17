'use strict';

exports.__esModule = true;
exports['default'] = destLng;
exports['default'] = srcLng;
exports['default'] = options;

function destLng(flags) {
  var en = flags.en;
  var ru = flags.ru;
  var dest = flags.dest;

  if (en) return 'en';
  if (ru) return 'ru';
  if (dest) return dest;

  return 'ru';
}

function srcLng(flags) {
  return flags.source || '';
}

function options(input, flags) {
  return {
    text: input.join(' '),
    dest: destLng(flags),
    source: srcLng(flags)
  };
}

module.exports = exports['default'];