/**
 * Read configuration file from user home dir.
 *
 * @param {String} name - config file name.
 * @param {Object} imports
 *
 * @returns {Object}
 */
"use strict";

exports.__esModule = true;
exports["default"] = config;

function config(name, imports) {
  var homedir = imports.homedir;
  var path = imports.path;
  var fs = imports.fs;

  var cfgPath = path.join(homedir(), name);

  try {
    fs.accessSync(cfgPath);

    return require(cfgPath);
  } catch (e) {
    return {};
  }
}

module.exports = exports["default"];