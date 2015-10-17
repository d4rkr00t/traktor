'use strict';

exports.__esModule = true;
exports['default'] = init;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _got = require('got');

var _got2 = _interopRequireDefault(_got);

var _homedir = require('homedir');

var _homedir2 = _interopRequireDefault(_homedir);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function init(input, flags) {
  var opts = _options2['default'](input, flags);
  var conf = _config2['default']('.traktor', { homedir: _homedir2['default'], path: _path2['default'], fs: _fs2['default'] });

  console.log(opts);
}

module.exports = exports['default'];