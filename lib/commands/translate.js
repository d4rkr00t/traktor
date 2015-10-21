'use strict';

exports.__esModule = true;

var _lodash = require('lodash');

var API = 'https://translate.yandex.net/api/v1.5/tr.json/translate';

exports['default'] = {
  name: 'translate',
  pos: 10,

  run: function run(opts, imports) {
    var text = opts.text;
    var dest = opts.dest;
    var src = opts.src;
    var key = opts.apiKey;
    var request = imports.request;
    var translate = imports.formatters.translate;

    return request.get(API, {
      params: {
        key: key,
        text: text,
        lang: _lodash.compact([src, dest]).join('-')
      }
    }).then(function (res) {
      return res.data;
    }).then(function (data) {
      return translate(data, opts, imports);
    });
  },

  check: function check(flags, opts) {
    if (!opts.apiKey) return false;
    if (!opts.text) return false;
    if (flags.setup) return false;

    return true;
  }
};
module.exports = exports['default'];