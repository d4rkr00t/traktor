"use strict";

exports.__esModule = true;
exports["default"] = config;

function config(name, imports) {
  var homedir = imports.homedir;
  var path = imports.path;
  var fs = imports.fs;

  var cfgPath = path.join(homedir(), name);

  console.log(cfgPath);
}

module.exports = exports["default"];