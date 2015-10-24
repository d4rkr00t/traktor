'use strict';

exports.__esModule = true;
exports['default'] = {
  name: 'detect-lang',
  pos: 0,

  /**
   * Runs detect-lang command.
   *
   * @returns {Promise}
   */
  run: function run(_ref) {
    var opts = _ref.opts;
    var imports = _ref.imports;
    var text = opts.text;
    var key = opts.yt_key;
    var yandexTranslateApi = imports.yandexTranslateApi;
    var detectedLang = imports.formatters.detectedLang;

    return yandexTranslateApi.detect(key, text).then(function (lang) {
      detectedLang(lang, opts, imports);

      return lang;
    }).then(function (lang) {
      return opts.source = lang || '';
    });
  },

  /**
   * Check if command should be called.
   *
   * @param {Object} flags
   * @param {Object} opts
   *
   * @returns {Boolean}
   */
  check: function check(flags, opts) {
    if (!opts.yt_key) return false;
    if (!opts.text) return false;
    if (flags.setup) return false;

    return true;
  }
};
module.exports = exports['default'];