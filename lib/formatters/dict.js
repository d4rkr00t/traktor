'use strict';

exports.__esModule = true;
exports['default'] = dictFormatter;
exports.transcription = transcription;
exports.partsOfSpeach = partsOfSpeach;
exports.formatTextAndGender = formatTextAndGender;
exports.formatTrsTitles = formatTrsTitles;
exports.formatTrsMean = formatTrsMean;
exports.formatTrs = formatTrs;

var _lodash = require('lodash');

/**
 * Message formatter for yandex dictionary lookup results.
 *
 * @param {Object} data - api response data
 * @param {Object} opts
 * @param {Object} imports
 *
 * @returns {undefined}
 */

function dictFormatter(data, opts, imports) {
  var chalk = imports.chalk;
  var messages = imports.messages;
  var indentString = imports.indentString;

  var indent = function indent(str, count) {
    return indentString(str, ' ', count ? count + 9 : 9);
  };
  var rows = [transcription(chalk, indent, data), partsOfSpeach(chalk, indent, data)];

  return messages.log(_lodash.compact(rows).join('\n'));
}

/**
 *
 * Sections
 *
 */

/**
 * Formatter for transcription.
 *
 * @param {Object} chalk
 * @param {Function} indent
 * @param {Object} data
 *
 * @returns {String|undefined}
 */

function transcription(chalk, indent, data) {
  var ts = _lodash.get(data, '0.ts');

  if (!ts) return;

  return indent(chalk.grey('[' + ts + ']'));
}

/**
 * Formatter for parts of speach.
 *
 * @param {Object} chalk
 * @param {Function} indent
 * @param {Object} data
 *
 * @returns {String|undefined}
 */

function partsOfSpeach(chalk, indent, data) {
  return _lodash.compact(data.map(function (part) {
    var title = indent(chalk.green(part.pos));
    var trs = part.tr.map(formatTrs.bind(null, chalk, indent)).join('\n');

    return [title, trs].join('\n');
  })).join('\n');
}

/**
 *
 * Sections helpers
 *
 */

/**
 * Formatter for text + gender data.
 *
 * @param {Object} chalk
 * @param {String} text
 * @param {String} gen
 *
 * @returns {String}
 */

function formatTextAndGender(chalk, text, gen) {
  return text + chalk.grey(gen ? ' ' + gen : '');
}

/**
 * Formatter for trs titles.
 *
 * @param {Object} chalk
 * @param {Function} indent
 * @param {Object[]} tr
 * @param {Number} index
 *
 * @returns {String}
 */

function formatTrsTitles(chalk, indent, tr, index) {
  var title = [];

  index = index + 1 + '. ';

  title.push(formatTextAndGender(chalk, tr.text, tr.gen));

  if (tr.syn) {
    tr.syn.forEach(function (syn) {
      return title.push(formatTextAndGender(chalk, syn.text, syn.gen));
    });
  }

  return indent(index + title.join(', '), 3);
}

/**
 * Formatter for parts of speach.
 *
 * @param {Object} chalk
 * @param {Function} indent
 * @param {Object[]} tr
 *
 * @returns {String|undefined}
 */

function formatTrsMean(chalk, indent, tr) {
  var mean = _lodash.pluck(tr.mean, 'text');

  if (_lodash.isEmpty(mean)) return;

  return indent(chalk.dim.yellow('(' + mean.join(', ') + ')'), 6);
}

/**
 * Formatter for 'tr' field in dictionary api response.
 *
 * @param {Object} chalk
 * @param {Function} indent
 * @param {Object[]} tr
 * @param {Number} index
 *
 * @returns {String}
 */

function formatTrs(chalk, indent, tr, index) {
  var title = formatTrsTitles(chalk, indent, tr, index);
  var mean = formatTrsMean(chalk, indent, tr);

  return _lodash.compact([title, mean]).join('\n');
}