#! /usr/bin/env node
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _meow = require('meow');

var _meow2 = _interopRequireDefault(_meow);

var _lib = require('./lib/');

var _lib2 = _interopRequireDefault(_lib);

var cli = _meow2['default']({
  help: ['Usage', '  $ trk <input> <options>', '  $ trk --help  shows help', '', 'Options', '  -d --dest <lang> [Default: ru]', '  -s --source <lang> [Default: auto]', '  --en  Translate to English', '  --ru  Translate to Russian', '  --setup <yandex-api-key>  setup api key for Yandex.Translate']
});

if (!cli.input.length) {
  console.log(cli.help);
} else {
  var input = cli.input || [];
  var flags = cli.flags || {};

  _lib2['default'](input, flags);
}