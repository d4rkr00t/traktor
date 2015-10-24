export default {
  name: 'translate',
  pos: 10,

  run({ opts, imports }) {
    const { text, dest, source, yt_key: key } = opts;
    const {
      yandexTranslateApi,
      formatters: { translate }
    } = imports;

    return yandexTranslateApi
      .translate(key, text, dest, source)
      .then(data => translate(data, opts, imports));
  },

  check(flags, opts) {
    if (!opts.yt_key) return false;
    if (!opts.text) return false;
    if (flags.setup) return false;

    return true;
  }
};
