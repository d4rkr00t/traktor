export default {
  name: 'dictionary',
  pos: 20,

  run({ opts, imports }) {
    const { text, dest, source, yd_key: key } = opts;
    const {
      yandexDictApi,
      formatters: { dict }
    } = imports;

    return yandexDictApi
      .lookup(key, text, dest, source)
      .then(data => dict(data, opts, imports));
  },

  check(flags, opts) {
    if (!opts.yd_key) return false;
    if (!opts.text) return false;
    if (flags.setup) return false;

    return true;
  }
};
