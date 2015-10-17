'use strict';

exports.__esModule = true;
exports['default'] = {
  name: 'setup',
  pos: 0,

  run: function run(opts, imports, flags) {
    var messages = imports.messages;
    var config = imports.config;
    var setup = flags.setup;

    if (!opts.apiKey && (typeof setup !== 'string' || setup === 'key' && !opts.text)) {
      return Promise.resolve(messages.setupNeeded());
    }

    if (setup === 'key' && opts.apiKey === opts.text) {
      config.write({ apiKey: opts.text }, imports);

      return Promise.resolve(messages.setupKeyAlreadyExists());
    } else if (setup === 'key' && opts.apiKey !== opts.text && opts.text) {
      config.write({ apiKey: opts.text }, imports);

      return Promise.resolve(messages.setupKeyCompleted());
    }

    if (setup && !opts.text) {
      return Promise.resolve(messages.setupHelp());
    }

    return Promise.resolve();
  },

  check: function check(flags) {
    return flags.setup;
  }
};
module.exports = exports['default'];