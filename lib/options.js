/**
 * Choose destination language.
 *
 * @param {Object} flags
 * @param {Object} conf
 *
 * @returns {String}
 */
'use strict';

exports.__esModule = true;
exports.destLng = destLng;
exports.srcLng = srcLng;
exports['default'] = options;

function destLng(flags, conf) {
  var en = flags.en;
  var ru = flags.ru;
  var dest = flags.dest;

  if (en) return 'en';
  if (ru) return 'ru';
  if (dest) return dest;

  return conf.dest || 'ru';
}

/**
 * Choose source language.
 *
 * @param {Object} flags
 *
 * @returns {String}
 */

function srcLng(flags) {
  return flags.source || '';
}

/**
 * Make options for translation.
 *
 * @param {Array} input
 * @param {Object} flags
 * @param {Object} conf
 *
 * @returns {Promise}
 */

function options(input, flags, conf) {
  return {
    text: input.join(' '),

    dest: destLng(flags, conf),
    source: srcLng(flags),

    yt_key: conf.yt_key,
    yd_key: conf.yd_key
  };
}