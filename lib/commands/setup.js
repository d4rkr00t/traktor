'use strict';

exports.__esModule = true;
exports['default'] = {
  name: 'setup',
  pos: 0,

  /**
   * Runs setup command.
   *
   * @returns {Promise}
   */
  run: function run(_ref) {
    var opts = _ref.opts;
    var imports = _ref.imports;
    var messages = imports.messages;
    var config = imports.config;

    if (!opts.yt_key) {
      messages.setupRequired();
      messages.setupHelp();
      config.bootstrap(imports);
      return;
    }

    if (!opts.yd_key) {
      messages.setupOptional();
      messages.setupHelp();
      return;
    }

    if (opts.yt_key && opts.yd_key) {
      return messages.setupCompleted();
    }

    return Promise.resolve();
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
    return flags.setup || !opts.yt_key;
  }
};
module.exports = exports['default'];