const API = 'https://translate.yandex.net/api/v1.5/tr.json/translate';

export default {
  name: 'translate',
  pos: 10,

  run(opts, imports) {
    const { got, messages, _ } = imports;
    const { text, dest, src, apiKey: key } = opts;

    return got.get(API, {
      text,
      key,
      lang: _.compact([src, dest]).join('-')
    }).then(res => console.log(res.body));
  },

  check(flags, opts) {
    if (!opts.apiKey) return true;
    if (!opts.text) return true;

    return true;
  }
};
