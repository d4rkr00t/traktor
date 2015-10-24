export default {
  name: 'setup',
  pos: 0,

  run({ opts, imports }) {
    const { messages, config } = imports;

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

  check(flags, opts) {
    return flags.setup || !opts.yt_key;
  }
};
