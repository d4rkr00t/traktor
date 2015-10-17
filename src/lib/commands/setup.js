export default {
  name: 'setup',
  pos: 0,

  run(opts, imports, flags) {
    const { messages, config } = imports;
    const { setup } = flags;

    if (!opts.apiKey && (typeof setup !== 'string' || (setup === 'key' && !opts.text))) {
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

  check(flags) {
    return flags.setup;
  }
};
