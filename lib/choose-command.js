/**
 * Choose commands which method check returns true for given mix of flags and opts.
 *
 * @param {Object} flags
 * @param {Object} opts
 * @param {Object[]} commands
 *
 * @returns {Object[]} filtered and sorted commands
 */
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