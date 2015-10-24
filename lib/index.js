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

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _homedir = require('homedir');

var _homedir2 = _interopRequireDefault(_homedir);

var _proq = require('proq');

var _proq2 = _interopRequireDefault(_proq);

var _indentString = require('indent-string');

var _indentString2 = _interopRequireDefault(_indentString);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

var _config = require('./config');

var config = _interopRequireWildcard(_config);

var _chooseCommand = require('./choose-command');

var _chooseCommand2 = _interopRequireDefault(_chooseCommand);

var _messages = require('./messages');

var _messages2 = _interopRequireDefault(_messages);

var _apiYandexTranslate = require('./api/yandex-translate');

var _apiYandexTranslate2 = _interopRequireDefault(_apiYandexTranslate);

var _apiYandexDict = require('./api/yandex-dict');

var _apiYandexDict2 = _interopRequireDefault(_apiYandexDict);

var _commandsSetup = require('./commands/setup');

var _commandsSetup2 = _interopRequireDefault(_commandsSetup);

var _commandsTranslate = require('./commands/translate');

var _commandsTranslate2 = _interopRequireDefault(_commandsTranslate);

var _commandsDetectLang = require('./commands/detect-lang');

var _commandsDetectLang2 = _interopRequireDefault(_commandsDetectLang);

var _commandsDict = require('./commands/dict');

var _commandsDict2 = _interopRequireDefault(_commandsDict);

var _formattersTranslate = require('./formatters/translate');

var _formattersTranslate2 = _interopRequireDefault(_formattersTranslate);

var _formattersDetectedLang = require('./formatters/detected-lang');

var _formattersDetectedLang2 = _interopRequireDefault(_formattersDetectedLang);

var _formattersDict = require('./formatters/dict');

var _formattersDict2 = _interopRequireDefault(_formattersDict);

var yandexTranslateApi = new _apiYandexTranslate2['default']({ request: _axios2['default'] });
var yandexDictApi = new _apiYandexDict2['default']({ request: _axios2['default'] });

var enabledCommands = [_commandsSetup2['default'], _commandsDetectLang2['default'], _commandsTranslate2['default'], _commandsDict2['default']];
var messages = new _messages2['default']({ chalk: _chalk2['default'], log: console.log.bind(console) }); // eslint-disable-line
var imports = {
  chalk: _chalk2['default'],
  fs: _fs2['default'],
  path: _path2['default'],
  config: config,
  homedir: _homedir2['default'],
  messages: messages,
  indentString: _indentString2['default'],
  yandexTranslateApi: yandexTranslateApi,
  yandexDictApi: yandexDictApi,
  request: _axios2['default'],
  formatters: {
    translate: _formattersTranslate2['default'],
    detectedLang: _formattersDetectedLang2['default'],
    dict: _formattersDict2['default']
  }
};

/**
 * Runs traktor.
 *
 * @param {Array} input
 * @param {Object} flags
 */

function run(input, flags) {
  config.read(imports).then(function (conf) {
    return _options2['default'](input, flags, conf, imports);
  }).then(function (opts) {
    return { opts: opts, commands: _chooseCommand2['default'](flags, opts, enabledCommands) };
  }).then(function (_ref) {
    var opts = _ref.opts;
    var commands = _ref.commands;
    return _proq2['default'](commands.map(function (c) {
      return c.run.bind(null, { opts: opts, imports: imports, flags: flags });
    }));
  })['catch'](function (err) {
    return console.error(err.stack || err);
  }); // eslint-disable-line
}

module.exports = exports['default'];