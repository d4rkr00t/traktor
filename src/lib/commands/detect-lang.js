export default {
  name: 'detect-lang',
  pos: 0,

  run({ opts, imports }) {
    const { text, yt_key: key } = opts;
    const {
      yandexTranslateApi,
      formatters: { detectedLang }
    } = imports;

    return yandexTranslateApi
      .detect(key, text)
      .then(lang => {
        detectedLang(lang, opts, imports);

        return lang;
      })
      .then(lang => opts.source = lang || '');
  },

  check(flags, opts) {
    if (!opts.yt_key) return false;
    if (!opts.text) return false;
    if (flags.setup) return false;

    return true;
  }
};
