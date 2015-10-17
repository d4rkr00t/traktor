'use strict';

exports.__esModule = true;
var API = 'https://translate.yandex.net/api/v1.5/tr.json/translate';

exports['default'] = {
  name: 'translate',
  pos: 10,

  run: function run(opts, imports) {
    var got = imports.got;
    var messages = imports.messages;
    var _ = imports._;
    var text = opts.text;
    var dest = opts.dest;
    var src = opts.src;
    var key = opts.apiKey;

    return got.get(API, {
      text: text,
      key: key,
      lang: _.compact([src, dest]).join('-')
    }).then(function (res) {
      return console.log(res.body);
    });
  },

  check: function check(flags, opts) {
    if (!opts.apiKey) return true;
    if (!opts.text) return true;

    return true;
  }
};
module.exports = exports['default'];