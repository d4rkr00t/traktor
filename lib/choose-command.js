"use strict";

exports.__esModule = true;
exports["default"] = chooseCommands;

function chooseCommands(flags, opts, commands) {
  return commands.filter(function (command) {
    return command.check(flags, opts);
  });
}

module.exports = exports["default"];