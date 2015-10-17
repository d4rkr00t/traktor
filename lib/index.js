'use strict';

exports.__esModule = true;
exports['default'] = init;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _got = require('got');

var _got2 = _interopRequireDefault(_got);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

function init(input, flags) {
  var opts = _options2['default'](input, flags);

  console.log(opts);
}

module.exports = exports['default'];