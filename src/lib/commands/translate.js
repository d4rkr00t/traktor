export default {
  name: 'translate',
  pos: 10,

  /**
   * Runs translate command.
   *
   * @returns {Promise}
   */
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

  /**
   * Check if command should be called.
   *
   * @param {Object} flags
   * @param {Object} opts
   *
   * @returns {Boolean}
   */
  check(flags, opts) {
    if (!opts.yt_key) return false;
    if (!opts.text) return false;
    if (flags.setup) return false;

    return true;
  }
};
