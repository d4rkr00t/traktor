"use strict";

exports.__esModule = true;
exports["default"] = detectedLangFormatter;

function detectedLangFormatter(lang, opts, imports) {
  var chalk = imports.chalk;
  var messages = imports.messages;

  return messages.log(chalk.grey("source:  ") + lang);
}

module.exports = exports["default"];