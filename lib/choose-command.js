"use strict";

exports.__esModule = true;
exports["default"] = chooseCommands;

function chooseCommands(flags, opts, commands) {
  return commands.filter(function (command) {
    return command.check(flags, opts);
  }).sort(function (ca, cb) {
    return ca.pos > cb.pos ? 1 : ca.pos < cb.pos ? -1 : 0;
  }); // eslint-disable-line
}

module.exports = exports["default"];