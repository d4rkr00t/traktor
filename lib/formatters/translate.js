'use strict';

exports.__esModule = true;
exports['default'] = translateFormatter;

function translateFormatter(data, opts, imports) {
  var chalk = imports.chalk;
  var result = data.text;
  var lang = data.lang;
  var orig = opts.text;

  return chalk.grey('[' + lang + ']  ') + chalk.cyan(orig) + '  →  ' + chalk.bold.green(result);
}

module.exports = exports['default'];