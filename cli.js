#! /usr/bin/env node
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _meow = require('meow');

var _meow2 = _interopRequireDefault(_meow);

var _lib = require('./lib/');

var _lib2 = _interopRequireDefault(_lib);

var cli = _meow2['default']({
  help: ['Usage', '  $ trk <input> <options>', '  $ trk --help  shows help', '  $ trk --setup shows configuration information', '', 'Options', '  -d --dest <lang> [Default: ru]', '  -s --source <lang> [Default: auto]', '  --en  Translate to English', '  --ru  Translate to Russian', '  --setup <yandex-api-key>  setup api key for Yandex.Translate']
});

var input = cli.input || [];
var flags = cli.flags || {};

if (!input.length && !flags.setup) {
  console.log(cli.help); // eslint-disable-line
} else {
    _lib2['default'](input, flags);
  }