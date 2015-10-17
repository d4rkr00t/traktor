'use strict';

exports.__esModule = true;
exports['default'] = run;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

var _config = require('./config');

var config = _interopRequireWildcard(_config);

var _chooseCommand = require('./choose-command');

var _chooseCommand2 = _interopRequireDefault(_chooseCommand);

var _messages = require('./messages');

var _messages2 = _interopRequireDefault(_messages);

var _commandsSetup = require('./commands/setup');

var _commandsSetup2 = _interopRequireDefault(_commandsSetup);

var _commandsTranslate = require('./commands/translate');

var _commandsTranslate2 = _interopRequireDefault(_commandsTranslate);

var messages = new _messages2['default']({ _: _lodash2['default'], chalk: _chalk2['default'], log: console.log.bind(console) }); // eslint-disable-line
var imports = { fs: _fs2['default'], path: _path2['default'], got: _got2['default'], config: config, homedir: _homedir2['default'], messages: messages, _: _lodash2['default'] };

/**
 * Runs traktor.
 *
 * @param {Array} input
 * @param {Object} flags
 */

function run(input, flags) {
  var conf = config.read(imports);
  var opts = _options2['default'](input, flags, conf);

  var commands = _chooseCommand2['default'](flags, opts, [_commandsSetup2['default'], _commandsTranslate2['default']]);

  Promise.all(commands.map(function (c) {
    return c.run(opts, imports, flags);
  })).then(messages.log.bind(messages))['catch'](console.error.bind(console)); // eslint-disable-line

  // console.log(opts, flags, conf, commands); // eslint-disable-line
}

module.exports = exports['default'];