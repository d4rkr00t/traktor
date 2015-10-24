'use strict';

exports.__esModule = true;
exports.getCfgPath = getCfgPath;
exports.read = read;
exports.write = write;
exports.bootstrap = bootstrap;
var CFG_NAME = '.traktor.json';
var CONFIG_BOOTSTRAP = {
  yt_key: '',
  yd_key: ''
};

/**
 * Returns path to tarktor config.
 *
 * @param {Object} imports
 *
 * @returns {String}
 */

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
 * @returns {Promise}
 */

function read(imports) {
  var fs = imports.fs;
  var require = imports.require;

  var cfgPath = getCfgPath(imports);

  return new Promise(function (resolve) {
    fs.access(cfgPath, function (err) {
      if (err) {
        resolve({});
        return;
      }

      resolve(require(cfgPath));
    });
  });
}

function write(opts, imports) {
  var fs = imports.fs;

  return read(imports).then(function (config) {
    var updatedConfig = Object.assign(config, opts);
    var cfgPath = getCfgPath(imports);

    return fs.writeFileSync(cfgPath, JSON.stringify(updatedConfig, ' ', 2));
  });
}

function bootstrap(imports) {
  var fs = imports.fs;

  var cfgPath = getCfgPath(imports);

  return fs.writeFileSync(cfgPath, JSON.stringify(CONFIG_BOOTSTRAP, ' ', 2));
}