'use strict';

exports.__esModule = true;
exports['default'] = {
  name: 'translate',
  pos: 10,

  /**
   * Runs translate command.
   *
   * @returns {Promise}
   */
  run: function run(_ref) {
    var opts = _ref.opts;
    var imports = _ref.imports;
    var text = opts.text;
    var dest = opts.dest;
    var source = opts.source;
    var key = opts.yt_key;
    var yandexTranslateApi = imports.yandexTranslateApi;
    var translate = imports.formatters.translate;

    return yandexTranslateApi.translate(key, text, dest, source).then(function (data) {
      return translate(data, opts, imports);
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