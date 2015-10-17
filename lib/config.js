'use strict';

exports.__esModule = true;
exports.getCfgPath = getCfgPath;
exports.read = read;
exports.write = write;
var CFG_NAME = '.traktor.json';

function getCfgPath(imports) {
  var homedir = imports.homedir;
  var path = imports.path;

  return path.join(homedir(), CFG_NAME);
}

/**
 * Read configuration file from user home dir.
 *
 * @param {Object} imports
 *
 * @returns {Object}
 */

function read(imports) {
  var fs = imports.fs;

  var cfgPath = getCfgPath(imports);

  try {
    fs.accessSync(cfgPath);

    return require(cfgPath);
  } catch (e) {
    return {};
  }
}

function write(opts, imports) {
  var fs = imports.fs;

  var config = read(imports);
  var updatedConfig = Object.assign(config, opts);
  var cfgPath = getCfgPath(imports);

  fs.writeFileSync(cfgPath, JSON.stringify(updatedConfig, ' ', 2));
}