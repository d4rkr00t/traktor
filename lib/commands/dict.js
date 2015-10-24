'use strict';

exports.__esModule = true;
exports['default'] = {
  name: 'dictionary',
  pos: 20,

  /**
   * Runs dict command.
   *
   * @returns {Promise}
   */
  run: function run(_ref) {
    var opts = _ref.opts;
    var imports = _ref.imports;
    var text = opts.text;
    var dest = opts.dest;
    var source = opts.source;
    var key = opts.yd_key;
    var yandexDictApi = imports.yandexDictApi;
    var dict = imports.formatters.dict;

    return yandexDictApi.lookup(key, text, dest, source).then(function (data) {
      return dict(data, opts, imports);
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
    if (!opts.yd_key) return false;
    if (!opts.text) return false;
    if (flags.setup) return false;

    return true;
  }
};
module.exports = exports['default'];